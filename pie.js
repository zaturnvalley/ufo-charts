(function(){
  //drawing area for graph div
  var svg = d3.select('#graph')
          .append('svg')
          .style({
            width: '100%',
            height: 500
          });
  var manually = function (data, x, y) {
    var colors = d3.scale.category20c();
    total = d3.sum(data.map(function (d) { return d.value; })),
    offset = function (d, i) {
      return d3.sum(data.slice(0, i).map(function(d){
        return 2*Math.PI*(d.value/total);
      }));
    },
    arc = d3.svg.arc()
          .outerRadius(150)
          .startAngle(offset)
          .endAngle(function (d, i) {
            return offset(d, i)+2*Math.PI*(d.value/total);
          }),
  }
  d3.json('ufo-types.json', function(data){
    manually(data, 300, 250);
  });
})();