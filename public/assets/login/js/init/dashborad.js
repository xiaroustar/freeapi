"use strict";
$(document).ready(function(){
    
    /* -----  Chartistjs - Widget Bar Chart  ----- */
	function xpChartistjsWidgetBar() {
		new Chartist.Bar('#xp-chartist-widget-bar', {
		  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],

		  series: [
			[5, 4, 3, 7, 5, 10, 3]
		  ]
		}, {
		  axisX: {
			position: 'end',
			showGrid: false
		  },
		  axisY: {
			position: 'start',
			showLabel: false,
			showGrid: false
		  },
		  plugins: [
			Chartist.plugins.tooltip()
		  ]
		}).on('draw', function(data) {
		  if(data.type === 'bar') {
			data.element.attr({
			  style: 'stroke-width: 7px;'
			});
		  }
		});
	}
	xpChartistjsWidgetBar();

    /* -----  Chartistjs - Donut Chart Using Fill Rather Than Stroke  ----- */
	function xpChartistjsDonut() {
		new Chartist.Pie('#xp-chartist-donut-fill-rather-chart', {
		  series: [45, 35, 20]
		}, {
		  donut: true,
		  donutWidth: 30,
		  startAngle: 320,
		  showLabel: false,
		  plugins: [
			  Chartist.plugins.tooltip()
		  ]
		});
	}
	xpChartistjsDonut();

    /* -----  Chartistjs - Stacked Bar Chart  ----- */
	function xpChartistjsStackedBar() {
		new Chartist.Bar('#xp-chartist-stacked-bar', {
		  labels: ['Q1', 'Q2', 'Q3', 'Q4','Q5','Q6','Q7','Q8','Q9','Q10','Q11','Q12'],
		  series: [
			[800000, 1200000, 1400000, 1300000, 800000, 1200000, 1400000, 1300000, 800000, 1200000, 1400000, 1300000],
			[200000, 400000, 500000, 300000, 200000, 400000, 500000, 300000, 200000, 400000, 500000, 300000],
		  ]
		}, {
		  stackBars: true,      
		  axisY: {
			labelInterpolationFnc: function(value) {
			  return (value / 1000) + 'k';
			}
		  },
		  plugins: [
			Chartist.plugins.tooltip()
		  ]
		}).on('draw', function(data) {
		  if(data.type === 'bar') {
			data.element.attr({
			  style: 'stroke-width: 10px'
			});
		  }
		});
	}
	xpChartistjsStackedBar();
	
    /* -----  Chartistjs - Series Overrides Chart  ----- */
	function xpChartistjsSeriesOverrides() {
      var chart = new Chartist.Line('#xp-chartist-series-overrides', {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon'],
        series: [{
          name: 'series',
          data: [4000, 3000, 5000, 3000, 1000, 3000, 6000, 4000]
        }]
      }, {
        fullWidth: true,
        series: {
          'series': {
            lineSmooth: Chartist.Interpolation.simple(),
            showArea: true
          }
        },
        low: 0,
        plugins: [
          Chartist.plugins.tooltip()
        ]
      }, [
        ['screen and (max-width: 320px)', {
          series: {
            'series': {
              lineSmooth: Chartist.Interpolation.none(),
              showArea: false
            }
          }
        }]
      ]);
	}
	xpChartistjsSeriesOverrides();
	
	$(".xp-menu-hamburger").on("click", function(e) {
		setTimeout(function() {
			xpChartistjsWidgetBar();
			xpChartistjsDonut();
			xpChartistjsStackedBar();
			xpChartistjsSeriesOverrides();
        }, 500);		
    });  

});