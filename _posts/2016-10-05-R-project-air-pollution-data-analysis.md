---
layout: post
title: "R Project: Analyzing Air Pollution Data"
date: 2016-10-06
---

I recently completed a project for one of my data science courses. The project's goal was
to have us use R's graphics packages to explore data. The PM2.5 Emissions Data contained 
over 6 million observations across 9 years. I answered the questions in this 
assignment using the base plotting system, `ggplot2`, and `dplyr` packages. 

The data for this project are available for download at the EPA website [here.](http://aqsdr1.epa.gov/aqsweb/aqstmp/airdata/download_files.html)

## Codebook
  
### PM2.5 Emissions Data. 

Contains all of PM2.5 emissions data for '99, '02, '05, '08.
For each year, the table contains number of tons of PM2.5 emitted from a specific type
of source for the entire year.
   
file name: [summarySCC_PM25.rds](https://github.com/kairstenfay/kairstenfay.github.io/blob/master/_posts/R-projects/summarySCC_PM25.rds)
 
#### Column names: 
   
* fips: county code
   
* SCC: name of source
   
* Pollutant: pollutant type; string
   
* Emissions: amount of PM2.5 emitted, in tons
   
* type: Type of source, i.e. point or non-point
   
* year: year of emissions record
   
   
### Source Classification Code Table.
Provides a mapping from the SCC digit strings in the PM2.5 emissions data to the actual name
 of the PM2.5 source. The sources are categorized in a few different ways from more general 
 to more specific. For ex, source "10100101" is known as "Ext Comb/Electric Gen/Anthracite Coal/Pulverized Coal".
 
file name: [Source_Classification_Code.rds](https://github.com/kairstenfay/kairstenfay.github.io/blob/master/_posts/R-projects/Source_Classification_Code.rds)



The following assignment description was taken directly from my class.

# Assignment

The overall goal of this assignment is to explore the National Emissions Inventory database 
and see what it say about fine particulate matter pollution in the United states over the 
10-year period 1999–2008. You may use any R package you want to support your analysis.

## Questions

You must address the following questions and tasks in your exploratory analysis. For each 
question/task you will need to make a single plot. Unless specified, you can use any 
plotting system in R to make your plot.

1. Have total emissions from PM2.5 decreased in the United States from 1999 to 2008? Using
 the base plotting system, make a plot showing the total PM2.5 emission from all sources 
 for each of the years 1999, 2002, 2005, and 2008.
 
2. Have total emissions from PM2.5 decreased in the Baltimore City, Maryland 
(𝚏𝚒𝚙𝚜 == "𝟸𝟺𝟻𝟷𝟶") from 1999 to 2008? Use the base plotting system to make a plot answering 
this question.

3. Of the four types of sources indicated by the 𝚝𝚢𝚙𝚎 (point, nonpoint, onroad, nonroad) 
variable, which of these four sources have seen decreases in emissions from 1999–2008 for 
Baltimore City? Which have seen increases in emissions from 1999–2008? Use the ggplot2 
plotting system to make a plot answer this question.

4. Across the United States, how have emissions from coal combustion-related sources 
changed from 1999–2008?

5. How have emissions from motor vehicle sources changed from 1999–2008 in Baltimore City?

6. Compare emissions from motor vehicle sources in Baltimore City with emissions from motor 
vehicle sources in Los Angeles County, California (𝚏𝚒𝚙𝚜 == "𝟶𝟼𝟶𝟹𝟽"). Which city has seen 
greater changes over time in motor vehicle emissions?



## My Answers

1. [plot1.png](https://github.com/kairstenfay/kairstenfay.github.io/blob/master/_posts/R-projects/plot1.png), 
[plot1.R](https://github.com/kairstenfay/kairstenfay.github.io/blob/master/_posts/R-projects/plot1.R)

2. [plot2.png](https://github.com/kairstenfay/kairstenfay.github.io/blob/master/_posts/R-projects/plot2.png), 
[plot2.R](https://github.com/kairstenfay/kairstenfay.github.io/blob/master/_posts/R-projects/plot2.R)

3. [plot3.png](https://github.com/kairstenfay/kairstenfay.github.io/blob/master/_posts/R-projects/plot3.png), 
[plot3.R](https://github.com/kairstenfay/kairstenfay.github.io/blob/master/_posts/R-projects/plot3.R)

4. [plot4.png](https://github.com/kairstenfay/kairstenfay.github.io/blob/master/_posts/R-projects/plot4.png), 
[plot4.R](https://github.com/kairstenfay/kairstenfay.github.io/blob/master/_posts/R-projects/plot4.R)

5. [plot5.png](https://github.com/kairstenfay/kairstenfay.github.io/blob/master/_posts/R-projects/plot5.png), 
[plot5.R](https://github.com/kairstenfay/kairstenfay.github.io/blob/master/_posts/R-projects/plot5.R)

6. [plot6.png](https://github.com/kairstenfay/kairstenfay.github.io/blob/master/_posts/R-projects/plot6.png), 
[plot6.R](https://github.com/kairstenfay/kairstenfay.github.io/blob/master/_posts/R-projects/plot6.R)
