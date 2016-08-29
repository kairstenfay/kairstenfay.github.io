rankhospital <- function(state, outcome, num = "best") {
        
        ## Read outcome data
        data <- read.csv("outcome-of-care-measures.csv", 
                         na.strings="Not Available", stringsAsFactors=FALSE)
        
        
        ## check that state and outcome are valid
        outcomeList <- c("heart attack", "heart failure", "pneumonia")
        stateList <- data$State
        
        '%!in%' <- function(x,y) {!('%in%'(x,y))}
        if (state %!in% stateList) {
                stop("invalid state") 
        }
        if (outcome %!in% outcomeList) {
                stop("invalid outcome")
        }
        
        ## return hospital with a specified rank in outcome for a state
        column <- if (outcome == "heart attack") { 
                11
        } else if (outcome == "heart failure") {
                17
        } else if (outcome == "pneumonia") {
                23
        }
        
        statedata <- data[grep(state, data$State),]
        orderdata <- statedata[order(statedata[,column], statedata[,2]),] ## arg2 if tie
        output <- rbind(orderdata[, c(2, 7, column)])
        complete_data <- na.omit(output)
        
        rank <- if (num == "best") {
                1
        } else if (num == "worst") {
                as.numeric(nrow(complete_data))
        } else if (num %in% 1:nrow(complete_data)) {
                num
        } else if (num > nrow(complete_data)) {
                stop("NA")
        }
        
        ## return the ranked hospital for a condition with NAs removed
        return(complete_data[rank, 1]) ## the hospital name is now in the 1st column
}        
