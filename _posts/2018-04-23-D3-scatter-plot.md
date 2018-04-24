---
layout: post
title: "My first D3 Graph"
date: 2018-04-23
---
<script src="//code.jquery.com/jquery.js"></script>
<style>

            .axis path,
            .axis line {
                fill : none;  /* when we use CSS to style SVG elements, we should only use SVG attribute names,*/
                stroke: black; /* not regular CSS properties */
                shape-rendering: crispEdges;
            }

            .axis text {
                font-family: sans-serif;
                font-size: 11px;
            }

</style>
Here is some text.  
  

<div id='d3div'></div>
And some more text.  
  

<script src="//d3js.org/d3.v3.min.js"></script>
<script>

					// Dynamic, random data set 
					var dataset = [];
					var numDataPoints = 50;
					var xRange = Math.random() * 1000;
					var yRange = Math.random() * 1000;
					for (var i = 0; i < numDataPoints; i++) { 
						var newNumber1 = Math.floor(Math.random() * xRange);
						var newNumber2 = Math.floor(Math.random() * yRange);
						dataset.push([newNumber1, newNumber2]);
					}

					// we want to keep our code flexible, so will
					// analyze our datasets on the fly
					d3.max(dataset, function(d) { 
						return d[0];
					})

					var padding = 30; // keeps labels from being cut off 
					var w = 600;
					var h = 400;

					// setting up dynamic scales
					var xScale = d3.scale.linear()
										 .domain([0, d3.max(dataset, function(d) { return d[0];})])
										 .range([padding, w - 2 * padding]); //instead of [0, w-0]. doubling keeps labels 
										 // on far right from being cut off 

					var yScale = d3.scale.linear()
										 .domain([0, d3.max(dataset, function(d) { return d[1];})])
										 .range([h - padding, padding]); // otherwise larger y-values are at the bottom


					var rScale = d3.scale.linear()
										 .domain([0, d3.max(dataset, function(d) { return d[1]; })])
										 .range([2, 5]);
					// setting up axes
					var xAxis = d3.svg.axis()
									  .scale(xScale)
									  .orient("bottom")
									  .ticks(5); // D3 interprets this as a mere suggestion 

					var yAxis = d3.svg.axis()
									  .scale(yScale)
									  .orient("left")
									  .ticks(5);

					// incorporating scaled values 
					var svg = d3.select("#d3div")
					            .append("svg")
					            .attr("width", w)
					            .attr("height", h);

					svg.selectAll("circle")
					    .data(dataset)
					    .enter()
					    .append("circle")
					    .attr("cx", function(d) {
					        return xScale(d[0]);
					    })
					    .attr("cy", function(d) {
					        return yScale(d[1]);
					    })
					    .attr("r", function(d) { 
					   		return rScale(d[1]);
					    });
					//labels 
					// svg.selectAll("text")
					// 	.data(dataset)
					// 	.enter()
					// 	.append("text")
					// 	.text(function(d) { 
					// 		return d[0] + ',' + d[1];
					// 	})
					// 	.attr("x", function(d) { 
					// 		return xScale(d[0]);
					// 	})
					// 	.attr("y", function(d) { 
					// 		return yScale(d[1]);
					// 	})
					// 	.attr("font-family", "sans-serif")
					// 	.attr("font-size", "11px")
					// 	.attr("fill", "red"); 

					// put this code at the end of the script so that it's generated after
					// the other elements and goes 'on top'
					svg.append("g")
						.attr("class", "axis") // Assign "axis" class
						.attr("transform", "translate(0," + (h - padding) + ")") // put the axis on the bottom
						.call(xAxis); // see CSS styles in the <head> of our page 

					svg.append("g")
						.attr("class","axis")
						.attr("transform", "translate(" + padding + ",0)")
						.call(yAxis);


</script>