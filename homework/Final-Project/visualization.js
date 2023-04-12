new roughViz.BarH({
  element: '#viz1',
  data: 'barChartData.csv',
  labels: 'Year',
  values: 'How.happy.do.you.feel.right.now',
  axisStrokeWidth: 2,
  width: 700,
  height: 600,
  color:'#FFB100',
  fillStyle: 'cross-hatch',
  fillWeight: .5,
  highlight: '#E53A32',
  font: 'Adobe-handwriting-frank',
  title: 'Average Happiness by Year (10 point scale)',
  roughness: 2,
  tooltipFontSize: '1.5rem',
})

new roughViz.Pie({
  element: '#viz2',
  data: 'pieChartData.csv',
  labels: 'Question',
  values: 'Maximum.Effect.on.Satisfaction.with.Somerville',
  legend: false,
  width: 600,
  height: 600,
  fillStyle: 'zigzag',
  fillWeight: 2,
  font: 'Adobe-handwriting-frank'
})

function adjustFontSize() {
  d3.selectAll('#viz1 text').style('font-size', '1.5rem').style('font-weight', 'bold');
  d3.selectAll('#viz3 text').style('font-size', '1.5rem').style('font-weight', 'bold');
  console.log('adjusted font size');
}

setTimeout(adjustFontSize, 100);

new roughViz.Line({
  element: '#viz3',
  data: 'lineChartData.csv',
  y1: 'lifeSatisfaction',
  y2: 'somervilleSatisfaction',
  y3: 'neighborhoodSatisfaction',
  width: 900,
  height: 600,
  legend: false,
  tooltipFontSize: '2rem',
  colors: ['#8da0cb', '#e78ac3', '#a6d854'],
  axisStrokeWidth: 2,
  axisRoughness: 2,
  axisFontSize: '1.5rem',
  circleRadius: 15,
  circleRoughness: 5,
  xLabel: '"How happy do you feel right now?" (10-point scale)',
  labelFontSize: '2rem',
  font: 'Adobe-handwriting-frank',
  margin: {top: 50, right: 50, bottom: 100, left: 70},
  strokeWidth: 7,
});

function toggleLifeSatisfaction() {
  const svg = document.querySelector("#viz3 svg");
  const paths = svg.querySelectorAll("g path");
  const tooltip = d3.select(".lifeSatisfactionclasstext");

  if (tooltip.style("display") === "none") {
    tooltip.style("display", "block")
      .style("opacity", 0)
      .transition()
      .duration(500)
      .style("opacity", 1);
    paths.forEach(function(path) {
      const strokeColor = window.getComputedStyle(path).getPropertyValue("stroke");
      const fillColor = window.getComputedStyle(path).getPropertyValue("fill");

      if (strokeColor === "rgb(141, 160, 203)" || fillColor === "rgb(141, 160, 203)") {
        path.style.display = "block";
        path.style.opacity = 0;
        path.style.transition = "opacity 0.5s ease-in-out";
        setTimeout(function() {
          path.style.opacity = 1;
        }, 50);
      }
    });
  } else {
    tooltip.transition()
      .duration(500)
      .style("opacity", 0)
      .on("end", function() {
        tooltip.style("display", "none");
      });
    paths.forEach(function(path) {
      const strokeColor = window.getComputedStyle(path).getPropertyValue("stroke");
      const fillColor = window.getComputedStyle(path).getPropertyValue("fill");

      if (strokeColor === "rgb(141, 160, 203)" || fillColor === "rgb(141, 160, 203)") {
        path.style.opacity = 1;
        path.style.transition = "opacity 0.5s ease-in-out";
        setTimeout(function() {
          path.style.opacity = 0;
        }, 50);
        setTimeout(function() {
          path.style.display = "none";
        }, 500);
      }
    });
  }
}

function toggleNeighborhoodSatisfaction() {
  const svg = document.querySelector("#viz3 svg");
  const paths = svg.querySelectorAll("g path");
  const tooltip = d3.select(".neighborhoodSatisfactionclasstext");

  if (tooltip.style("display") === "none") {
    tooltip.style("display", "block")
      .style("opacity", 0)
      .transition()
      .duration(500)
      .style("opacity", 1);
    paths.forEach(function(path) {
      const strokeColor = window.getComputedStyle(path).getPropertyValue("stroke");
      const fillColor = window.getComputedStyle(path).getPropertyValue("fill");

      if (strokeColor === "rgb(166, 216, 84)" || fillColor === "rgb(166, 216, 84)") {
        path.style.display = "block";
        path.style.opacity = 0;
        path.style.transition = "opacity 0.5s ease-in-out";
        setTimeout(function() {
          path.style.opacity = 1;
        }, 50);
      }
    });
  } else {
    tooltip.transition()
      .duration(500)
      .style("opacity", 0)
      .on("end", function() {
        tooltip.style("display", "none");
      });
    paths.forEach(function(path) {
      const strokeColor = window.getComputedStyle(path).getPropertyValue("stroke");
      const fillColor = window.getComputedStyle(path).getPropertyValue("fill");

      if (strokeColor === "rgb(166, 216, 84)" || fillColor === "rgb(166, 216, 84)") {
        path.style.opacity = 1;
        path.style.transition = "opacity 0.5s ease-in-out";
        setTimeout(function() {
          path.style.opacity = 0;
        }, 50);
        setTimeout(function() {
          path.style.display = "none";
        }, 500);
      }
    });
  }
}

