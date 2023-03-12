const width = window.innerWidth, height = window.innerHeight;


const svg = d3.select("#viz")
            .attr("width", width)
            .attr("height", height);

const map = svg.select("#map");


d3.select("#placeholder")
  .attr("width", width)
  .attr("height", height);