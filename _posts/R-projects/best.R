best <- function(state, outcome) {
        
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
        
        ## return hospital with the best rank in outcome for a state
        column <- if (outcome == "heart attack") { 
                11
        } else if (outcome == "heart failure") {
                17
        } else if (outcome == "pneumonia") {
                23
        }
        ## The following function with `grep` returns a subset of the original data
        ## with only data containing the specified state.
        statedata <- data[grep(state, data$State),]
        orderdata <- statedata[order(statedata[,column], statedata[,2]),]
        numberone <- (orderdata[1,2]) #first number is rank, 2nd is col for name
        return(numberone)
}