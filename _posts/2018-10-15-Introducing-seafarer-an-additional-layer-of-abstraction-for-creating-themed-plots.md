---
layout: post
title: "Introducing seafarer - an additional layer of abstraction for creating themed plots in python"
date: 2018-10-15
---
<a href="https://github.com/kairstenfay/seafarer">
    <img class="link post" src="../../../images/swarmboxplot-example.png"/></a>

This weekend, I developed my first open source library.
It's still in its early stages of development, but here's the gist of it:
Say you have a need for a set of plots of more or less the same structure and the
same aesthetics. Then, `seafarer` could be the perfect solution for you!
It abstracts many of the details of `seaborn` and `matplotlib` plots, giving
the client a set of graph styles (e.g. box plot, violin plot) to choose from
along with a set of color palettes. The title and axes labels are editable
as well as the font size, but everything else will stay the same.

My inspiration for this project developed from two parallel forces in my life.
1. The desire to eliminate redundancy in my code when preparing a submission for a
data viz contest, where I was using `seaborn` and `matplotlib` to create my graphs.
I initially just wrote functions for each plot, but even then I was unsatisfied
with the redundancy between functions, and I began thinking of an object-oriented
solution for refactoring the plot code.
2. At [IHME](http://healthdata.org), where I currently work, there was an
increased need for creating plots with specific aesthetics. I saw the perfect
opportunity to join my personal interests with a side-project at work.

Thus, thrust between these two forces in my life, I decided to develop `seafarer`.
See it [here](https://github.com/kairstenfay/seafarer).
