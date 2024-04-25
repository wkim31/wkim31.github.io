// set the dimensions and margins of the graph
let margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 600 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
let svg = d3.select("#myChart")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform","translate(" + margin.left + "," + margin.top + ")");

//Read the data
d3.csv("https://raw.githubusercontent.com/data1500/data1500.github.io/main/providenceTemp.csv", function(data) {

    // Add X axis
    let x = d3.scaleLinear()
        .domain([1945, 2023])
        .range([ 0, width ]);

    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

    // Add Y axis
    let y = d3.scaleLinear()
        .domain([56, 64])
        .range([ height, 0]);

    svg.append("g")
        .call(d3.axisLeft(y));

    let colors = d3.scaleLinear()
        .domain([54, 66])
        .range(["#1f78b4", "#e31a1c"]);

    // Add dots
    let dots = svg.append("g")
        .selectAll("dot")
        .data(data)
        .enter()
        .append("circle")
            .attr("cx", function (d) { return x(d.year); } )
            .attr("cy", function (d) { return y(d.avgHigh); } )
            .attr("r", 6)
            .style("fill", "#666666");
})