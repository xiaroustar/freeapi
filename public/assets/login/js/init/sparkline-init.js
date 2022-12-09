"use strict";
$(document).ready(function(){

	/* -----  Sparkline - Line ----- */
	var xpSparklineLineData = [0, 45, 22, 37, 30, 54, 48, 23, 50, 15];
	$('#xp-sparkline-line').sparkline(xpSparklineLineData, {
	    type: 'line',
        width: "150",
        height: '150',
        chartRangeMax: 50,
        lineColor: '#4c7cf3',
        fillColor: 'transparent',
        highlightLineColor: '#e1e4e9',
        highlightSpotColor: 'rgba(76,124,243,0.5)'
	});

	/* -----  Sparkline - Area Line  ----- */
	var xpSparklineAreaLineData = [0, 45, 22, 37, 30, 54, 48, 23, 50, 15];
	$('#xp-sparkline-area-line').sparkline(xpSparklineAreaLineData, {
        type: 'line',
        width: "150",
        height: '150',
        chartRangeMax: 50,
        lineColor: '#4c7cf3',
        fillColor: 'rgba(76,124,243,0.5)',
        highlightLineColor: '#e1e4e9',
        highlightSpotColor: 'rgba(76,124,243,0.5)'
	});

	/* -----  Sparkline - Pie Chart  ----- */
	var xpSparklinePieData = [30, 30, 30];
    $('#xp-sparkline-pie').sparkline(xpSparklinePieData, {
        type: 'pie',
        width: '150',
        height: '150',
        sliceColors: ['#2bcd72', '#e1e4e9', '#4c7cf3']
    });

	/* -----  Sparkline - Bar  ----- */
	var xpSparklineBarData = [30, 40, 60, 80, 30, 20, 40, 50, 70, 90];
	$('#xp-sparkline-bar').sparkline(xpSparklineBarData, {
        type: 'bar',
        width: "150",
        height: '150',
        barColor: '#4c7cf3',
        barWidth: '12',
        barSpacing: '5'      
	});

	/* -----  Sparkline - Composite Chart  ----- */
	var xpSparklineCompositeBarData = [30, 40, 60, 80, 30, 20, 40, 50, 70, 90];
	var xpSparklineCompositeLineData = [30, 40, 60, 80, 30, 20, 40, 50, 70, 90];
	$('#xp-sparkline-composite-bar').sparkline(xpSparklineCompositeBarData, {
        type: 'bar',
        width: "150",
        height: '150',
        barColor: '#4c7cf3',
        barWidth: '12',
        barSpacing: '5'
    });    
    $('#xp-sparkline-composite-bar').sparkline(xpSparklineCompositeLineData, {
        type: 'line',
        width: "100%",
        height: '150',
        lineColor: '#ff4b5b',
        fillColor: 'transparent',
        composite: true,
        highlightLineColor: '#e1e4e9',
        highlightSpotColor: 'rgba(76,124,243,0.5)'
    });

     /* -----  Sparkline - Tristate Chart  ----- */
    var xpSparklineTristateData = [1,0,1,-1,-1,1,-1,0,0,1];
	$("#xp-sparkline-tristate").sparkline(xpSparklineTristateData, {
	    type: 'tristate',
	    width: '150',
	    height: '150',
	    posBarColor: '#4c7cf3',
	    negBarColor: '#2bcd72',
	    zeroBarColor: '#e1e4e9',
	    barWidth: 12,
	    barSpacing: 5
	});

    /* -----  Sparkline - Discrete Chart  ----- */
    var xpSparklineDiscreteData = [4,6,7,7,4,3,2,1,4,4];
    $("#xp-sparkline-discrete").sparkline(xpSparklineDiscreteData, {
    	type: 'discrete',
	    width: '150',
	    height: '50',
	    lineColor: '#4c7cf3',
	    thresholdColor: '#4c7cf3',
	    thresholdWidth: '12',
	});

    /* -----  Sparkline - Bullet Chart  ----- */
    var xpSparklineBulletData = [10,12,12,9,7];
    $("#xp-sparkline-bullet").sparkline(xpSparklineBulletData, {
	    type: 'bullet',
	    width: '150',
	    height: '50',
	    targetColor: '#ff4b5b',
	    performanceColor: '#4c7cf3',
    	rangeColors: ['rgba(76,124,243,0.2)','rgba(76,124,243,0.4)','rgba(76,124,243,0.6)']
	});

    /* -----  Sparkline - Box Plot Chart  ----- */
    var xpSparklineBoxPlotData = [4,27,34,52,54,59,61,68,78,82,85,87,91,93,100];
    $("#xp-sparkline-box-plot").sparkline(xpSparklineBoxPlotData, {
	    type: 'box',
	    width: '150',
	    height: '50',
	    raw: false,
	    boxLineColor: '#4c7cf3',
	    boxFillColor: 'rgba(76,124,243,0.5)',
	    whiskerColor: '#4c7cf3',
	    outlierLineColor: '#4c7cf3',
	    outlierFillColor: '#e1e4e9',
	    medianColor: '#ff4b5b',
	    targetColor: '#2bcd72'
	});

});