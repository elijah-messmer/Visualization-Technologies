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
  fillWeight: 5,
  strokeWidth: 2,
  colors: ['#F87060', '#A2DE96', '#5CACEE', '#FFC966', '#8E7CC3'],
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
  y1: 'lifeSat',
  y2: 'hoodSat',
  y3: 'somerSat',
  y4: 'toGo',
  y5: 'cityInfo',
  y6: 'cityServices',
  y7:	'localBeauty',
  y8:	'safeWalking',
  y9:	'socialEvents',
  y10: 'housingCost',
  width: 900,
  height: 600,
  legend: false,
  tooltipFontSize: '2rem',
  colors: ['#8da0cb', '#a6d854', '#e78ac3', '#f1a340', '#bebada', '#b3de69', '#fb8072', '#80b1d3', '#fdb462', '#b3b3b3'],
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

// Functions to toggle line chart paths

function toggleLifeSatisfaction() {
  const svg = document.querySelector("#viz3 svg");
  const paths = svg.querySelectorAll("g path");
  const tooltip = d3.select(".lifeSatclasstext");

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
  const tooltip = d3.select(".hoodSatclasstext");

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
  const tooltip = d3.select(".somerSatclasstext");

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

function toggleTransportation() {
  const svg = document.querySelector("#viz3 svg");
  const paths = svg.querySelectorAll("g path");
  const tooltip = d3.select(".toGoclasstext");

  if (tooltip.style("display") === "none") {
    tooltip.style("display", "block")
      .style("opacity", 0)
      .transition()
      .duration(500)
      .style("opacity", 1);
    paths.forEach(function(path) {
      const strokeColor = window.getComputedStyle(path).getPropertyValue("stroke");
      const fillColor = window.getComputedStyle(path).getPropertyValue("fill");

      if (strokeColor === "rgb(241, 163, 64)" || fillColor === "rgb(241, 163, 64)") {
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

      if (strokeColor === "rgb(241, 163, 64)" || fillColor === "rgb(241, 163, 64)") {
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

function toggleCityInfo() {
  const svg = document.querySelector("#viz3 svg");
  const paths = svg.querySelectorAll("g path");
  const tooltip = d3.select(".cityInfoclasstext");

  if (tooltip.style("display") === "none") {
    tooltip.style("display", "block")
      .style("opacity", 0)
      .transition()
      .duration(500)
      .style("opacity", 1);
    paths.forEach(function(path) {
      const strokeColor = window.getComputedStyle(path).getPropertyValue("stroke");
      const fillColor = window.getComputedStyle(path).getPropertyValue("fill");

      if (strokeColor === "rgb(190, 186, 218)" || fillColor === "rgb(190, 186, 218)") {
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

      if (strokeColor === "rgb(190, 186, 218)" || fillColor === "rgb(190, 186, 218)") {
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

function toggleCityServices() {
  const svg = document.querySelector("#viz3 svg");
  const paths = svg.querySelectorAll("g path");
  const tooltip = d3.select(".cityServicesclasstext");

  if (tooltip.style("display") === "none") {
    tooltip.style("display", "block")
      .style("opacity", 0)
      .transition()
      .duration(500)
      .style("opacity", 1);
    paths.forEach(function(path) {
      const strokeColor = window.getComputedStyle(path).getPropertyValue("stroke");
      const fillColor = window.getComputedStyle(path).getPropertyValue("fill");

      if (strokeColor === "rgb(179, 222, 105)" || fillColor === "rgb(179, 222, 105)") {
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

      if (strokeColor === "rgb(179, 222, 105)" || fillColor === "rgb(179, 222, 105)") {
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

function toggleLocalBeauty() {
  const svg = document.querySelector("#viz3 svg");
  const paths = svg.querySelectorAll("g path");
  const tooltip = d3.select(".localBeautyclasstext");

  if (tooltip.style("display") === "none") {
    tooltip.style("display", "block")
      .style("opacity", 0)
      .transition()
      .duration(500)
      .style("opacity", 1);
    paths.forEach(function(path) {
      const strokeColor = window.getComputedStyle(path).getPropertyValue("stroke");
      const fillColor = window.getComputedStyle(path).getPropertyValue("fill");

      if (strokeColor === "rgb(251, 128, 114)" || fillColor === "rgb(251, 128, 114)") {
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

      if (strokeColor === "rgb(251, 128, 114)" || fillColor === "rgb(251, 128, 114)") {
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

function toggleSafeWalking() {
  const svg = document.querySelector("#viz3 svg");
  const paths = svg.querySelectorAll("g path");
  const tooltip = d3.select(".safeWalkingclasstext");

  if (tooltip.style("display") === "none") {
    tooltip.style("display", "block")
      .style("opacity", 0)
      .transition()
      .duration(500)
      .style("opacity", 1);
    paths.forEach(function(path) {
      const strokeColor = window.getComputedStyle(path).getPropertyValue("stroke");
      const fillColor = window.getComputedStyle(path).getPropertyValue("fill");

      if (strokeColor === "rgb(128, 177, 211)" || fillColor === "rgb(128, 177, 211)") {
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

      if (strokeColor === "rgb(128, 177, 211)" || fillColor === "rgb(128, 177, 211)") {
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

function toggleSocialEvents() {
  const svg = document.querySelector("#viz3 svg");
  const paths = svg.querySelectorAll("g path");
  const tooltip = d3.select(".socialEventsclasstext");

  if (tooltip.style("display") === "none") {
    tooltip.style("display", "block")
      .style("opacity", 0)
      .transition()
      .duration(500)
      .style("opacity", 1);
    paths.forEach(function(path) {
      const strokeColor = window.getComputedStyle(path).getPropertyValue("stroke");
      const fillColor = window.getComputedStyle(path).getPropertyValue("fill");

      if (strokeColor === "rgb(253, 180, 98)" || fillColor === "rgb(253, 180, 98)") {
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

      if (strokeColor === "rgb(253, 180, 98)" || fillColor === "rgb(253, 180, 98)") {
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

function toggleHousingCost() {
  const svg = document.querySelector("#viz3 svg");
  const paths = svg.querySelectorAll("g path");
  const tooltip = d3.select(".housingCostclasstext");

  if (tooltip.style("display") === "none") {
    tooltip.style("display", "block")
      .style("opacity", 0)
      .transition()
      .duration(500)
      .style("opacity", 1);
    paths.forEach(function(path) {
      const strokeColor = window.getComputedStyle(path).getPropertyValue("stroke");
      const fillColor = window.getComputedStyle(path).getPropertyValue("fill");

      if (strokeColor === "rgb(179, 179, 179)" || fillColor === "rgb(179, 179, 179)") {
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

      if (strokeColor === "rgb(179, 179, 179)" || fillColor === "rgb(179, 179, 179)") {
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

// Setting up the event listeners
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const option4 = document.getElementById('option4');
const option5 = document.getElementById('option5');
const option6 = document.getElementById('option6');
const option7 = document.getElementById('option7');
const option8 = document.getElementById('option8');
const option9 = document.getElementById('option9');
const option10 = document.getElementById('option10');

option1.addEventListener('click', function() {
  toggleLifeSatisfaction();
});

option2.addEventListener('click', function() {
  toggleNeighborhoodSatisfaction();
});

option3.addEventListener('click', function() {
  toggleSomervilleSatisfaction();
});

option4.addEventListener('click', function() {
  toggleTransportation();
});

option5.addEventListener('click', function() {
  toggleCityInfo();
});

option6.addEventListener('click', function() {
  toggleCityServices();
});

option7.addEventListener('click', function() {
  toggleLocalBeauty();
});

option8.addEventListener('click', function() {
  toggleSafeWalking();
});

option9.addEventListener('click', function() {
  toggleSocialEvents();
});

option10.addEventListener('click', function() {
  toggleHousingCost();
});