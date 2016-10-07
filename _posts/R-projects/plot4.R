library(dplyr)
## Read the data into R
## PM2.5 Emissions Data. contains all of PM2.5 emissions data for '99, '02, '05, '08.
NEI <- readRDS("summarySCC_PM25.rds")

## Source Classification Code Table - provies a mapping from the SCC digit strings in the
## Emissions table to the actual name of the PM2.5 source.
SCC <- readRDS("Source_Classification_Code.rds")

## Subset the NEI data frame by year and reduce to three columns: Emissions, year, and fips
pm0 <- subset(NEI, year==1999)
pm1 <- subset(NEI, year==2002)
pm2 <- subset(NEI, year==2005)
pm3 <- subset(NEI, year==2008)

## Control for site location: 3 steps. 
## Step 1. Extract site names (fips).
site0 <- unique(pm0$fips)
site1 <- unique(pm1$fips)
site2 <- unique(pm2$fips)
site3 <- unique(pm3$fips)

## Step 2. Collect names of sites where data is recorded each year.
both01 <- intersect(site0, site1)
both012 <- intersect(both01, site2)
samesites <- intersect(both012, site3)

## Step 3. Subset the data excluding sites which do not have records for every year of 
## interest.
pm0sub <- subset(pm0, fips %in% samesites)
pm1sub <- subset(pm1, fips %in% samesites)
pm2sub <- subset(pm2, fips %in% samesites)
pm3sub <- subset(pm3, fips %in% samesites)

## Create a new data frame with summarized data
newdf <- rbind(pm0sub, pm1sub, pm2sub, pm3sub)

sn <- SCC$Short.Name
coal <- subset(SCC, grepl("Coal", sn))
mrg <- merge(newdf, coal, by = "SCC")
coaldf <- mrg %>% select(Emissions, year, type, fips, Short.Name)

plotdat <- coaldf %>% group_by(year) %>% summarize(sum(Emissions))

## Build and save a plot
png(filename="plot4.png", width = 480, height = 480, units = "px")
rline <- lm(`sum(Emissions)` ~ year, plotdat) ## Create a linear regression model
with(plotdat, plot(year, `sum(Emissions)`, ylab = "Total (in tons)", 
                   main = "PM2.5 Emissions from Coal in the U.S."))
mtext("1999-2008")
abline(rline, lty=5, col="red")
dev.off()