function toggleSomervilleSatisfaction() {
  const svg = document.querySelector("#viz3 svg");
  const paths = svg.querySelectorAll("g path");
  const tooltip = d3.select(".somervilleSatisfactionclasstext");

  if (tooltip.style("display") === "none") {
    tooltip.style("display", "block")
      .style("opacity", 0)
      .transition()
      .duration(500)
      .style("opacity", 1);
    paths.forEach(function(path) {
      const strokeColor = window.getComputedStyle(path).getPropertyValue("stroke");
      const fillColor = window.getComputedStyle(path).getPropertyValue("fill");

      if (strokeColor === "rgb(231, 138, 195)" || fillColor === "rgb(231, 138, 195)") {
        path.style.display = "block";
        path.style.opacity = 0;
        path.style.transition = "opacity 0.5s ease-in-out";
        setTimeout(function() {
          path.style.opacity = 1;
        }, 50);
      }
    });
  } else {
    tooltip.transition()
      .duration(500)
      .style("opacity", 0)
      .on("end", function() {
        tooltip.style("display", "none");
      });
    paths.forEach(function(path) {
      const strokeColor = window.getComputedStyle(path).getPropertyValue("stroke");
      const fillColor = window.getComputedStyle(path).getPropertyValue("fill");

      if (strokeColor === "rgb(231, 138, 195)" || fillColor === "rgb(231, 138, 195)") {
        path.style.opacity = 1;
        path.style.transition = "opacity 0.5s ease-in-out";
        setTimeout(function() {
          path.style.opacity = 0;
        }, 50);
        setTimeout(function() {
          path.style.display = "none";
        }, 500);
      }
    });
  }
}


const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');

option1.addEventListener('click', function() {
  toggleLifeSatisfaction();
});

option2.addEventListener('click', function() {
  toggleNeighborhoodSatisfaction();
});

option3.addEventListener('click', function() {
  toggleSomervilleSatisfaction();
});

function hideLifeSatisfaction() {
  const svg = document.querySelector("#viz3 svg");
  const paths = svg.querySelectorAll("g path");
  const tooltip = d3.select(".lifeSatisfactionclasstext");
  tooltip.style("display", "none");

  paths.forEach(function(path) {
    const strokeColor = window.getComputedStyle(path).getPropertyValue("stroke");
    const fillColor = window.getComputedStyle(path).getPropertyValue("fill");

    if (strokeColor === "rgb(141, 160, 203)" || fillColor === "rgb(141, 160, 203)") {
      path.style.display = "none";
    }
  });
  
  console.log("function ran successfully");
}

function hideNeighborhoodSatisfaction() {
  const svg = document.querySelector("#viz3 svg");
  const paths = svg.querySelectorAll("g path");
  const tooltip = d3.select(".neighborhoodSatisfactionclasstext");
  tooltip.style("display", "none");

  paths.forEach(function(path) {
    const strokeColor = window.getComputedStyle(path).getPropertyValue("stroke");
    const fillColor = window.getComputedStyle(path).getPropertyValue("fill");

    if (strokeColor === "rgb(166, 216, 84)" || fillColor === "rgb(166, 216, 84)") {
      path.style.display = "none";
    }
  });
  
  console.log("function ran successfully");
}

function hideSomervilleSatisfaction() {
  const svg = document.querySelector("#viz3 svg");
  const paths = svg.querySelectorAll("g path");
  const tooltip = d3.select(".somervilleSatisfactionclasstext");
  tooltip.style("display", "none");

  paths.forEach(function(path) {
    const strokeColor = window.getComputedStyle(path).getPropertyValue("stroke");
    const fillColor = window.getComputedStyle(path).getPropertyValue("fill");

    if (strokeColor === "rgb(231, 138, 195)" || fillColor === "rgb(231, 138, 195)") {
      path.style.display = "none";
    }
  });

  console.log("function ran successfully");
}


// setTimeout(hideLifeSatisfaction, 100);
setTimeout(hideNeighborhoodSatisfaction, 100);
setTimeout(hideSomervilleSatisfaction, 100);