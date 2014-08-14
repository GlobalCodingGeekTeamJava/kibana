define(function () {
  return function TooltipUtilService(d3) {
    return function (self) {
      return function (selection) {
        selection.each(function () {
          var tooltipDiv = d3.select('.' + self.tooltipClass);
          var element = d3.select(this);

          element
            .on('mousemove', function (d) {
              var mouseMove = {
                left: d3.event.x,
                top: d3.event.y
              };

              var chartWidth = self.chartWidth;
              var offsetX = d3.event.offsetX;
              var tipWidth = tooltipDiv[0][0].clientWidth;
              var xOffset = 10;
              if ((chartWidth - offsetX) < tipWidth) {
                xOffset = -10 - tipWidth;
              }

              var chartHeight = self.chartHeight;
              var offsetY = d3.event.offsetY;
              var tipHeight = tooltipDiv[0][0].clientHeight;
              var yOffset = 5;
              if ((chartHeight - offsetY + 10) < (tipHeight)) {
                yOffset = tipHeight - (chartHeight - offsetY + 5);
              }
              
              return tooltipDiv.datum(d)
                .text(self.tooltipFormatter)
                .style('visibility', 'visible')
                .style('left', mouseMove.left + xOffset + 'px')
                .style('top', mouseMove.top - yOffset + 'px');
            })
            .on('mouseout', function () {
              return tooltipDiv.style('visibility', 'hidden');
            });
        });
      };
    };
  };
});
