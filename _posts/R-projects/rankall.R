rankall <- function(outcome, num = "best") {
        
        ## Read outcome data
        data <- read.csv("outcome-of-care-measures.csv", 
                         na.strings="Not Available", stringsAsFactors=FALSE)
        
        ## check that state and outcome are valid
        outcomeList <- c("heart attack", "heart failure", "pneumonia")
        states <- levels(data[,7])
        '%!in%' <- function(x,y) {!('%in%'(x,y))}
        if (outcome %!in% outcomeList) {
                stop("invalid outcome")
        } 
        
        ## For each state, find the hospital of the given rank.
        ## We are going to create a smaller subset of our data, df.
        column <- if (outcome == "heart attack") { 
                11
        } else if (outcome == "heart failure") {
                17
        } else if (outcome == "pneumonia") {
                23
        }

        df <- data[, c(2, 7, column)]
        
        ## Order the small data frame by best mortality rate to worst, or the reverse
        ## if the "worst" hospitals are desired.
        
        if (num == "worst") {
                orderdata <- df[order(df[,3], df[,1], decreasing = TRUE),] 
        } else {
                orderdata <- df[order(df[,3], df[,1]),] ## col3 is outcome, 
                                                        ## col1 is name (for tie)
        }
        
                orderdata <- na.omit(orderdata)
        s <- split(orderdata, orderdata$State)
        
        # The following `sapply` function returns a list of ordered hospitals by state.
        hospitals_by_state <- sapply (s, "[[", 1)

        rank <- if (num == "best" | num == "worst") {
                        1
                } else {
                        num
                }

        ## Return a data frame with the hospital names and the
        ## (abbreviated) state name
        
        best_hospitals <- lapply(hospitals_by_state, "[", rank)
        best_hospitals <- as.data.frame(best_hospitals)
        return(best_hospitals)  

}
        