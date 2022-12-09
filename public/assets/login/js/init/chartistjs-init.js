"use strict";
$(document).ready(function(){

    /*  ----- Chartistjs - Simple Line Chart  ----- */
	function xpChartistSimpleLine() {
		new Chartist.Line('#xp-chartist-simple-line', {
		  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
		  series: [
			[12, 9, 7, 8, 5],
			[2, 1, 3.5, 7, 3],
			[1, 3, 4, 5, 6]
		  ]
		}, {
		  fullWidth: true,
		  chartPadding: {
			right: 0
		  },
		  plugins: [
			Chartist.plugins.tooltip()
		  ]
		});
	}
	xpChartistSimpleLine();
	
    /*  ----- Chartistjs - Holes in Data Chart  ----- */
	function xpChartistHoleInData() {
		var chart = new Chartist.Line('#xp-chartist-holes-in-data', {
		  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
		  series: [
			[5, 5, 10, 8, 7, 5, 4, null, null, null, 10, 10, 7, 8, 6, 9],
			[10, 15, null, 12, null, 10, 12, 15, null, null, 12, null, 14, null, null, null],
			[null, null, null, null, 3, 4, 1, 3, 4,  6,  7,  9, 5, null, null, null],
			[{x:3, y: 3},{x: 4, y: 3}, {x: 5, y: undefined}, {x: 6, y: 4}, {x: 7, y: null}, {x: 8, y: 4}, {x: 9, y: 4}]
		  ]
		}, {
		  fullWidth: true,
		  chartPadding: {
			right: 10
		  },
		  low: 0,
		  plugins: [
			Chartist.plugins.tooltip()
		  ]
		});	
	}
	xpChartistHoleInData();
	
    /*  ----- Chartistjs - Filled Holes in Data Chart  ----- */
	function xpChartistFilledHoleInData() {
		var chart = new Chartist.Line('#xp-chartist-filled-holes-in-data', {
		  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
		  series: [
			[5, 5, 10, 8, 7, 5, 4, null, null, null, 10, 10, 7, 8, 6, 9],
			[10, 15, null, 12, null, 10, 12, 15, null, null, 12, null, 14, null, null, null],
			[null, null, null, null, 3, 4, 1, 3, 4,  6,  7,  9, 5, null, null, null],
			[{x:3, y: 3},{x: 4, y: 3}, {x: 5, y: undefined}, {x: 6, y: 4}, {x: 7, y: null}, {x: 8, y: 4}, {x: 9, y: 4}]
		  ]
		}, {
		  fullWidth: true,
		  chartPadding: {
			right: 10
		  },
		  lineSmooth: Chartist.Interpolation.cardinal({
			fillHoles: true,
		  }),
		  low: 0,
		  plugins: [
			Chartist.plugins.tooltip()
		  ]
		});
	}
	xpChartistFilledHoleInData();
	
    /*  ----- Chartistjs - Only Holes in Data Chart  ----- */
	function xpChartistOnlyHoleInData() {
		new Chartist.Line('#xp-chartist-only-holes-in-data', {
		  labels: [1, 2, 3, 4, 5, 6, 7, 8],
		  series: [
			[1, 2, 3, 1, -2, 0, 1, 0],
			[-2, -1, -2, -1, -3, -1, -2, -1],
			[0, 0, 0, 1, 2, 3, 2, 1],
			[3, 2, 1, 0.5, 1, 0, -1, -3]
		  ]
		}, {
		  high: 3,
		  low: -3,
		  fullWidth: true,
		  axisY: {
			onlyInteger: true,
			offset: 20
		  },
		  plugins: [
			Chartist.plugins.tooltip()
		  ]
		});
	}
	xpChartistOnlyHoleInData();
	
    /*  ----- Chartistjs - Line Scatter Diagram with Responsive Settings Chart  ----- */
	function xpChartistScatterDiagram() {
		var times = function(n) {
		  return Array.apply(null, new Array(n));
		};
		var data = times(52).map(Math.random).reduce(function(data, rnd, index) {
		  data.labels.push(index + 1);
		  data.series.forEach(function(series) {
			series.push(Math.random() * 100)
		  });
		  return data;
		}, {
		  labels: [],
		  series: times(4).map(function() { return new Array() })
		});
		var options = {
		  showLine: false,
		  axisX: {
			labelInterpolationFnc: function(value, index) {
			  return index % 13 === 0 ? 'W' + value : null;
			}
		  }
		};
		var responsiveOptions = [
		  ['screen and (min-width: 640px)', {
			axisX: {
			  labelInterpolationFnc: function(value, index) {
				return index % 4 === 0 ? 'W' + value : null;
			  }
			}
		  }]
		];
		new Chartist.Line('#xp-chartist-line-scatter-diagram', data, options, responsiveOptions);
	}
	xpChartistScatterDiagram();
	
    /* -----  Chartistjs - Line Area Chart  ----- */
	function xpChartistLineArea() {
		new Chartist.Line('#xp-chartist-line-area', {
		  labels: [1, 2, 3, 4, 5, 6, 7, 8],
		  series: [
			[5, 9, 7, 8, 5, 3, 5, 4]
		  ]
		}, {
		  low: 0,
		  showArea: true,
		  fullWidth: true,
		  plugins: [
			Chartist.plugins.tooltip()
		  ]
		});
	}
	xpChartistLineArea();
	
    /* -----  Chartistjs - Bi-Polar Line Chart With Area Only  ----- */
	function xpChartistBiPolar() {
		new Chartist.Line('#xp-chartist-bi-polar-line', {
		  labels: [1, 2, 3, 4, 5, 6, 7, 8],
		  series: [
			[1, 2, 3, 1, -2, 0, 1, 0],
			[-2, -1, -2, -1, -2.5, -1, -2, -1],
			[0, 0, 0, 1, 2, 2.5, 2, 1],
			[2.5, 2, 1, 0.5, 1, 0.5, -1, -2.5]
		  ]
		}, {
		  high: 3,
		  low: -3,
		  showArea: true,
		  showLine: false,
		  showPoint: false,
		  fullWidth: true,
		  axisX: {
			showLabel: false,
			showGrid: false
		  },
		  plugins: [
			Chartist.plugins.tooltip()
		  ]
		});      
	}
	xpChartistBiPolar();
	
    /* -----  Chartistjs - Advanced Smil Animations Chart  ----- */
	function xpChartistAdvancedSmilAnimations() {
		var chart = new Chartist.Line('#xp-chartist-advanced-smil-animations', {
			labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
			series: [
			  [12, 9, 7, 8, 5, 4, 6, 2, 3, 3, 4, 6],
			  [4,  5, 3, 7, 3, 5, 5, 3, 4, 4, 5, 5],
			  [5,  3, 4, 5, 6, 3, 3, 4, 5, 6, 3, 4],
			  [3,  4, 5, 6, 7, 6, 4, 5, 6, 7, 6, 3]
			]
		}, {
		low: 0,
		plugins: [
		  Chartist.plugins.tooltip()
		]
		});
		var seq = 0,
		delays = 80,
		durations = 500;
		chart.on('created', function() {
			seq = 0;
		});
		chart.on('draw', function(data) {
		seq++;
		if(data.type === 'line') {

		  data.element.animate({
			opacity: {
			  begin: seq * delays + 1000,
			  dur: durations,
			  from: 0,
			  to: 1
			}
		  });
		} else if(data.type === 'label' && data.axis === 'x') {
		  data.element.animate({
			y: {
			  begin: seq * delays,
			  dur: durations,
			  from: data.y + 100,
			  to: data.y,
			  easing: 'easeOutQuart'
			}
		  });
		} else if(data.type === 'label' && data.axis === 'y') {
		  data.element.animate({
			x: {
			  begin: seq * delays,
			  dur: durations,
			  from: data.x - 100,
			  to: data.x,
			  easing: 'easeOutQuart'
			}
		  });
		} else if(data.type === 'point') {
		  data.element.animate({
			x1: {
			  begin: seq * delays,
			  dur: durations,
			  from: data.x - 10,
			  to: data.x,
			  easing: 'easeOutQuart'
			},
			x2: {
			  begin: seq * delays,
			  dur: durations,
			  from: data.x - 10,
			  to: data.x,
			  easing: 'easeOutQuart'
			},
			opacity: {
			  begin: seq * delays,
			  dur: durations,
			  from: 0,
			  to: 1,
			  easing: 'easeOutQuart'
			}
		  });
		} else if(data.type === 'grid') {
		  var pos1Animation = {
			begin: seq * delays,
			dur: durations,
			from: data[data.axis.units.pos + '1'] - 30,
			to: data[data.axis.units.pos + '1'],
			easing: 'easeOutQuart'
		  };
		  var pos2Animation = {
			begin: seq * delays,
			dur: durations,
			from: data[data.axis.units.pos + '2'] - 100,
			to: data[data.axis.units.pos + '2'],
			easing: 'easeOutQuart'
		  };
		  var animations = {};
		  animations[data.axis.units.pos + '1'] = pos1Animation;
		  animations[data.axis.units.pos + '2'] = pos2Animation;
		  animations['opacity'] = {
			begin: seq * delays,
			dur: durations,
			from: 0,
			to: 1,
			easing: 'easeOutQuart'
		  };
		  data.element.animate(animations);
		}
		});
		chart.on('created', function() {
		if(window.__exampleAnimateTimeout) {
		  clearTimeout(window.__exampleAnimateTimeout);
		  window.__exampleAnimateTimeout = null;
		}
		window.__exampleAnimateTimeout = setTimeout(chart.update.bind(chart), 12000);
		});
	}
	xpChartistAdvancedSmilAnimations();
	
    /* -----  Chartistjs - SVG Path Animations Chart  ----- */
	function xpChartistSVGPathAnimations() {
		var chart = new Chartist.Line('#xp-chartist-svg-path-animations', {
			labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
			series: [
			  [1, 5, 2, 5, 4, 3],
			  [2, 3, 4, 8, 1, 2],
			  [5, 4, 3, 2, 1, 0.5]
			]
		}, {
		low: 0,
		showArea: true,
		showPoint: false,
		fullWidth: true,
		plugins: [
		  Chartist.plugins.tooltip()
		]
		});
		chart.on('draw', function(data) {
		if(data.type === 'line' || data.type === 'area') {
			data.element.animate({
				d: {
				  begin: 2000 * data.index,
				  dur: 2000,
				  from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
				  to: data.path.clone().stringify(),
				  easing: Chartist.Svg.Easing.easeOutQuint
				}
			});
		}
		});
	}
	xpChartistSVGPathAnimations();
	
	/* -----  Chartistjs - Line Interpolation / Smoothing Chart  ----- */
	function xpChartistLineInterpolation() {
		var chart = new Chartist.Line('#xp-chartist-line-interpolation-smoothing', {
			labels: [1, 2, 3, 4, 5],
			series: [
			  [1, 5, 10, 0, 1],
			  [10, 15, 0, 1, 2]
			]
		}, {
		lineSmooth: Chartist.Interpolation.simple({
		  divisor: 2
		}),
		fullWidth: true,
		chartPadding: {
		  right: 20
		},
		low: 0,
		plugins: [
		  Chartist.plugins.tooltip()
		]
		});
	}
	xpChartistLineInterpolation();
	
    /* -----  Chartistjs - Series Overrides Chart  ----- */
	function xpChartistSeriesOverrides() {
      var chart = new Chartist.Line('#xp-chartist-series-overrides', {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
        series: [{
          name: 'series-1',
          data: [5, 2, -4, 2, 0, -2, 5, -3]
        }, {
          name: 'series-2',
          data: [4, 3, 5, 3, 1, 3, 6, 4]
        }, {
          name: 'series-3',
          data: [2, 4, 3, 1, 4, 5, 3, 2]
        }]
      }, {
        fullWidth: true,
        series: {
          'series-1': {
            lineSmooth: Chartist.Interpolation.step()
          },
          'series-2': {
            lineSmooth: Chartist.Interpolation.simple(),
            showArea: true
          },
          'series-3': {
            showPoint: false
          }
        },
        plugins: [
          Chartist.plugins.tooltip()
        ]
      }, [
        ['screen and (max-width: 320px)', {
          series: {
            'series-1': {
              lineSmooth: Chartist.Interpolation.none()
            },
            'series-2': {
              lineSmooth: Chartist.Interpolation.none(),
              showArea: false
            },
            'series-3': {
              lineSmooth: Chartist.Interpolation.none(),
              showPoint: true
            }
          }
        }]
      ]);
	}
	xpChartistSeriesOverrides();
	
    /* -----  Chartistjs - Bi-Polar Bar Chart  ----- */
	function xpChartistBiPolarBar() {
      var data = {
        labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
        series: [
          [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
        ]
      };
      var options = {
        high: 10,
        low: -10,
        axisX: {
          labelInterpolationFnc: function(value, index) {
            return index % 2 === 0 ? value : null;
          }
        },
        plugins: [
          Chartist.plugins.tooltip()
        ]
      };
      new Chartist.Bar('#xp-chartist-bi-polar-chart', data, options);
	}
	xpChartistBiPolarBar();
	
    /* -----  Chartistjs - Overlapping Bars on Moblie Chart  ----- */
	function xpChartistOverlappingBars() {
      var data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        series: [
          [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
          [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
        ]
      };
      var options = {
        seriesBarDistance: 10
      };
      var responsiveOptions = [
        ['screen and (max-width: 640px)', {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          },
          plugins: [
            Chartist.plugins.tooltip()
          ]
        }]
      ];
      new Chartist.Bar('#xp-chartist-overlapping-bars-on-moblie', data, options, responsiveOptions);
	}
	xpChartistOverlappingBars();
	
    /* -----  Chartistjs - Add Peak Circles Using The Draw Events Chart  ----- */
	function xpChartistAddPeakCircles() {
      var chart = new Chartist.Bar('#xp-chartist-add-peak-circles', {
        labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
        series: [
          [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
        ]
      }, {
        high: 10,
        low: -10,
        axisX: {
          labelInterpolationFnc: function(value, index) {
            return index % 2 === 0 ? value : null;
          }
        },
        plugins: [
          Chartist.plugins.tooltip()
        ]
      });
      chart.on('draw', function(data) {
        if(data.type === 'bar') {
          data.group.append(new Chartist.Svg('circle', {
            cx: data.x2,
            cy: data.y2,
            r: Math.abs(Chartist.getMultiValue(data.value)) * 2 + 5
          }, 'ct-slice-pie'));
        }
      });
	}
	xpChartistAddPeakCircles();
	
    /* -----  Chartistjs - Multi-Line Lables Chart  ----- */
	function xpChartistMultiLineLables() {
      new Chartist.Bar('#xp-chartist-multi-line-lables', {
        labels: ['First quarter of the year', 'Second quarter of the year', 'Third quarter of the year', 'Fourth quarter of the year'],
        series: [
          [60000, 40000, 80000, 70000],
          [40000, 30000, 70000, 65000],
          [8000, 3000, 10000, 6000]
        ]
      }, {
        seriesBarDistance: 10,
        axisX: {
          offset: 60
        },
        axisY: {
          offset: 80,
          labelInterpolationFnc: function(value) {
            return value + ' CHF'
          },
          scaleMinSpace: 15
        },
        plugins: [
          Chartist.plugins.tooltip()
        ]
      });
	}
	xpChartistMultiLineLables();
	
    /* -----  Chartistjs - Stacked Bar Chart  ----- */
	function xpChartistStackedBar() {
      new Chartist.Bar('#xp-chartist-stacked-bar', {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        series: [
          [800000, 1200000, 1400000, 1300000],
          [200000, 400000, 500000, 300000],
          [100000, 200000, 400000, 600000]
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
            style: 'stroke-width: 30px'
          });
        }
      });
	}
	xpChartistStackedBar();
	
    /* -----  Chartistjs - Horizontal Bar Chart  ----- */
	function xpChartistHorizontalBar() {
      new Chartist.Bar('#xp-chartist-horizontal-bar', {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        series: [
          [5, 4, 3, 7, 5, 10, 3],
          [3, 2, 9, 5, 4, 6, 4]
        ]
      }, {
        seriesBarDistance: 10,
        reverseData: true,
        horizontalBars: true,
        axisY: {
          offset: 70
        },
        plugins: [
          Chartist.plugins.tooltip()
        ]
      });
	}
	xpChartistHorizontalBar();
	
    /* -----  Chartistjs - Extreme Responsive Configuration Chart  ----- */
	function xpChartistExtremeResponsive() {
      new Chartist.Bar('#xp-chartist-extreme-responsive-configuration', {
        labels: ['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4'],
        series: [
          [5, 4, 3, 7],
          [3, 2, 9, 5],
          [1, 5, 8, 4],
          [2, 3, 4, 6],
          [4, 1, 2, 1]
        ]
      }, {
        stackBars: true,
        axisX: {
          labelInterpolationFnc: function(value) {
            return value.split(/\s+/).map(function(word) {
              return word[0];
            }).join('');
          }
        },
        axisY: {
          offset: 20
        },
        plugins: [
          Chartist.plugins.tooltip()
        ]
      }, [
        ['screen and (min-width: 400px)', {
          reverseData: true,
          horizontalBars: true,
          axisX: {
            labelInterpolationFnc: Chartist.noop
          },
          axisY: {
            offset: 60
          }
        }],
        ['screen and (min-width: 800px)', {
          stackBars: false,
          seriesBarDistance: 10
        }],
        ['screen and (min-width: 1000px)', {
          reverseData: false,
          horizontalBars: false,
          seriesBarDistance: 15
        }]
      ]);
	}
	xpChartistExtremeResponsive();
	
    /* -----  Chartistjs - Distributed Series Chart  ----- */
	function xpChartistDistributedSeries() {
      new Chartist.Bar('#xp-chartist-distributed-series', {
        labels: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
        series: [20, 60, 120, 200, 180, 20, 10]
      }, {
        distributeSeries: true,
        plugins: [
          Chartist.plugins.tooltip()
        ]
      });
	}
	xpChartistDistributedSeries();
	
    /* -----  Chartistjs - Label Placement Chart  ----- */
	function xpChartistLabelPlacement() {
      new Chartist.Bar('#xp-chartist-label-placement', {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        series: [
          [5, 4, 3, 7, 5, 10, 3],
          [3, 2, 9, 5, 4, 6, 4]
        ]
      }, {
        axisX: {
          position: 'start'
        },
        axisY: {
          position: 'end'
        },
        plugins: [
          Chartist.plugins.tooltip()
        ]
      });
	}
	xpChartistLabelPlacement();
	
    /* -----  Chartistjs - Simple Pie Chart  ----- */
	function xpChartistSimplePie() {
      var data = {
        series: [5, 4, 3]
      };
      var sum = function(a, b) { return a + b };
      new Chartist.Pie('#xp-chartist-simple-pie-chart', data, {
        labelInterpolationFnc: function(value) {
          return Math.round(value / data.series.reduce(sum) * 100) + '%';
        }
      });
	}
	xpChartistSimplePie();
	
    /* -----  Chartistjs - Pie Chart with custom labels  ----- */
	function xpChartistPieChartLabel() {
      var data = {
        labels: ['Bananas', 'Apples', 'Grapes'],
        series: [5, 4, 3]
      };
      var options = {
        labelInterpolationFnc: function(value) {
          return value[0]
        }
      };
      var responsiveOptions = [
        ['screen and (min-width: 640px)', {
          chartPadding: 30,
          labelOffset: 100,
          labelDirection: 'explode',
          labelInterpolationFnc: function(value) {
            return value;
          }
        }],
        ['screen and (min-width: 1024px)', {
          labelOffset: 80,
          chartPadding: 20
        }]
      ];
      new Chartist.Pie('#xp-chartist-pie-chart-with-custom-labels', data, options, responsiveOptions);
	}
	xpChartistPieChartLabel();
	
    /* -----  Chartistjs - Gauge Chart  ----- */
	function xpChartistGauge() {
      new Chartist.Pie('#xp-chartist-gauge-chart', {
        series: [45, 35, 20]
      }, {
        donut: true,
        donutWidth: 40,
        startAngle: 270,
        total: 200,
        showLabel: false,
        plugins: [
          Chartist.plugins.tooltip()
        ]
      });
	}
	xpChartistGauge();
	
    /* -----  Chartistjs - Animating a Donut with Svg.Animate Chart  ----- */
	function xpChartistAnimatingDonut() {
      var chart = new Chartist.Pie('#xp-chartist-animating-donut-with-svg-animate', {
        series: [50, 40, 30, 25, 20, 15, 10],
        labels: [1, 2, 3, 4, 5, 6, 7]
      }, {
        donut: true,
        donutWidth: 40,
        showLabel: false,
        plugins: [
          Chartist.plugins.tooltip()
        ]
      });
      chart.on('draw', function(data) {
        if(data.type === 'slice') {
          var pathLength = data.element._node.getTotalLength();
          data.element.attr({
            'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
          });
          var animationDefinition = {
            'stroke-dashoffset': {
              id: 'anim' + data.index,
              dur: 1000,
              from: -pathLength + 'px',
              to:  '0px',
              easing: Chartist.Svg.Easing.easeOutQuint,
              fill: 'freeze'
            }
          };
          if(data.index !== 0) {
            animationDefinition['stroke-dashoffset'].begin = 'anim' + (data.index - 1) + '.end';
          }
          data.element.attr({
            'stroke-dashoffset': -pathLength + 'px'
          });
          data.element.animate(animationDefinition, false);
        }
      });
      chart.on('created', function() {
        if(window.__anim21278907124) {
          clearTimeout(window.__anim21278907124);
          window.__anim21278907124 = null;
        }
        window.__anim21278907124 = setTimeout(chart.update.bind(chart), 10000);
      });
	}
	xpChartistAnimatingDonut();
	
    /* -----  Chartistjs - Donut Chart Using Fill Rather Than Stroke  ----- */
	function xpChartistDonutFillRather() {
      new Chartist.Pie('#xp-chartist-donut-fill-rather-chart', {
        series: [45, 35, 20]
      }, {
        donut: true,
        donutWidth: 40,
        donutSolid: true,
        startAngle: 320,
        showLabel: true
      });
	}
	xpChartistDonutFillRather();
	
    /* -----  Chartistjs - Gauge Chart Using Fill Rather Than Stroke  ----- */
	function xpChartistGaugeFillRather() {
		  new Chartist.Pie('#xp-chartist-gauge-fill-rather-chart', {
			series: [45, 35, 20]
		  }, {
			donut: true,
			donutWidth: 40,
			donutSolid: true,
			startAngle: 270,
			total: 200,
			showLabel: true
		  }); 
	}
	xpChartistGaugeFillRather();
	  
	$(".xp-menu-hamburger").on("click", function(e) {
		setTimeout(function() {
			xpChartistSimpleLine();
			xpChartistHoleInData();
			xpChartistFilledHoleInData();
			xpChartistOnlyHoleInData();
			xpChartistScatterDiagram();
			xpChartistLineArea();
			xpChartistBiPolar();
			xpChartistAdvancedSmilAnimations();
			xpChartistSVGPathAnimations();
			xpChartistLineInterpolation();
			xpChartistSeriesOverrides();
			xpChartistBiPolarBar();
			xpChartistOverlappingBars();
			xpChartistAddPeakCircles();
			xpChartistMultiLineLables();
			xpChartistStackedBar();
			xpChartistHorizontalBar();
			xpChartistExtremeResponsive();
			xpChartistDistributedSeries();
			xpChartistLabelPlacement();
			xpChartistSimplePie();
			xpChartistPieChartLabel();
			xpChartistGauge();
			xpChartistAnimatingDonut();
			xpChartistDonutFillRather();
			xpChartistGaugeFillRather();
        }, 500);		
    });

});