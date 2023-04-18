var main = document.querySelector("main");
var scrolly = main.querySelector("#scrolly");
var sticky = scrolly.querySelector(".sticky-thing");
var article = scrolly.querySelector("article");
var steps = article.querySelectorAll(".step");

// initialize the scrollama
var scroller = scrollama();


function handleStepEnter(response) {
  // response = { element, direction, index }
  var el = response.element;
  var transitPie = document.querySelector('path[d="M1.6532731788489267e-14,-270A270,270,0,0,1,264.0117898780952,56.548870946858905L0,0Z"]');
  var cityInfo = document.querySelector('path[d="M264.0117898780952,56.548870946858905A270,270,0,0,1,37.855315516109265,267.33307892435573L0,0Z"]');
  var cityService = document.querySelector('path[d="M37.855315516109265,267.33307892435573A270,270,0,0,1,-224.9354308016046,149.34541161380398L0,0Z"]');
  var openSpace = document.querySelector('path[d="M-224.9354308016046,149.34541161380398A270,270,0,0,1,-231.68835968628912,-138.63803224900707L0,0Z"]');
  var safetyPie = document.querySelector('path[d="M-231.68835968628912,-138.63803224900707A270,270,0,0,1,-2.894063686845016e-13,-270L0,0Z"]');


  // remove is-active from all steps
  // then add is-active to this step
  steps.forEach(step => step.classList.remove('is-active'));
  el.classList.add('is-active');

  // update fill color on active step
  if (el.dataset.step === "2" || el.dataset.step === "3") {
    transitPie.setAttribute('fill', '#fe5744a9');
  } else {
    transitPie.setAttribute('fill', 'transparent');
  } if (el.dataset.step === "4") {
    cityInfo.setAttribute('fill', '#7bde6781');
    cityService.setAttribute('fill', '#49a3eca4');
  } else {
    cityInfo.setAttribute('fill', 'transparent');
    cityService.setAttribute('fill', 'transparent');
  } if (el.dataset.step === "5" || el.dataset.step === "6") {
    openSpace.setAttribute('fill', '#ffbe4593');
  } else {
    openSpace.setAttribute('fill', 'transparent');
  } if (el.dataset.step === "7" || el.dataset.step === "8") {
    safetyPie.setAttribute('fill', '#7d67c194');
  } else {
    safetyPie.setAttribute('fill', 'transparent');
  }
}


function init() {
  scroller
    .setup({
      step: "#scrolly article .step",
      offset: 0.66,
      debug: false
    })
    .onStepEnter(handleStepEnter);

  // setup resize event
  window.addEventListener("resize", scroller.resize);
}

// kick things off
init();