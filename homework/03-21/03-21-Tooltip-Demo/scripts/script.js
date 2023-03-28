/*

ARTG5330 Visualization Technologies 1
    March 21, 2023
    Spring Semester
    Week 9

    TOOLTIP implementation.
    Re: Based on the Gapminder dataset used on 02-21 to create a scatterplot
            "Life Expectancy over GDP per capita over, Year 2007"
*/

/*
    1. DEFINE DIMENSIONS OF SVG + CREATE SVG CANVAS
*/

const width = document.querySelector("#chart").clientWidth;
const height = document.querySelector("#chart").clientHeight;

const svg = d3.select("#chart")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

/* 
    ADDING A TOOLTIP
        
    We begin by creating a new div element inside the #chart container, 
    giving it class 'tooltip'; note that this newly created div inherits 
    (receives) the CSS properties defined by the .tooltip { ... } rule 
    in the stylesheet.

    This tooltip variable is used later in the code to implement the actual tooltip.
*/

const tooltip = d3.select("#chart")
    .append("div")
    .attr("class", "tooltip");


// Load the Gapminder dataset
// REMINDER: d3.csv(), and all other data loading methods in D3 v7, return a "promise" object not a dataset/

// Put the d3.csv() method inside an array because the static method Promise.all() below
// requires an "iterable" object as input argument.
let promise = [d3.csv("./data/Somerville_Happiness_Survey_Responses.csv")];

/**
 * When all the data have been loaded, we call the function that draws the scatterplot
 * 
 * Experiment with console.log() to see how d3.csv load files.
 * Promises have three states: pending, fulfilled, and rejected
 * What you want is to have all primises being fulfilled before you move forward
 * with working with the data you loaded.
 * 
 * Promise.all() is a static method that waits for all promises to be fullfilled.
 * 
 * For more information on JavaScript promises, see:
 *      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
 */

Promise.all(promise).then(function(results){
    // So you need to specify [0], so the functions works with the dataset not an array
    drawScatterPlot(results[0]);
})

