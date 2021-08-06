## Titanic data set on Kaggle
## Competition submission by Kairsten Fay

library(Hmisc)          ## rcorr() 
library(stringr)        ## str_extract()
library(dplyr)          ## reshaping data 
library(corrgram)       ## corrgram()
library(ROCR)           ## ROC curve and AUC 
library(randomForest)   ## random forest
library(ggplot2)        ## graphics


## Load the data from https://www.kaggle.com/c/titanic/data
timeDownloaded <- Sys.time()
print(timeDownloaded)

train_raw                   <- read.csv("train.csv", na.strings="")
test_raw                    <- read.csv("test.csv", na.strings="")
soln_raw                    <- read.csv("titanic.csv", na.strings="")

train_raw$Name <- as.character(train_raw$Name)
test_raw$Name <- as.character(test_raw$Name)
test_raw$Survived <- NA
res_raw <- rbind(train_raw, test_raw)

res_arr <- arrange(res_raw, Name)
soln_arr <- arrange(soln_raw, name)

Survived <- soln_arr$survived
PassengerId <- res_arr$PassengerId
soln_bind <- data.frame(cbind(PassengerId, Survived))
soln <- arrange(soln_bind, PassengerId) 


## Clean the data
str(res_raw)
res_raw$Ticket <- as.character(res_raw$Ticket)
res_raw$Name <- as.character(res_raw$Name)
str(res_raw)

summary(res_raw)
summary(is.na(res_raw))

## missing values for Age, Cabin, Embarked, Fare
dim(res_raw)

## Throw out PassengerId
res <- subset(res_raw, select=c(Survived, Name, Ticket, Pclass, Sex, Age, SibSp, Parch, Fare, Embarked, Cabin))

## Impute missing values on Embarked with the mode, 'S'
res$Embarked[is.na(res$Embarked)] <- 'S'
which(is.na(res$Embarked))

## Impute missing value for Fare with the median for that Pclass
res$Fare[is.na(res$Fare)] <- with(res, ave(Fare, Pclass,
                        FUN = function(x) median(x, na.rm=TRUE)))[is.na(res$Fare)]
which(is.na(res$Fare))

## Feature engineering: Create a variable called Title
res$Title <- NA
reg.ex1 <- "Mrs\\.|Mr\\.|Ms\\.|Miss\\.|Rev\\.|Master\\.|Dr\\.|Mme\\.|Mlle\\.|Major\\.|Capt\\.|Jonkheer\\.|Countess\\.|Col\\.|Dona\\.|
Don\\.|Lady\\.|Sir\\."
res$Title <- str_extract(res$Name, reg.ex1)
## Check to make sure everybody got a title
table(is.na(res$Title))
which(is.na(res$Title))
res[31,] ## For some reason, this row didn't get its proper title.
res[31,12] <- "Don."
res$Title <- factor(res$Title)
summary(res$Title)


## Feature engineering: LastName
res$LastName <- NA
##reg.ex3 <- ".*\\s.*," ## This gets those with two last names
reg.ex2 <- ".*," 
res$LastName <- str_extract(res$Name, reg.ex2)
res$LastName <- gsub(",", "", res$LastName)
table(is.na(res$LastName)) 


## Feature engineering: TktPre, TktNum (thanks to suggestion on Kaggle from Stephen
## McInerney)
res$TktPre <- NA; res$TktNum <- NA
reg.ex3 <- ".*\\s|^[A-Z].*(?![0-9])$" 
res$TktPre <- str_extract(res$Ticket, reg.ex3)
res$TktPre <- gsub("\\.|\\s|/", "", res$TktPre)
res$TktPre[is.na(res$TktPre)] <- "_"
res$TktPre <- factor(res$TktPre)
str(res$TktPre)

reg.ex4 <- "\\s[0-9]{1,}|^(?![A-Z]).*"
res$TktNum <- str_extract(res$Ticket, reg.ex4)
res$TktNum[is.na(res$TktNum)] <- "0"
res$TktNum <- as.numeric(res$TktNum)
summary(res$TktNum)


## Feature engineering: FamilySize
res$FamilySize <- res$SibSp + res$Parch + 1
res$relFamilySize <- NA
res$relFamilySize <- factor(res$relFamilySize)
res$relFamilySize <- ifelse(res$FamilySize == 1, "self", 
                            ifelse(res$FamilySize <= 4, "small", "large")) 
res$relFamilySize <- factor(res$relFamilySize)

## Feature engineering: Number of Family Survived
## This is not a perfect feature, as some unrelated people have same last names
familyAgg <- res %>% group_by(LastName) %>% summarise(n=sum(Survived, na.rm=TRUE))
familyDf <- data.frame(familyAgg)
rownames(familyDf) <- familyDf[,1]
res$FamilySurvived <- NA 

for(i in 1:length(res$LastName)){
        surname <- res$LastName[i]
        res$FamilySurvived[i] <- familyDf[surname,2] 
}

## Feature engineering: Proportion of Family Survived
## This is not a perfect feature, as some unrelated people have same last names
res$PropSurvived <- res$FamilySurvived/res$FamilySize

             
## Feature engineering: Sib or Sp survived?
res$SibSpLive <- ifelse(res$FamilySurvived>0 & res$SibSp!= 0, T, F)

