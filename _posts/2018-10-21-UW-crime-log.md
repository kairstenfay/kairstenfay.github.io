---
layout: post
title: "UW Crime Log - making UWPD data more accessible"
date: 2018-10-21
---
<a href="https://baddawgs.andrey.ninja">
    <img class="link post" src="../../../images/baddawgs-home.png"></a>

Those of you who know me may know that earlier this year, I participated in a
Amazon Catalyst/UW CoMotion competition and pitched an idea to the board. I made
it to the final round, where unfortunately I was not selected to proceed.

The project I pitched was around making data collected by the UW Police Department
more accessible by students, the general public, and police officers.

This past weekend, I participated in the 2018 Dubhacks Hackathon where I'm
happy to say that my idea got a new chance. I partnered with two undergraduate
UW students, and we got to work right away on the product. We imagined a product
that directly feeds from the data presented by the UW Police Department. We
scraped the data from [UW's 60 Day Crime Log PDF](http://police.uw.edu/crimedata/60daylog/) into a json file using Python's tabula-py library.
From there, we geocoded the address data using Google's geocoding API. We used
JavaScript to map the data and create the histogram and donut charts. Please
view the product at our temporary location [here](https://baddawgs.andrey.ninja).
