d3.csv("homework/Final-Project/data/Somerville_Happiness_Survey_Responses.csv")
  .then(function(data) {
    const xAccessor = d => Number(d["In.general..how.similar.are.you.to.other.people.you.know"]);
    const yAccessor = d => Number(d["How.satisfied.are.you.with.your.life.in.general"]);

    const regression = d3.regressionLinear()
      .x(xAccessor)
      .y(yAccessor)
      .domain([0, 10]);

    const dataset = data.map(d => ({
      x: xAccessor(d),
      y: yAccessor(d)
    }));

    const results = regression(dataset);
    console.log(results);
    console.log(`R-squared: ${results.rSquared}`);
  })
  .catch(function(error) {
    console.log(error);
  });