## Feature engineering: Par or ch survived?
res$ParchLive <- ifelse(res$FamilySurvived>0 & res$Parch!=0, T, F)



## Impute missing values for age according to the median age for a good column
summary(res$Age)
table(is.na(res$Age))


##########################################
## Deciding which column to base age on ##
##########################################

corrgram(res) ## Not very well correlated with SibSp, Parch, TktNum, FamilySize
## rcorr() shows not with Sex, Embarked, Cabin, as.factor(LastName), TktPre, TktNum, or
## relFamilySize either
rcorr(res$Age, res$Fare)
## 0.18
rcorr(res$Age, res$Pclass)
## -0.41
rcorr(res$Age, res$Title)
## 0.3

## Pclass wins.
table(is.na(res$Age))
res$Age[is.na(res$Age)] <- with(res, ave(Age, Pclass, Title, 
                        FUN = function(x) median(x, na.rm=TRUE)))[is.na(res$Age)]
which(is.na(res$Age))
res[980,] ## Pclass==3
## For some reason, we have a NA for Age at row 980. Let's give it the median value.
tbl <- res %>% group_by(Pclass) %>% summarise(median(Age, na.rm=TRUE))
res$Age[980] <- tbl[3,2]
res$Age <- as.numeric(res$Age)

res$relAge <- NA
res$relAge <- ifelse(res$Age < 7, "0_baby", 
                        ifelse(res$Age < 18, "1_child", 
                        ifelse(res$Age < 41, "2_young_adult", "3_adult")))
res$relAge <- factor(res$relAge)

## Feature engineering: Create a new variable for the first letter of last name.
res$SurnameL <- NA
res$SurnameL <- factor(substr(res$LastName, start=1, stop=1))

## Feature engineering: Create a new variable with the first letter of Cabin, called 
## CabinL
res$CabinL <- NA
res$CabinL <- factor(substr(res$Cabin, start=1, stop=1)) # , levels = c("A", "B", "C", "D", "E", "F", "G", "T"))
summary(res$CabinL)

## This data are sparse so proceed with caution! Great risk of overfitting

## !! 

## !! 

res$CabinFloor <- NA
res$CabinFloor <- ifelse(res$CabinL=="A", 1, 
                         ifelse(res$CabinL=="B", 2, 
                        ifelse(res$CabinL=="C", 3, 
                        ifelse(res$CabinL=="D", 4, 
                        ifelse(res$CabinL=="E", 5,
                        ifelse(res$CabinL=="F", 6, 
                        ifelse(res$CabinL=="G", 7, 
                        ifelse(res$CabinL=="T", 0, NA))))))))
res$CabinFloor <- as.integer(res$CabinFloor)

corrgram(res) ## CabinFloor most correlated with Pclass at rcorr() = 0.62 

res$CabinFloor[is.na(res$CabinFloor)] <- with(res, ave(CabinFloor, Pclass,
                        FUN = function(x) median(x, na.rm=TRUE)))[is.na(res$CabinFloor)]
which(is.na(res$CabinFloor))

res$relCabinFloor <- NA
res$relCabinFloor <- ifelse(res$CabinFloor < 4, "upper half", "lower half")
res$relCabinFloor <- factor(res$relCabinFloor)


## Explore the data
## See graphs in .Rmd file 

## Families tend to sink or swim together 
table(res$Survived, res$LastName) 

corrgram(res)
rcorr(res$Survied, res$Title)
## -0.2
rcorr(res$Survived, res$Pclass)
## -0.34
rcorr(res$Survived, res$Fare)
## 0.26

######################################
# Split the data into train and test #
######################################

## Remove Name (2), Ticket (3), Cabin (11), LastName (13), FamilySurvived (18), 
## PropSurvived (19), CabinL (24), CabinFloor (25)
res$Survived <- factor(res$Survived)
names(res)
train <- res[1:891, c(-2, -3, -11, -13, -18, -19, -24, -25)] 
test <- res[892:1309, c(-2, -3, -11, -13, -18, -19, -24, -25)] 

test_soln <- soln[892:1309,]
test_soln$Survived <- factor(test_soln$Survived)




## Model 1.1 Build and evaluate a random forest
set.seed(0)
rf <- randomForest(as.factor(Survived)~ Pclass+Sex+Age+SibSp+Parch+Fare+Title+ 
                           ParchLive + SibSpLive + relCabinFloor 
                           +TktPre+TktNum+FamilySize+SurnameL+relFamilySize,
                  
                        data=train, ntree=401, importance=TRUE) 
                        #, do.trace=3, keep.inbag=TRUE)
importance(rf)
print(rf)

out.rf <- predict(rf, newdata=test)
mean(out.rf == test_soln$Survived)
## 0.8253589

test$Survived <- out.rf 

p <- predict(rf, newdata=test, type="class")
pr <- prediction(as.numeric(p), as.numeric(test_soln$Survived))
prf <- performance(pr, measure="tpr", x.measure="fpr")
plot(prf)

auc <- performance(pr, measure="auc")
auc <- auc@y.values[[1]]
auc
## Area under curve is 0.786. We want as close to 1 as possible.

my_soln <- data.frame(PassengerId = test_raw$PassengerId, Survived=test$Survived)
write.csv(my_soln, "my_titanic_soln.csv", row.names=FALSE)



