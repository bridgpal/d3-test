var button = document.getElementById('button');
var container = document.getElementById('container');

button.onclick = function () {

  var svg = d3.select('div#container svg');
  var data = [
        {x: 50, y: 10},
        {x: 40, y: 20},
        {x: 30, y: 30},
        {x: 20, y: 20},
        {x: 10, y: 20},
        {x: 0, y: 30}
  ];

  var sinPoints = d3.range(50).map( function(i) {
    return { x: i, y:Math.sin(i/3) }
  });

  var cosPoints = d3.range(50).map( function(i) {
    return { x: i, y:Math.cos(i/3) }
  });

  var scaleX = d3.scale.linear()
                .domain([0, 20]).([0,300]);

  var scaleY = d3.scale.linear()
                .domain([-1, 1]).([200,0]);

  var lineFunction = d3.svg.line()
    .x(function(d) { return scaleX(d.x)})
    .y(function(d) { return scaleY(d.y) })
    .interpolate('cardinal');

  svg.selectAll('path')
    .data([sinPoints, cosPoints])
    .enter()
    .append('path')
    .style("fill", "none")
    .style("stroke", "red")
    .style("stroke-width", 2)
    .attr("d", lineFunction(data));


};

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