function drawScatterPlot(data) {

    /* 
    2. FILTER THE DATA 
    */

    let filtered_data = data.filter(function(d) {
        return (d.generalSatisfaction >= 0) && (d.generalSatisfaction <= 10) && (d.policeTrust >= 0) 
        && (d.policeTrust <= 10) && (d.Age < 120) && (d.Year != '2011');
    });

    console.log(filtered_data);
    /*
    3. DETERMINE MIN AND MAX VALUES OF VARIABLES
    */

    const lifeSat = {
        min: d3.min(filtered_data, function(d) { return +d.generalSatisfaction; }),
        max: d3.max(filtered_data, function(d) { return +d.generalSatisfaction; })
    };

    const trust = {
        min: d3.min(filtered_data, function(d) { return +d.policeTrust; }),
        max: d3.max(filtered_data, function(d) { return +d.policeTrust; })
    };

    const age = {
        min: d3.min(filtered_data, function(d) { return +d.Age; }),
        max: d3.max(filtered_data, function(d) { return +d.Age; })
    };

    console.log(trust.min, trust.max, lifeSat.max, lifeSat.min, age.min, age.max);

    /*
    4. CREATE SCALES

    We'll use the computed min and max values to create scales for
    our scatter plot.
    */

    const margin = {top: 50, left: 100, right: 50, bottom: 100};

    const xScale = d3.scaleLinear()
        .domain([lifeSat.min, lifeSat.max])
        .range([margin.left, width-margin.right]);

    const yScale = d3.scaleLinear()
        .domain([0, trust.max])
        .range([height-margin.bottom, margin.top]);

    const rScale = d3.scaleSqrt()
        .domain([age.min, age.max])
        .range([1, 15]);

    const fillScale = d3.scaleOrdinal()
        .domain(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"])
        .range(['#ff5733', '#c70039', '#900c3f', '#581845', '#0652DD', '#1289A7', '#fdcb6e', '#6ab04c', '#b33939', '#8e44ad']);


    /*
    5. DRAW AXES
    
    The following chunks of code draw 2 axes -- an x- an y-axis.
    */

    const xAxis = svg.append("g")
        .attr("class","axis")
        .attr("transform", `translate(0,${height-margin.bottom})`)
        .call(d3.axisBottom().scale(xScale));

    const yAxis = svg.append("g")
        .attr("class","axis")
        .attr("transform", `translate(${margin.left},0)`)
        .call(d3.axisLeft().scale(yScale));
    
    /*
        6. DRAW POINTS

        In this scatter plot, each circle will represent a single country;
        the horizontal position of the circle will represent GDP per capita,
        vertical position will represent life expectancy, color will represent
        continent, and radius will represent population

        The following chunk of code is the standard D3 data join pattern.
    */

// Define jitter amount
const jitterAmount = 12;

// Draw circles
const circles = svg.selectAll("circle")
    .data(filtered_data)
    .enter()
    .append("circle")
    .attr('stroke', 'black')
    .attr('stroke-width', 0.5)
    .attr('opacity', 0.5)
    .attr("cx", function(d) {
        // Add jitter to x position
        return xScale(+d.generalSatisfaction) + d3.randomNormal(0, jitterAmount)();
    })
    .attr("cy", function(d) {
        // Add jitter to y position
        return yScale(+d.policeTrust) + d3.randomNormal(0, jitterAmount)();
    })
    .attr("r", function(d) {
        return rScale(+d.Age);
    })
    .style("fill", function(d) {
        return fillScale(d.generalSatisfaction);
    })

    // const points = svg.selectAll("circle")
    //     .data(filtered_data)
    //     .enter()
    //     .append("circle")
    //         .attr("cx", function(d) { 
    //             return xScale(d.generalSatisfaction); 
    //         })
    //         .attr("cy", function(d) { return yScale(d.policeTrust); })
    //         .attr("r", function(d) { return rScale(d.Age); })
    //         .attr("fill", function(d) { return fillScale(d.generalSatisfaction); });

    /*
    7. DRAW AXIS LABELS

    The chunks of code below draw text labels for the axes.
    */

    const xAxisLabel = svg.append("text")
        .attr("class","axisLabel")
        .attr("x", width/2)
        .attr("y", height-margin.bottom/2)
        .text("General Life Satisfaction");

    const yAxisLabel = svg.append("text")
        .attr("class","axisLabel")
        .attr("transform","rotate(-90)")
        .attr("x",-height/2)
        .attr("y",margin.left/2)
        .text("Trust in the Police");

    const otherText = svg.append("text")
        .attr("class", "chartText")
        .attr("x", width/2)
        .attr("y", margin.top)
        .text("Sized by Age, Colored by Satisfaction");

    /*
        TOOLTIP Interactivity Implementation

        When we hover over any of the circles in the SVG, update the 
        tooltip position and text contents.

        Here, `points` is in reference to the circles we created above.
    */

    circles.on("mouseover", function(e, d) {

        // Update style and position of the tooltip div;
        // what are the `+` symbols doing?

        // You may increase/decrease the relative position 
        // of the tooltip by adding small +- values (e.g., +20, -10). 
        // Note, the tooltip's origin is its top-left point.

        let x = +d3.select(this).attr("cx") + 10;
        let y = +d3.select(this).attr("cy") + 20;

        // Format the display of the numbers,
        // using d3.format()
        // See: https://github.com/d3/d3-format/blob/v3.1.0/README.md#format

        let displayValue = d3.format(",")(d.pop);
        
        // Make the tooltip visible when mouse "enters" a point
        tooltip.style("visibility", "visible")
            .style("top", `${y}px`)
            .style("left", `${x}px`)
            // This is just standard HTML syntax
            .html(`<p><b>General Satisfaction: ${d.generalSatisfaction}</b><br><em>Police Trust: ${d.policeTrust}</em><br>Age: ${d.Age}</p>`);

        // Optionally, visually highlight the selected circle
        points.attr("opacity", 0.1);
        d3.select(this)
            .attr("opacity", 1)
            .style("stroke", "black")
            .style("stroke-width", "1px")
            // this makes the selected circle "pop out" and stand over the rest of the circles
            .raise();

    }).on("mouseout", function() {

        // Make the tooltip invisible when mouse "leaves" a point
        tooltip.style("visibility", "hidden");

        // Reset the circles' appearance back to original
        points.attr("opacity", 1)
        .style("stroke-width", "0");

    });
}
