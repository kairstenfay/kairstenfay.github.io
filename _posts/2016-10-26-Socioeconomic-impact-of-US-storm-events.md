---
layout: post
title: "Socioeconomic Impact of US Storm Events"
date: 2016-10-26
---

For this assignment from my Reproducible Research class at [Coursera](https://www.coursera.org), I completed a brief 
analysis of the negative impacts storm events have historically had on US population, property, and crops.


We were given the following National Weather Service data.
  
-   A compressed [CSV of Storm Data](https://github.com/kairstenfay/kairstenfay.github.io/blob/master/_posts/R-projects/repdata%252Fdata%252FStormData.csv.bz2)
-   A [codebook](https://github.com/kairstenfay/kairstenfay.github.io/blob/master/_posts/R-projects/NWS_Storm_data_documentation.pdf) explaining the variables
-   A [Storm Data FAQ](https://github.com/kairstenfay/kairstenfay.github.io/blob/master/_posts/R-projects/National_Climatic_Data_Center_Storm_Events_FAQ.pdf) page  

The audience for this assignment was my fellow classmates. As we were expected to read the provided
documentation, it was assumed that we knew the following.
  
-   `EVTYPE`: stands for the storm event type, i.e. hurricane/typhoon or tornado
-   `FATALITIES`: represents the number of people killed during a storm event
-   `INJURIES`: represents the number of people injured during a storm event 
-   `PROPDMG`: represents the property damage in US dollars caused by a storm event
-   `PROPDMGEXP`: represents the exponent affiliated with the property damage. For example, if `PROPDMG` = 5 and `PROPDMGEXP` = K, then the total property
damage is $5000
-   `CROPDMG`: represents the crop damage in US dollars caused by a storm event 
-   `CROPDMGEXP`: same as `PROPDMGEXP` but for crops


Please view my [RPubs document](http://rpubs.com/kafay/Storm-events-US-Socioeconomic-Impact)
to view my submission for this assignment.


