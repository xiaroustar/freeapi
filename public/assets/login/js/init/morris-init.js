"use strict";
$(document).ready(function() {    

    /* -----  Morris - Line Chart ----- */
	function xpMorrisLine() {
		var xpMorrisLineData = [
		  {"y": "2012", "a": 3407, "b": 660},
		  {"y": "2011", "a": 3351, "b": 629},
		  {"y": "2010", "a": 3269, "b": 618},
		  {"y": "2009", "a": 3246, "b": 661},
		  {"y": "2008", "a": 3257, "b": 667},
		  {"y": "2007", "a": 3248, "b": 627},
		  {"y": "2006", "a": 3171, "b": 660},
		  {"y": "2005", "a": 3171, "b": 676},
		  {"y": "2004", "a": 3201, "b": 656},
		  {"y": "2003", "a": 3215, "b": 622}
		];
		Morris.Line({
			element: 'xp-morris-line',
			data: xpMorrisLineData,
			xkey: 'y',
			ykeys: ['a', 'b'],
			labels: ['Series A', 'Series B'],
			lineColors: ['#4c7cf3', '#2bcd72'],
			gridLineColor: '#e1e4e9',
			hideHover: 'auto',
			resize: true,
		});
	}
	xpMorrisLine();
    
    /* -----  Morris - Updating Chart ----- */
	function xpMorrisUpdating() {
		var nReloads = 0;
		function data(offset) {
		  var ret = [];
		  for (var x = 0; x <= 360; x += 10) {
			var v = (offset + x) % 360;
			ret.push({
			  x: x,
			  y: Math.sin(Math.PI * v / 180).toFixed(4),
			  z: Math.cos(Math.PI * v / 180).toFixed(4)
			});
		  }
		  return ret;
		}
		var xpMorrisUpdating = Morris.Line({
			element: 'xp-morris-updating',
			data: data(0),
			xkey: 'x',
			ykeys: ['y', 'z'],
			labels: ['Series A', 'Series B'],
			parseTime: false,
			ymin: -1.0,
			ymax: 1.0,
			hideHover: true,
			lineColors: ['#4c7cf3', '#2bcd72'],
			gridLineColor: '#e1e4e9',
			resize: true
		});
		function update() {
		  nReloads++;
		  xpMorrisUpdating.setData(data(5 * nReloads));
		  $('#reloadStatus').text(nReloads + ' reloads');
		}
		setInterval(update, 100);    
	}
	xpMorrisUpdating();

    /* -----  Morris - Bar Chart ----- */
	function xpMorrisBar() {
		Morris.Bar({
			element: 'xp-morris-bar',
			data: [
				{y: '2011 Q1', a: 30, b: 20, c: 10},
				{y: '2011 Q2', a: 10, b: 20, c: 10},
				{y: '2011 Q3', a: 40, b: 30, c: 20},
				{y: '2011 Q4', a: 20, b: 30, c: 40},
				{y: '2011 Q5', a: 10, b: 20, c: 10},
				{y: '2011 Q6', a: 10, b: 20, c: 30}
			],
			xkey: 'y',
			ykeys: ['a', 'b', 'c'],
			labels: ['Series A', 'Series B','Series C'],
			barColors: ['#4c7cf3', '#2bcd72','#e1e4e9'],
			gridLineColor: '#e1e4e9',
			hideHover: 'auto',
			resize: true
		});
	}
	xpMorrisBar();

    /* -----  Morris - Stacked Bar Chart ----- */
	function xpMorrisStackedBar() {
		Morris.Bar({
			element: 'xp-morris-stacked-bar',
			data: [
				{y: '2011 Q1', a: 6, b: 4, c: 2},
				{y: '2011 Q2', a: 8, b: 6, c: 4},
				{y: '2011 Q3', a: 4, b: 8, c: 4},
				{y: '2011 Q4', a: 10, b: 4, c: 6},
				{y: '2011 Q5', a: 2, b: 8, c: 4},
				{y: '2011 Q6', a: 10, b: 2, c: 8}
			],
			xkey: 'y',
			ykeys: ['a', 'b', 'c'],
			labels: ['Series A', 'Series B','Series C'],
			stacked: true,
			barColors: ['#4c7cf3', '#2bcd72','#e1e4e9'],
			gridLineColor: '#e1e4e9',
			hideHover: 'auto',
			resize: true
		});
	}
	xpMorrisStackedBar();
    
    /* -----  Morris - Area Chart ----- */
	function xpMorrisArea() {
		Morris.Area({
			element: 'xp-morris-area',
			data: [
				{ y: '2006', a: 100, b: 90 },
				{ y: '2007', a: 75,  b: 65 },
				{ y: '2008', a: 50,  b: 40 },
				{ y: '2009', a: 75,  b: 65 },
				{ y: '2010', a: 50,  b: 40 },
				{ y: '2011', a: 75,  b: 65 },
				{ y: '2012', a: 100, b: 90 }
			],
			xkey: 'y',
			ykeys: ['a', 'b'],
			labels: ['Series A', 'Series B'],
			lineColors: ['#4c7cf3', '#2bcd72'],
			fillOpacity: 0.5,
			gridLineColor: '#e1e4e9',
			hideHover: 'auto',
			resize: true,
		}); 
	}
	xpMorrisArea();

    /* -----  Morris - Area Chart without Point & Line ----- */
	function xpMorrisAreaWithoutPointLine() {
		Morris.Area({
			element: 'xp-morris-area-without-line-point',
			data: [
				{ y: '2006', a: 0, b: 0 },
				{ y: '2007', a: 100,  b: 55 },
				{ y: '2008', a: 55,  b: 110 },
				{ y: '2009', a: 120,  b: 30 },
				{ y: '2010', a: 80,  b: 140 },
				{ y: '2011', a: 0, b: 0 }
			],
			xkey: 'y',
			ykeys: ['a', 'b'],
			labels: ['Series A', 'Series B'],
			lineColors: ['#2bcd72', '#4c7cf3'],
			fillOpacity: 0.5,
			pointSize: 0,
			lineWidth: 0,
			behaveLikeLine: true,
			gridLineColor: '#e1e4e9',
			hideHover: 'auto',
			resize: true,
		});
	}
	xpMorrisAreaWithoutPointLine();

    /* -----  Morris - Area Chart without Smooth ----- */
	function xpMorrisAreaWithoutSmooth() {
		Morris.Area({
			element: 'xp-morris-area-without-smooth',
			data: [
				{ y: '2006', a: 0, b: 0 },
				{ y: '2007', a: 130,  b: 100 },
				{ y: '2008', a: 80,  b: 60 },
				{ y: '2009', a: 70,  b: 200 },
				{ y: '2010', a: 180,  b: 150 },
				{ y: '2011', a: 105,  b: 90 },
				{ y: '2012', a: 250,  b: 150 }
			],
			xkey: 'y',
			ykeys: ['a', 'b'],
			labels: ['Series A', 'Series B'],
			lineColors: ['#2bcd72', '#4c7cf3'],
			fillOpacity: 0.5,
			pointSize: 0,
			lineWidth: 0,
			behaveLikeLine: true,
			smooth: false,
			gridLineColor: '#e1e4e9',
			hideHover: 'auto',
			resize: true,
		});    
	}
	xpMorrisAreaWithoutSmooth();
	
    /* -----  Morris - Donut Chart ----- */
	function xpMorrisDonut() {
		Morris.Donut({
		  element: 'xp-morris-donut',
		  data: [
			{value: 70, label: 'Foo'},
			{value: 15, label: 'Bar'},
			{value: 10, label: 'Baz'}
		  ],
		  colors: ['#4c7cf3', '#2bcd72','#e1e4e9'],
		  resize: true,
		  formatter: function (x) { return x + "%"}
		});
	}
	xpMorrisDonut();
	
	$(".xp-menu-hamburger").on("click", function(e) {
		setTimeout(function() {
			$("#xp-morris-line").empty();			
			$("#xp-morris-updating").empty();
			$("#xp-morris-bar").empty();
			$("#xp-morris-stacked-bar").empty();
			$("#xp-morris-area").empty();
			$("#xp-morris-area-without-line-point").empty();
			$("#xp-morris-area-without-smooth").empty();
			$("#xp-morris-donut").empty();
			xpMorrisLine();
			xpMorrisUpdating();
			xpMorrisBar();
			xpMorrisStackedBar();
			xpMorrisArea();
			xpMorrisAreaWithoutPointLine();
			xpMorrisAreaWithoutSmooth();
			xpMorrisDonut();
        }, 500);		
    });
	
});