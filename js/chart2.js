var button = document.getElementById('button');
var container = document.getElementById('container');

button.onclick = function () {

  var svg = d3.select('div#container svg');
  var data = [100, 75, 150, 50, 90]

    // var rect1 = svg.append('rect');
    // var rect2 = svg.append('rect');
    // var rect3 = svg.append('rect');

    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr("width", 0)
      .attr("height", 0)
      .transition()
      .duration(3000)
      .attr("height", 30)
      .attr("width", function (datum) { return datum;} )
      .attr("y", function(value, i) {return i * 40})
      .transition()
      .duration(3000)
      .style("fill", "green")
      .transition()
      .duration(3000)
      .attr("width", function (value) { return value * 2;} )
      ;
    // rect1.attr({
    //   "width": data[0],
    //   "height": 30,
    //   "y": 0
    // });

    // rect2.attr({
    //   "width": data[1],
    //   "height": 30,
    //   "y": 50
    // });

    // rect3.attr({
    //   "width": data[2],
    //   "height": 30,
    //   "y": 100
    // });

    // svg.append('rect')
    // .attr({
    //   "width": 100,
    //   "height": 100
    // })
    // .transition().duration(2000)
    // .style("fill", "green")
    // .transition().duration(2000)
    // .style("fill", "blue");
};

