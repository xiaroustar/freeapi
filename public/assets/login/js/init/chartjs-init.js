"use strict";
$(document).ready(function(){

    /* -----  Chartjs - Global Style  ----- */
    Chart.defaults.global.defaultFontFamily = 'Comfortaa';
    Chart.defaults.global.defaultFontColor = '#8A98AC';
    Chart.defaults.global.defaultFontSize = 14;
    Chart.defaults.global.defaultFontStyle = 'normal';
    Chart.defaults.global.maintainAspectRatio = 0;
    Chart.defaults.global.lineWidth = 2;

    Chart.defaults.global.tooltips.backgroundColor = '#313131';
    Chart.defaults.global.tooltips.titleFontSize = 14;
    Chart.defaults.global.tooltips.titleFontStyle = 'normal';
    Chart.defaults.global.tooltips.bodyFontSize = 12;
    Chart.defaults.global.tooltips.bodyFontStyle = 'normal';

    Chart.defaults.global.tooltips.xPadding = 10;
    Chart.defaults.global.tooltips.yPadding = 10;

    Chart.defaults.global.tooltips.titleMarginBottom = 10;
    Chart.defaults.global.tooltips.bodySpacing = 8;
    Chart.defaults.global.tooltips.cornerRadius = 5;
    
    Chart.defaults.global.legend.labels.boxWidth = 15;
    Chart.defaults.global.legend.labels.fontSize = 15;
    Chart.defaults.global.legend.labels.padding = 16;
    
    /* -----  Chartjs - Line Different Point Chart  ----- */
    var xpLineDiffPointID = document.getElementById("xp-chartjs-line-diff-size-point").getContext('2d');
    var xpLineDiffPoint = new Chart(xpLineDiffPointID, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Series A',
                data: [-80, 40, -60, 30, -60, -40, 20],
                backgroundColor: ["#4c7cf3"],
                borderColor: ["#4c7cf3"],
                pointBorderColor: ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
                pointBackgroundColor: ["#4c7cf3","#4c7cf3","#4c7cf3","#4c7cf3","#4c7cf3","#4c7cf3","#4c7cf3"],
                fill: false,
                borderDash: [5, 5],
                pointRadius: 15,
                pointHoverRadius: 20,
            }, {
                label: 'Series B',
                data: [-40, 80, -20, 60, -40, -15, 60],
                backgroundColor: ["#2bcd72"],
                borderColor: ["#2bcd72"],
                pointBorderColor: ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
                pointBackgroundColor: ["#2bcd72","#2bcd72","#2bcd72","#2bcd72","#2bcd72","#2bcd72","#2bcd72"],
                fill: false,
                borderDash: [5, 5],
                pointRadius: [5, 4, 6, 10, 3, 8, 12],
                pointHoverRadius: 15,
            }, {
                label: 'Series C',
                data: [40, -80, 20, -60, 40, 15, -60],
                backgroundColor: ["#ff4b5b"],
                borderColor: ["#ff4b5b"],
                pointBorderColor: ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
                pointBackgroundColor: ["#ff4b5b","#ff4b5b","#ff4b5b","#ff4b5b","#ff4b5b","#ff4b5b","#ff4b5b"],
                fill: false,
                pointRadius: [4, 6, 8, 7, 5, 3, 10],
                pointHoverRadius: 10,
            }, {
                label: 'Series D',
                data: [80, -40, 60, -30, 60, 40, -20],
                backgroundColor: ["#fac751"],
                borderColor: ["#fac751"],
                pointBorderColor: ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
                pointBackgroundColor: ["#fac751","#fac751","#fac751","#fac751","#fac751","#fac751","#fac751"],
                fill: false,
                pointRadius: [6, 8, 10, 4, 3, 5, 5],
                pointHitRadius: 5,
            }]
        },
        options: {
            responsive: true,
            legend: {
                position: 'top'
            },
            hover: {
                mode: 'index'
            },
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Month'
                    },
                    gridLines: {
                        color: '#e1e4e9',
                        lineWidth: 1,
                        borderDash: [3]
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Value'
                    },
                    gridLines: {
                        color: '#e1e4e9',
                        lineWidth: 1,
                        borderDash: [3]
                    }
                }]
            },
            title: {
                display: false,
                text: 'Chart.js Line Chart - Different point sizes'
            }
        }
    });

    /* -----  Chartjs - Basic Line Chart  ----- */    
    var xpLinechartID = document.getElementById("xp-chartjs-basic-line").getContext('2d');
        var xpLineChart = new Chart(xpLinechartID, {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'Series A',
                    backgroundColor: ["#4c7cf3"],
                    borderColor: ["#4c7cf3"],
                    pointBorderColor: ["#4c7cf3","#4c7cf3","#4c7cf3","#4c7cf3","#4c7cf3","#4c7cf3","#4c7cf3"],
                    pointBackgroundColor: ["#fff","#fff","#fff","#fff","#fff","#fff","#fff"],
                    pointBorderWidth: 2,
                    data: [-25, 32, -17, 83, -87, 92, -82],
                    fill: false,
                }, {
                    label: 'Series B',
                    fill: false,
                    backgroundColor: ["#2bcd72"],
                    borderColor: ["#2bcd72"],
                    pointBorderColor: ["#2bcd72","#2bcd72","#2bcd72","#2bcd72","#2bcd72","#2bcd72","#2bcd72"],
                    pointBackgroundColor: ["#fff","#fff","#fff","#fff","#fff","#fff","#fff"],
                    pointBorderWidth: 2,
                    data: [-50, -83, -37, 25, -58, -97, 21],
                }]
            },
            options: {
                responsive: true,
                title: {
                    display: false,
                    text: 'Chart.js Line Chart'
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: false
                },
                scales: {
                    xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Month'
                        },
                        gridLines: {
                            color: '#e1e4e9',
                            lineWidth: 1,
                            borderDash: [3]
                        }
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Value'
                        },
                        gridLines: {
                            color: '#e1e4e9',
                            lineWidth: 1,
                            borderDash: [3]
                        }
                    }]
                }
            }
        });

        /* -----  Chartjs - Line Stepped Chart  ----- */
        var xpLineSteppedID = document.getElementById("xp-chartjs-line-stepped").getContext('2d');
        var xpLineStepped = new Chart(xpLineSteppedID, {
            type: 'line',
                data: {
                    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'],
                    datasets: [{
                        label: 'Series A',
                        steppedLine: true,
                        data: [68, -68, 20, 90, -20, 31],
                        borderColor: ["#4c7cf3"],
                        pointBorderColor: ["#4c7cf3","#4c7cf3","#4c7cf3","#4c7cf3","#4c7cf3","#4c7cf3","#4c7cf3"],
                        pointBackgroundColor: ["#fff","#fff","#fff","#fff","#fff","#fff","#fff"],
                        pointBorderWidth: 2,
                        fill: false,
                    }]
                },
                options: {
                    responsive: true,
                    title: {
                        display: false,
                        text: 'Stepped Line',
                    },
                    scales: {
                        xAxes: [{       
                            gridLines: {
                                color: '#e1e4e9',
                                lineWidth: 1,
                                borderDash: [3]
                            }
                        }],
                        yAxes: [{
                            gridLines: {
                                color: '#e1e4e9',
                                lineWidth: 1,
                                borderDash: [3]
                            }
                        }]
                    }
                }
        });

        /* -----  Chartjs - Scatter Chart  ----- */
        var xpScatterChartID = document.getElementById("xp-chartjs-scatter-chart").getContext('2d');
        var xpScatterChart = new Chart(xpScatterChartID, {
            type: 'line',
            data: {
                datasets: [{
                    borderColor: ["#4c7cf3"],
                    backgroundColor: ["rgba(76, 124, 243, 0.5)"],
                    pointBorderColor: ["#4c7cf3","#4c7cf3","#4c7cf3","#4c7cf3","#4c7cf3","#4c7cf3","#4c7cf3","#4c7cf3","#4c7cf3","#4c7cf3","#4c7cf3"],
                    pointBackgroundColor: ["#fff","#fff","#fff","#fff","#fff","#fff","#fff","#fff","#fff","#fff","#fff"],
                    pointBorderWidth: 2,
                    label: 'Series A',
                    data: [{
                        x: 1,
                        y: -.01711
                    }, {
                        x: 1.58,
                        y: -.04285
                    }, {
                        x: 2.51,
                        y: -.1068
                    }, {
                        x: 3.98,
                        y: -.2635
                    }, {
                        x: 6.31,
                        y: -.6339
                    }, {
                        x: 10,
                        y: -1.445
                    }, {
                        x: 15.8,
                        y: -2.992
                    }, {
                        x: 25.1,
                        y: -5.429
                    }, {
                        x: 39.8,
                        y: -8.607
                    }, {
                        x: 63.1,
                        y: -12.23
                    }, {
                        x: 100,
                        y: -16.07
                    }]
                }]
            },
            options: {
                title: {
                    display: false,
                    text: 'Chart.js Scatter Chart - Logarithmic X-Axis'
                },
                scales: {
                    xAxes: [{
                        type: 'logarithmic',
                        position: 'bottom',
                        ticks: {
                            userCallback: function(tick) {
                                var remain = tick / (Math.pow(10, Math.floor(Chart.helpers.log10(tick))));
                                if (remain === 1 || remain === 2 || remain === 5) {
                                    return tick.toString() + 'Hz';
                                }
                                return '';
                            },
                        },
                        scaleLabel: {
                            labelString: 'Frequency',
                            display: true,
                        },
                        gridLines: {
                            color: '#e1e4e9',
                            lineWidth: 1,
                            borderDash: [3]
                        }
                    }],
                    yAxes: [{
                        type: 'linear',
                        ticks: {
                            userCallback: function(tick) {
                                return tick.toString() + 'dB';
                            }
                        },
                        scaleLabel: {
                            labelString: 'Voltage',
                            display: true
                        },
                        gridLines: {
                            color: '#e1e4e9',
                            lineWidth: 1,
                            borderDash: [3]
                        }
                    }]
                }
            }
        });

        /* -----  Chartjs - Line Point Chart  ----- */
        var xpLinePointID = document.getElementById("xp-chartjs-line-point").getContext('2d');
        var xpLinePoint = new Chart(xpLinePointID, {
            type: 'line',
                data: {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [{
                        label: 'My First dataset',
                        backgroundColor: ["#4c7cf3"],
                        borderColor: ["#4c7cf3"],                        
                        pointBorderColor: ["#4c7cf3","#4c7cf3","#4c7cf3","#4c7cf3","#4c7cf3","#4c7cf3","#4c7cf3"],
                        pointBackgroundColor: ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
                        pointBorderWidth: 2,
                        data: [10, 23, 5, 88, 67, 43, 0],
                        fill: false,
                        pointRadius: 10,
                        pointHoverRadius: 15,
                        showLine: false,
                    }]
                },
                options: {
                    responsive: true,
                    title: {
                        display: false,
                        text: 'Point Style'
                    },
                    legend: {
                        display: false
                    },
                    elements: {
                        point: {
                            pointStyle: 'rectRot'
                        }
                    },
                    scales: {
                        xAxes: [{       
                            gridLines: {
                                color: '#e1e4e9',
                                lineWidth: 1,
                                borderDash: [3]
                            }
                        }],
                        yAxes: [{
                            gridLines: {
                                color: '#e1e4e9',
                                lineWidth: 1,
                                borderDash: [3],
                                zeroLineColor: '#e1e4e9'
                            }
                        }]
                    }
                }
        });        

        /* -----  Chartjs - Bar Chart  ----- */
        var xpBarChartID = document.getElementById("xp-chartjs-bar-chart").getContext('2d');
        var xpBarChart = new Chart(xpBarChartID, {
            type: 'bar',
                data: {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [{
                        label: 'Series A',
                        backgroundColor: ["#4c7cf3", "#4c7cf3", "#4c7cf3", "#4c7cf3", "#4c7cf3", "#4c7cf3", "#4c7cf3"],
                        borderColor: ["#4c7cf3", "#4c7cf3", "#4c7cf3", "#4c7cf3", "#4c7cf3", "#4c7cf3", "#4c7cf3"],
                        borderWidth: 1,
                        data: [50, 70, 40, 90, 60, 40, 80, 20]
                    }, {
                        label: 'Series B',
                        backgroundColor: ["#2bcd72", "#2bcd72", "#2bcd72", "#2bcd72", "#2bcd72", "#2bcd72", "#2bcd72"],
                        borderColor: ["#2bcd72", "#2bcd72", "#2bcd72", "#2bcd72", "#2bcd72", "#2bcd72", "#2bcd72"],
                        borderWidth: 1,
                        data: [55, 75, 45, 95, 65, 45, 85, 25]
                    }]
                },
                options: {
                    responsive: true,
                    legend: {
                        position: 'top'
                    },
                    title: {
                        display: false,
                        text: 'Chart.js Bar Chart'
                    },
                    scales: {
                        xAxes: [{       
                            gridLines: {
                                color: '#e1e4e9',
                                lineWidth: 1,
                                borderDash: [3]
                            }
                        }],
                        yAxes: [{
                            gridLines: {
                                color: '#e1e4e9',
                                lineWidth: 1,
                                borderDash: [3]
                            }
                        }]
                    }
                }
        });

        /* -----  Chartjs - Horizontal Bar Chart  ----- */
        var xpHoriBarChartID = document.getElementById("xp-chartjs-horizontal-bar-chart").getContext('2d');
        var xpHoriBarChart = new Chart(xpHoriBarChartID, {
            type: 'horizontalBar',
                data: {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [{
                        label: 'Series A',
                        backgroundColor: ["#4c7cf3", "#4c7cf3", "#4c7cf3", "#4c7cf3", "#4c7cf3", "#4c7cf3", "#4c7cf3"],
                        borderColor: ["#4c7cf3", "#4c7cf3", "#4c7cf3", "#4c7cf3", "#4c7cf3", "#4c7cf3", "#4c7cf3"],
                        borderWidth: 1,
                        data: [50, 70, 40, 90, 60, 40, 80, 20]
                    }, {
                        label: 'Series B',
                        backgroundColor: ["#2bcd72", "#2bcd72", "#2bcd72", "#2bcd72", "#2bcd72", "#2bcd72", "#2bcd72"],
                        borderColor: ["#2bcd72", "#2bcd72", "#2bcd72", "#2bcd72", "#2bcd72", "#2bcd72", "#2bcd72"],
                        borderWidth: 1,
                        data: [55, 75, 45, 95, 65, 45, 85, 25]
                    }]
                },
                options: {
                    elements: {
                        rectangle: {
                            borderWidth: 2,
                        }
                    },
                    responsive: true,
                    legend: {
                        position: 'right'
                    },
                    title: {
                        display: false,
                        text: 'Chart.js Horizontal Bar Chart'
                    },
                    scales: {
                        xAxes: [{       
                            gridLines: {
                                color: '#e1e4e9',
                                lineWidth: 1,
                                borderDash: [3]
                            }
                        }],
                        yAxes: [{
                            gridLines: {
                                color: '#e1e4e9',
                                lineWidth: 1,
                                borderDash: [3]
                            }
                        }]
                    }                    
                }
        });

        /* -----  Chartjs - Multi Axis Bar Chart  ----- */
        var xpMultiAxisBarChartID = document.getElementById("xp-chartjs-multi-axis-bar-chart").getContext('2d');
        var xpMultiAxisBarChart = new Chart(xpMultiAxisBarChartID, {
            type: 'bar',
                data: {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [{
                        label: 'Series A',
                        backgroundColor: ["#4c7cf3","#ff4b5b","#2bcd72","#fac751","#52c4ca","#949ca9","#313131"],
                        yAxisID: 'y-axis-1',
                        data: [82, 20, -96, 52, -49, -78, -4]
                    }, {
                        label: 'Series B',
                        backgroundColor: ["#e1e4e9"],
                        yAxisID: 'y-axis-2',
                        data: [7, 33, 32, 95, -78, 72, 74]
                    }]
                },
                options: {
                    responsive: true,
                    title: {
                        display: false,
                        text: 'Chart.js Bar Chart - Multi Axis'
                    },
                    tooltips: {
                        mode: 'index',
                        intersect: true
                    },
                    scales: {
                        yAxes: [{
                            type: 'linear',
                            display: true,
                            position: 'left',
                            id: 'y-axis-1',
                            gridLines: {
                                color: '#e1e4e9',
                                lineWidth: 1,
                                borderDash: [3]
                            }
                        }, {
                            type: 'linear',
                            display: true,
                            position: 'right',
                            id: 'y-axis-2',
                            gridLines: {
                                drawOnChartArea: false,
                                color: '#e1e4e9',
                                lineWidth: 1,
                                borderDash: [3]
                            }
                        }],
                    }
                }
        });

        /* -----  Chartjs - Stacked Bar Chart  ----- */
        var xpStackedBarChartID = document.getElementById("xp-chartjs-stacked-bar-chart").getContext('2d');
        var xpStackedBarChart = new Chart(xpStackedBarChartID, {
            type: 'bar',
                data: {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [{
                        label: 'Series A',
                        backgroundColor: ["#4c7cf3", "#4c7cf3", "#4c7cf3", "#4c7cf3", "#4c7cf3", "#4c7cf3", "#4c7cf3"],
                        data: [70, 66, 50, 69, 9, 36, -26]
                    }, {
                        label: 'Series B',
                        backgroundColor: ["#2bcd72", "#2bcd72", "#2bcd72", "#2bcd72", "#2bcd72", "#2bcd72", "#2bcd72"],
                        data: [19, -17, 67, -21, -26, 32, -29]
                    }, {
                        label: 'Series C',
                        backgroundColor: ["#e1e4e9", "#e1e4e9", "#e1e4e9", "#e1e4e9", "#e1e4e9", "#e1e4e9", "#e1e4e9"],
                        data: [92, -48, 80, 21, -90, -12, 43]
                    }]
                },
                options: {
                    title: {
                        display: false,
                        text: 'Chart.js Bar Chart - Stacked'
                    },
                    tooltips: {
                        mode: 'index',
                        intersect: false
                    },
                    responsive: true,
                    scales: {
                        xAxes: [{
                            stacked: true,
                            gridLines: {
                                color: '#e1e4e9',
                                lineWidth: 1,
                                borderDash: [3]
                            }
                        }],
                        yAxes: [{
                            stacked: true,
                            gridLines: {
                                color: '#e1e4e9',
                                lineWidth: 1,
                                borderDash: [3]
                            }
                        }]
                    }
                }
        });

        /* -----  Chartjs - Line Bar Mixed Chart  ----- */
        var xpLineBarMixedID = document.getElementById("xp-chartjs-line-bar-mixed-chart").getContext('2d');
        var xpLineBarMixed = new Chart(xpLineBarMixedID, {
            type: 'bar',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    type: 'bar',
                    label: 'Series A',
                    backgroundColor: [
                        "rgba(76, 124, 243, 0.9)",
                        "rgba(76, 124, 243, 0.9)",
                        "rgba(76, 124, 243, 0.9)",
                        "rgba(76, 124, 243, 0.9)",
                        "rgba(76, 124, 243, 0.9)",
                        "rgba(76, 124, 243, 0.9)",
                        "rgba(76, 124, 243, 0.9)"
                    ],
                    borderColor: [
                        "#ffffff",
                        "#ffffff",
                        "#ffffff",
                        "#ffffff",
                        "#ffffff",
                        "#ffffff",
                        "#ffffff"
                    ],
                    borderWidth: 2,
                    data: [70,40,30,20,10,50,60]
                }, {
                    type: 'bar',
                    label: 'Series B',
                    backgroundColor: [
                        "rgba(43, 205, 114, 0.9)",
                        "rgba(43, 205, 114, 0.9)",
                        "rgba(43, 205, 114, 0.9)",
                        "rgba(43, 205, 114, 0.9)",
                        "rgba(43, 205, 114, 0.9)",
                        "rgba(43, 205, 114, 0.9)",
                        "rgba(43, 205, 114, 0.9"
                    ],
                    borderColor: [
                        "#ffffff",
                        "#ffffff",
                        "#ffffff",
                        "#ffffff",
                        "#ffffff",
                        "#ffffff",
                        "#ffffff"
                    ],
                    borderWidth: 2,
                    data: [90,30,20,10,5,60,80]
                }, {
                    type: 'line',
                    label: 'Series C',
                    backgroundColor: ["rgba(275, 75, 91, 0.5)"],
                    borderColor: ["#ff4b5b"],
                    pointBorderColor: ["#ff4b5b","#ff4b5b","#ff4b5b","#ff4b5b","#ff4b5b","#ff4b5b","#ff4b5b"],
                    pointBorderWidth: 2,
                    pointBackgroundColor: ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
                    data: [30,50,20,40,70,50,10]
                }]
            },  
            options: {
                responsive: true,
                title: {
                    display: false,
                    text: 'Chart.js Combo Bar Line Chart'
                },
                scales: {
                    xAxes: [{       
                        gridLines: {
                            color: '#e1e4e9',
                            lineWidth: 1,
                            borderDash: [3]
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            color: '#e1e4e9',
                            lineWidth: 1,
                            borderDash: [3],
                            zeroLineColor: '#e1e4e9'
                        }
                    }]
                }
            }
        });

        /* -----  Chartjs - Boundary Area Chart  ----- */
        var xpBoundaryAreaID = document.getElementById("xp-chartjs-boundary-area-chart").getContext('2d');
        var xpBoundaryArea = new Chart(xpBoundaryAreaID, {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    backgroundColor: ["rgba(76,124,243,0.5)"],
                    borderColor: ["#4c7cf3"],
                    pointBorderColor: ["#4c7cf3","#4c7cf3","#4c7cf3","#4c7cf3","#4c7cf3","#4c7cf3","#4c7cf3"],
                    pointBackgroundColor: ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
                    pointBorderWidth: 2,
                    data: [6.06, 82.2, -22.11, 21.53, -21.47, 73.61, -53.75, -60.32],
                    label: 'Series A',
                    fill: 'start'
                }]
            },
            options: {
                title: {
                    text: 'fill: start',
                    display: false
                },
                maintainAspectRatio: true,
                spanGaps: true,
                elements: {
                    line: {
                        tension: 0.000001
                    }
                },
                plugins: {
                    filler: {
                        propagate: false
                    }
                },
                scales: {
                    xAxes: [{  
                        ticks: {
                            autoSkip: false,
                            maxRotation: 0
                        },     
                        gridLines: {
                            color: '#e1e4e9',
                            lineWidth: 1,
                            borderDash: [3]
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            color: '#e1e4e9',
                            lineWidth: 1,
                            borderDash: [3],
                            zeroLineColor: '#e1e4e9',
                        }
                    }]
                }
            }
        });

        /* -----  Chartjs - Dataset Area Chart  ----- */
        var xpDatasetAreaID = document.getElementById("xp-chartjs-dataset-area-chart").getContext('2d');
        var xpDatasetArea = new Chart(xpDatasetAreaID, {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
                datasets: [{
                    backgroundColor: ["rgba(148,156,169,0.5)"],
                    borderColor: ["#949ca9"],
                    pointBorderColor: ["#949ca9","#949ca9","#949ca9","#949ca9","#949ca9","#949ca9","#949ca9","#949ca9"],
                    pointBackgroundColor: ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
                    pointBorderWidth: 2,
                    data: [54, 55, 54, 60, 40, 28, 25, 72],
                    hidden: true,
                    label: 'D0'
                }, {                          
                    backgroundColor: ["rgba(43,205,114,0.5)"],
                    borderColor: ["#2bcd72"],  
                    pointBorderColor: ["#2bcd72","#2bcd72","#2bcd72","#2bcd72","#2bcd72","#2bcd72","#2bcd72","#2bcd72"],
                    pointBackgroundColor: ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
                    pointBorderWidth: 2,                      
                    data: [30, 20, 26, 44, 68, 76, 58, 21],
                    label: 'D1',
                    fill: '-1'
                }, {
                    backgroundColor: ["rgba(82,196,202,0.5)"],
                    borderColor: ["#52c4ca"], 
                    pointBorderColor: ["#52c4ca","#52c4ca","#52c4ca","#52c4ca","#52c4ca","#52c4ca","#52c4ca","#52c4ca"],
                    pointBackgroundColor: ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
                    pointBorderWidth: 2,                       
                    data: [59, 22, 28, 77, 76, 39, 42, 22],
                    hidden: true,
                    label: 'D2',
                    fill: 1
                }, {
                    backgroundColor: ["rgba(255,75,91,0.5)"],
                    borderColor: ["#ff4b5b"],
                    pointBorderColor: ["#ff4b5b","#ff4b5b","#ff4b5b","#ff4b5b","#ff4b5b","#ff4b5b","#ff4b5b","#ff4b5b"],
                    pointBackgroundColor: ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
                    pointBorderWidth: 2, 
                    data: [59, 22, 28, 77, 76, 39, 42, 22],
                    label: 'D3',
                    fill: '-1'
                }, {
                    backgroundColor: ["rgba(250,199,81,0.5)"],
                    borderColor: ["#fac751"],
                    pointBorderColor: ["#fac751","#fac751","#fac751","#fac751","#fac751","#fac751","#fac751","#fac751"],
                    pointBackgroundColor: ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
                    pointBorderWidth: 2, 
                    data: [50, 32, 61, 20, 68, 33, 29, 51],
                    label: 'D4',
                    fill: '-1'
                }, {
                    backgroundColor: ["rgba(76,124,243,0.5)"],
                    borderColor: ["#4c7cf3"],
                    pointBorderColor: ["#4c7cf3","#4c7cf3","#4c7cf3","#4c7cf3","#4c7cf3","#4c7cf3","#4c7cf3","#4c7cf3"],
                    pointBackgroundColor: ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
                    pointBorderWidth: 2,                                               
                    data: [78, 38, 60, 35, 66, 55, 45, 74],
                    label: 'D5',
                    fill: '+2'
                }, {
                    backgroundColor: ["rgba(225,228,233,0.5)"],
                    borderColor: ["#e1e4e9"],
                    pointBorderColor: ["#d2d7de","#d2d7de","#d2d7de","#d2d7de","#d2d7de","#d2d7de","#d2d7de","#d2d7de"],
                    pointBackgroundColor: ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
                    pointBorderWidth: 2,
                    data: [56, 68, 21, 23, 64, 48, 36, 52],
                    label: 'D6',
                    fill: false
                }, {
                    backgroundColor: ["rgba(49,49,49,0.5)"],
                    borderColor: ["#313131"],
                    pointBorderColor: ["#313131","#313131","#313131","#313131","#313131","#313131","#313131","#313131"],
                    pointBackgroundColor: ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
                    pointBorderWidth: 2,
                    data: [54, 55, 54, 60, 40, 28, 25, 72],
                    label: 'D7',
                    fill: 8
                }, {
                    backgroundColor: ["rgba(76,124,243,0.5)"],
                    borderColor: ["#4c7cf3"],
                    pointBorderColor: ["#4c7cf3","#4c7cf3","#4c7cf3","#4c7cf3","#4c7cf3","#4c7cf3","#4c7cf3","#4c7cf3"],
                    pointBackgroundColor: ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
                    pointBorderWidth: 2, 
                    data: [30, 20, 26, 44, 68, 76, 58, 21],
                    hidden: true,
                    label: 'D8',
                    fill: 'end'
                }]
            },
            options: {
                title: {
                    text: 'fill: start',
                    display: false
                },
                maintainAspectRatio: true,
                spanGaps: true,
                elements: {
                    line: {
                        tension: 0.000001
                    }
                },
                scales: {
                    xAxes: [{       
                        gridLines: {
                            color: '#e1e4e9',
                            lineWidth: 1,
                            borderDash: [3],
                            zeroLineColor: '#e1e4e9'
                        }
                    }],
                    yAxes: [{
                        stacked: true,
                        gridLines: {
                            color: '#e1e4e9',
                            lineWidth: 1,
                            borderDash: [3],
                            zeroLineColor: '#e1e4e9'
                        }
                    }]
                },                
                plugins: {
                    filler: {
                        propagate: false
                    },
                    'samples-filler-analyser': {
                        target: 'chart-analyser'
                    }
                }
            }
        });

        /* -----  Chartjs - Stacked Area Chart  ----- */
        var xpStackedAreaID = document.getElementById("xp-chartjs-stacked-area-chart").getContext('2d');
        var xpStackedArea = new Chart(xpStackedAreaID, {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'Series A',
                    borderColor: ["#4c7cf3"],
                    backgroundColor: ["#4c7cf3"],
                    pointBorderColor: ["#4c7cf3","#4c7cf3","#4c7cf3","#4c7cf3","#4c7cf3","#4c7cf3","#4c7cf3"],
                    pointBackgroundColor: ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
                    pointBorderWidth: 2,
                    data: [-83, 45, 80, 91, 52, 84, 36],
                }, {
                    label: 'Series B',
                    borderColor: ["#2bcd72"],
                    backgroundColor: ["#2bcd72"],
                    pointBorderColor: ["#2bcd72","#2bcd72","#2bcd72","#2bcd72","#2bcd72","#2bcd72","#2bcd72"],
                    pointBackgroundColor: ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
                    pointBorderWidth: 2,
                    data: [-9, -84, 37, -53, 59, -25, 3],
                }, {
                    label: 'Series C',
                    borderColor: ["#ff4b5b"],
                    backgroundColor: ["#ff4b5b"],
                    pointBorderColor: ["#ff4b5b","#ff4b5b","#ff4b5b","#ff4b5b","#ff4b5b","#ff4b5b","#ff4b5b"],
                    pointBackgroundColor: ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
                    pointBorderWidth: 2,
                    data: [-4, -64, 41, 10, 2, -55, -16],
                }, {
                    label: 'Series D',
                    borderColor: ["#fac751"],
                    backgroundColor: ["#fac751"],
                    pointBorderColor: ["#fac751","#fac751","#fac751","#fac751","#fac751","#fac751","#fac751"],
                    pointBackgroundColor: ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
                    pointBorderWidth: 2,
                    data: [56, -1, 3, -18, 86, -51, 63],
                }]
            },
            options: {
                responsive: true,
                title: {
                    display: false,
                    text: 'Chart.js Line Chart - Stacked Area'
                },
                tooltips: {
                    mode: 'index',
                },
                hover: {
                    mode: 'index'
                },
                scales: {
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Month'
                        },
                        gridLines: {
                            color: '#e1e4e9',
                            lineWidth: 1,
                            borderDash: [3]
                        }
                    }],
                    yAxes: [{
                        stacked: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Value'
                        },
                        gridLines: {
                            color: '#e1e4e9',
                            lineWidth: 1,
                            borderDash: [3]
                        }
                    }]
                }
            }
        });

        /* -----  Chartjs - Radar Area Chart  ----- */
        var xpRadarAreaID = document.getElementById("xp-chartjs-radar-area-chart").getContext('2d');
        var xpRadarArea = new Chart(xpRadarAreaID, {
            type: 'radar',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
                datasets: [{
                    backgroundColor: ["rgba(255,75,91,0.5)"],
                    borderColor: ["#ff4b5b"],
                    pointBorderColor: ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
                    pointBackgroundColor: ["#ff4b5b","#ff4b5b","#ff4b5b","#ff4b5b","#ff4b5b","#ff4b5b","#ff4b5b","#ff4b5b"],
                    pointBorderWidth: 1,
                    data: [21.9, 21.67, 18.5, 18.77, 19.62, 19.68, 19.93, 21.95],
                    label: 'D0'
                }, {
                    backgroundColor: ["#e1e4e9"],
                    borderColor: ["#d2d7de"],
                    pointBorderColor: ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
                    pointBackgroundColor: ["#d2d7de","#d2d7de","#d2d7de","#d2d7de","#d2d7de","#d2d7de","#d2d7de","#d2d7de"],
                    pointBorderWidth: 1,
                    data: [36.32, 43.93, 32.54, 33.54, 42.82, 39.34, 35.84, 33.5],
                    hidden: true,
                    label: 'D1',
                    fill: '-1'
                }, {
                    backgroundColor: ["rgba(82,196,202,0.5)"],
                    borderColor: ["#52c4ca"],
                    pointBorderColor: ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
                    pointBackgroundColor: ["#52c4ca","#52c4ca","#52c4ca","#52c4ca","#52c4ca","#52c4ca","#52c4ca","#52c4ca"],
                    pointBorderWidth: 1,
                    data: [36.32, 43.93, 32.54, 33.54, 42.82, 39.34, 35.84, 33.5],
                    label: 'D2',
                    fill: 1
                }, {
                    backgroundColor: ["rgba(250,199,81,0.5)"],
                    borderColor: ["#fac751"],
                    pointBorderColor: ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
                    pointBackgroundColor: ["#fac751","#fac751","#fac751","#fac751","#fac751","#fac751","#fac751","#fac751"],
                    pointBorderWidth: 1,
                    data: [47.7, 58.92, 44.45, 49.08, 53.39, 51.85, 48.4, 49.36],
                    label: 'D3',
                    fill: false
                }, {
                    backgroundColor: ["rgba(43, 205, 114, 0.5)"],
                    borderColor: ["#2bcd72"],
                    pointBorderColor: ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
                    pointBackgroundColor: ["#2bcd72","#2bcd72","#2bcd72","#2bcd72","#2bcd72","#2bcd72","#2bcd72","#2bcd72"],
                    pointBorderWidth: 1,
                    data: [60.73, 71.97, 53.96, 57.22, 65.09, 62.06, 56.90, 60.52],
                    label: 'D4',
                    fill: '-1'
                }, {
                    backgroundColor: ["rgba(76, 124, 243, 0.5)"],
                    borderColor: ["#4c7cf3"],
                    pointBorderColor: ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
                    pointBackgroundColor: ["#4c7cf3","#4c7cf3","#4c7cf3","#4c7cf3","#4c7cf3","#4c7cf3","#4c7cf3","#4c7cf3"],
                    pointBorderWidth: 1,
                    data: [73.33, 80.78, 68.05, 68.59, 76.79, 77.24, 66.08, 72.37],
                    label: 'D5',
                    fill: '-1'
                }]
            },
            options: {
                maintainAspectRatio: true,
                spanGaps: false,
                elements: {
                    line: {
                        tension: 0.000001
                    }
                },
                plugins: {
                    filler: {
                        propagate: false
                    },
                    'samples-filler-analyser': {
                        target: 'chart-analyser'
                    }
                }
            }
        }); 
        
        /* -----  Chartjs - Radar Chart  ----- */
        var xpRadarChartID = document.getElementById("xp-chartjs-radar-chart").getContext('2d');
        var xpRadarChart = new Chart(xpRadarChartID, {
            type: 'radar',
            data: {
                labels: [['Eating', 'Dinner'], ['Drinking', 'Water'], 'Sleeping', ['Designing', 'Graphics'], 'Coding', 'Cycling', 'Running'],
                datasets: [{
                    label: 'Series A',
                    backgroundColor: ["rgba(76, 124, 243, 0.5)"],
                    borderColor: ["#4c7cf3"],
                    pointBorderColor: ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
                    pointBackgroundColor: ["#4c7cf3","#4c7cf3","#4c7cf3","#4c7cf3","#4c7cf3","#4c7cf3","#4c7cf3","#4c7cf3"],
                    pointBorderWidth: 1,
                    data: [35,12,49,81,89,34,81]
                }, {
                    label: 'Series B',
                    backgroundColor: ["rgba(43, 205, 114, 0.5)"],
                    borderColor: ["#2bcd72"],
                    pointBorderColor: ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
                    pointBackgroundColor: ["#2bcd72","#2bcd72","#2bcd72","#2bcd72","#2bcd72","#2bcd72","#2bcd72","#2bcd72"],
                    pointBorderWidth: 1,
                    data: [44,65,21,59,41,82,30]
                }]
            },
            options: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: false,
                    text: 'Chart.js Radar Chart'
                },
                scale: {
                    ticks: {
                        beginAtZero: true
                    }
                }
            }
        });

        /* -----  Chartjs - Doughnut Chart  ----- */
        var xpDoughnutChartID = document.getElementById("xp-chartjs-doughnut-chart").getContext('2d');
        var xpDoughnutChart = new Chart(xpDoughnutChartID, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [40,35,25],
                    backgroundColor: ["#4c7cf3","#2bcd72","#e1e4e9"],
                    label: 'Dataset 1'
                }],
                labels: ['Series A','Series B','Series C']
            },
            options: {
                responsive: true,  
                cutoutPercentage: 75,              
                legend: {
                    position: 'top'
                },
                title: {
                    display: false,
                    text: 'Chart.js Doughnut Chart'
                },
                animation: {
                    animateScale: true,
                    animateRotate: true
                }
            }
        });

        /* -----  Chartjs - Pie Chart  ----- */
        var xpPieChartID = document.getElementById("xp-chartjs-pie-chart").getContext('2d');
        var xpPieChart = new Chart(xpPieChartID, {
            type: 'pie',
            data: {
                datasets: [{
                    data: [40,35,25],
                    backgroundColor: ["#4c7cf3","#2bcd72","#e1e4e9"],
                    label: 'Dataset 1'
                }],
                labels: ['Series A','Series B','Series C']
            },
            options: {
                responsive: true
            }
        });

        /* -----  Chartjs - Polar Area Chart  ----- */
        var xpPolarAreaChartID = document.getElementById("xp-chartjs-polar-area-chart").getContext('2d');
        var xpPolarAreaChart = new Chart(xpPolarAreaChartID, {
            type: 'polarArea',
            data: {
                datasets: [{
                    data: [65,91,56,84,33],
                    backgroundColor: ["rgba(275, 75, 91, 0.5)","rgba(76, 124, 243, 0.5)","rgba(250, 199, 81, 0.5)","rgba(43, 205, 114, 0.5)","rgba(82, 196, 202, 0.5)"],
                    label: 'Dataset 1'
                }],
                labels: ['Series A','Series B','Series C','Series D','Series E']
            },
            options: {
                responsive: true,                
                legend: {
                    position: 'right'
                },
                title: {
                    display: false,
                    text: 'Chart.js Polar Area Chart'
                },
                scale: {
                    ticks: {
                        beginAtZero: false
                    },
                    reverse: false
                },
                animation: {
                    animateRotate: false,
                    animateScale: true
                }
            }
        });        

        /* -----  Chartjs - Bubble Chart  ----- */
        var xpBubbleChartID = document.getElementById("xp-chartjs-bubble-chart").getContext('2d');
        var xpBubbleChart = new Chart(xpBubbleChartID, {
            type: 'bubble',
            data: {
                datasets: [{
                    label: ["First Dataset"],
                    data: [{
                        x: 70,
                        y: 10,
                        r: 4
                    }, {
                        x: 10,
                        y: 70,
                        r: 4
                    }, {
                        x: 20,
                        y: 20,
                        r: 6
                    }, {
                        x: 20,
                        y: 30,
                        r: 8
                    }, {
                        x: 20,
                        y: 40,
                        r: 10
                    }, {
                        x: 20,
                        y: 50,
                        r: 12
                    }, {
                        x: 20,
                        y: 60,
                        r: 14
                    }, {
                        x: 30,
                        y: 20,
                        r: 16
                    }, {
                        x: 30,
                        y: 30,
                        r: 18
                    }, {
                        x: 30,
                        y: 40,
                        r: 20
                    }, {
                        x: 30,
                        y: 50,
                        r: 2
                    }, {
                        x: 30,
                        y: 60,
                        r: 4
                    }, {
                        x: 40,
                        y: 20,
                        r: 6
                    }, {
                        x: 40,
                        y: 30,
                        r: 8
                    }, {
                        x: 40,
                        y: 40,
                        r: 10
                    }, {
                        x: 40,
                        y: 50,
                        r: 12
                    }, {
                        x: 40,
                        y: 60,
                        r: 14
                    }, {
                        x: 50,
                        y: 20,
                        r: 16
                    }, {
                        x: 50,
                        y: 30,
                        r: 18
                    }, {
                        x: 50,
                        y: 40,
                        r: 20
                    }, {
                        x: 50,
                        y: 50,
                        r: 2
                    }, {
                        x: 50,
                        y: 60,
                        r: 4
                    }, {
                        x: 60,
                        y: 20,
                        r: 6
                    }, {
                        x: 60,
                        y: 30,
                        r: 8
                    }, {
                        x: 60,
                        y: 40,
                        r: 10
                    }, {
                        x: 60,
                        y: 50,
                        r: 12
                    }, {
                        x: 60,
                        y: 60,
                        r: 14
                    }, {
                        x: 25,
                        y: 25,
                        r: 16
                    }, {
                        x: 25,
                        y: 35,
                        r: 18
                    }, {
                        x: 25,
                        y: 45,
                        r: 20
                    }, {
                        x: 25,
                        y: 55,
                        r: 2
                    }, {
                        x: 35,
                        y: 25,
                        r: 4
                    }, {
                        x: 35,
                        y: 35,
                        r: 6
                    }, {
                        x: 35,
                        y: 45,
                        r: 8
                    }, {
                        x: 35,
                        y: 55,
                        r: 10
                    }, {
                        x: 45,
                        y: 25,
                        r: 12
                    }, {
                        x: 45,
                        y: 35,
                        r: 14
                    }, {
                        x: 45,
                        y: 45,
                        r: 16
                    }, {
                        x: 45,
                        y: 55,
                        r: 18
                    }, {
                        x: 55,
                        y: 25,
                        r: 20
                    }, {
                        x: 55,
                        y: 35,
                        r: 2
                    }, {
                        x: 55,
                        y: 45,
                        r: 4
                    }, {
                        x: 55,
                        y: 55,
                        r: 6
                    }, {
                        x: 20,
                        y: 25,
                        r: 8
                    }, {
                        x: 20,
                        y: 35,
                        r: 10
                    }, {
                        x: 20,
                        y: 45,
                        r: 12
                    }, {
                        x: 20,
                        y: 55,
                        r: 14
                    }, {
                        x: 30,
                        y: 25,
                        r: 16
                    }, {
                        x: 30,
                        y: 35,
                        r: 18
                    }, {
                        x: 30,
                        y: 45,
                        r: 20
                    }, {
                        x: 30,
                        y: 55,
                        r: 2
                    }, {
                        x: 40,
                        y: 25,
                        r: 4
                    }, {
                        x: 40,
                        y: 35,
                        r: 6
                    }, {
                        x: 40,
                        y: 45,
                        r: 8
                    }, {
                        x: 40,
                        y: 55,
                        r: 10
                    }, {
                        x: 50,
                        y: 25,
                        r: 12
                    }, {
                        x: 50,
                        y: 35,
                        r: 14
                    }, {
                        x: 50,
                        y: 45,
                        r: 16
                    }, {
                        x: 50,
                        y: 55,
                        r: 18
                    }, {
                        x: 60,
                        y: 25,
                        r: 20
                    }, {
                        x: 60,
                        y: 35,
                        r: 2
                    }, {
                        x: 60,
                        y: 45,
                        r: 4
                    }, {
                        x: 60,
                        y: 55,
                        r: 6
                    }, {
                        x: 25,
                        y: 20,
                        r: 8
                    }, {
                        x: 35,
                        y: 20,
                        r: 10
                    }, {
                        x: 45,
                        y: 20,
                        r: 12
                    }, {
                        x: 55,
                        y: 20,
                        r: 14
                    }, {
                        x: 25,
                        y: 30,
                        r: 16
                    }, {
                        x: 35,
                        y: 30,
                        r: 18
                    }, {
                        x: 45,
                        y: 30,
                        r: 20
                    }, {
                        x: 55,
                        y: 30,
                        r: 2
                    }, {
                        x: 25,
                        y: 40,
                        r: 4
                    }, {
                        x: 35,
                        y: 40,
                        r: 6
                    }, {
                        x: 45,
                        y: 40,
                        r: 8
                    }, {
                        x: 55,
                        y: 40,
                        r: 10
                    }, {
                        x: 25,
                        y: 50,
                        r: 12
                    }, {
                        x: 35,
                        y: 50,
                        r: 14
                    }, {
                        x: 45,
                        y: 50,
                        r: 16
                    }, {
                        x: 55,
                        y: 50,
                        r: 18
                    }, {
                        x: 25,
                        y: 60,
                        r: 20
                    }, {
                        x: 35,
                        y: 60,
                        r: 2
                    }, {
                        x: 45,
                        y: 60,
                        r: 4
                    }, {
                        x: 55,
                        y: 60,
                        r: 6
                    }, {
                        x: 22,
                        y: 22,
                        r: 8
                    }, {
                        x: 22,
                        y: 28,
                        r: 10
                    }, {
                        x: 22,
                        y: 32,
                        r: 12
                    }, {
                        x: 22,
                        y: 38,
                        r: 14
                    }, {
                        x: 22,
                        y: 42,
                        r: 16
                    }, {
                        x: 22,
                        y: 48,
                        r: 18
                    }, {
                        x: 22,
                        y: 52,
                        r: 20
                    }, {
                        x: 22,
                        y: 58,
                        r: 2
                    }, {
                        x: 28,
                        y: 22,
                        r: 4
                    }, {
                        x: 28,
                        y: 28,
                        r: 6
                    }, {
                        x: 28,
                        y: 32,
                        r: 8
                    }, {
                        x: 28,
                        y: 38,
                        r: 10
                    }, {
                        x: 28,
                        y: 42,
                        r: 12
                    }, {
                        x: 28,
                        y: 48,
                        r: 14
                    }, {
                        x: 28,
                        y: 52,
                        r: 16
                    }, {
                        x: 28,
                        y: 58,
                        r: 18
                    }, {
                        x: 32,
                        y: 22,
                        r: 20
                    }, {
                        x: 32,
                        y: 28,
                        r: 2
                    }, {
                        x: 32,
                        y: 32,
                        r: 4
                    }, {
                        x: 32,
                        y: 38,
                        r: 6
                    }, {
                        x: 32,
                        y: 42,
                        r: 8
                    }, {
                        x: 32,
                        y: 48,
                        r: 10
                    }, {
                        x: 32,
                        y: 52,
                        r: 12
                    }, {
                        x: 32,
                        y: 58,
                        r: 14
                    }, {
                        x: 38,
                        y: 22,
                        r: 16
                    }, {
                        x: 38,
                        y: 28,
                        r: 18
                    }, {
                        x: 38,
                        y: 32,
                        r: 20
                    }, {
                        x: 38,
                        y: 38,
                        r: 2
                    }, {
                        x: 38,
                        y: 42,
                        r: 4
                    }, {
                        x: 38,
                        y: 48,
                        r: 6
                    }, {
                        x: 38,
                        y: 52,
                        r: 8
                    }, {
                        x: 38,
                        y: 58,
                        r: 10
                    }, {
                        x: 42,
                        y: 22,
                        r: 12
                    }, {
                        x: 42,
                        y: 28,
                        r: 14
                    }, {
                        x: 42,
                        y: 32,
                        r: 16
                    }, {
                        x: 42,
                        y: 38,
                        r: 18
                    }, {
                        x: 42,
                        y: 42,
                        r: 20
                    }, {
                        x: 42,
                        y: 48,
                        r: 2
                    }, {
                        x: 42,
                        y: 52,
                        r: 4
                    }, {
                        x: 42,
                        y: 58,
                        r: 6
                    }, {
                        x: 48,
                        y: 22,
                        r: 8
                    }, {
                        x: 48,
                        y: 28,
                        r: 10
                    }, {
                        x: 48,
                        y: 32,
                        r: 12
                    }, {
                        x: 48,
                        y: 38,
                        r: 14
                    }, {
                        x: 48,
                        y: 42,
                        r: 16
                    }, {
                        x: 48,
                        y: 48,
                        r: 18
                    }, {
                        x: 48,
                        y: 52,
                        r: 20
                    }, {
                        x: 48,
                        y: 58,
                        r: 2
                    }, {
                        x: 52,
                        y: 22,
                        r: 4
                    }, {
                        x: 52,
                        y: 28,
                        r: 6
                    }, {
                        x: 52,
                        y: 32,
                        r: 8
                    }, {
                        x: 52,
                        y: 38,
                        r: 10
                    }, {
                        x: 52,
                        y: 42,
                        r: 12
                    }, {
                        x: 52,
                        y: 48,
                        r: 14
                    }, {
                        x: 52,
                        y: 52,
                        r: 16
                    }, {
                        x: 52,
                        y: 58,
                        r: 18
                    }, {
                        x: 58,
                        y: 22,
                        r: 20
                    }, {
                        x: 58,
                        y: 28,
                        r: 2
                    }, {
                        x: 58,
                        y: 32,
                        r: 4
                    }, {
                        x: 58,
                        y: 38,
                        r: 6
                    }, {
                        x: 58,
                        y: 42,
                        r: 8
                    }, {
                        x: 58,
                        y: 48,
                        r: 10
                    }, {
                        x: 58,
                        y: 52,
                        r: 12
                    }, {
                        x: 58,
                        y: 58,
                        r: 14
                    }],
                    backgroundColor: ["rgba(76,124,243,0.8)"],
                }]
            },  
            options: {
                aspectRatio: 2,
                legend: false,
                tooltips: false,
                elements: {
                    point: {
                        backgroundColor: [
                            "rgba(76,124,243,0.8)",
                            "rgba(148,156,169,0.8)",
                            "rgba(43,205,114,0.8)",
                            "rgba(255,75,91,0.8)",
                            "rgba(250,199,81,0.8)",
                            "rgba(82,196,202,0.8)",
                            "rgba(225,228,233,0.8)",
                            "rgba(49,49,49,0.8)",
                            "rgba(76,124,243,0.8)",
                            "rgba(148,156,169,0.8)",
                            "rgba(43,205,114,0.8)",
                            "rgba(255,75,91,0.8)",
                            "rgba(250,199,81,0.8)",
                            "rgba(82,196,202,0.8)",
                            "rgba(225,228,233,0.8)",
                            "rgba(49,49,49,0.8)",
                            "rgba(76,124,243,0.8)",
                            "rgba(148,156,169,0.8)",
                            "rgba(43,205,114,0.8)",
                            "rgba(255,75,91,0.8)",
                            "rgba(250,199,81,0.8)",
                            "rgba(82,196,202,0.8)",
                            "rgba(225,228,233,0.8)",
                            "rgba(49,49,49,0.8)",
                            "rgba(76,124,243,0.8)",
                            "rgba(148,156,169,0.8)",
                            "rgba(43,205,114,0.8)",
                            "rgba(255,75,91,0.8)",
                            "rgba(250,199,81,0.8)",
                            "rgba(82,196,202,0.8)",
                            "rgba(225,228,233,0.8)",
                            "rgba(49,49,49,0.8)",
                            "rgba(76,124,243,0.8)",
                            "rgba(148,156,169,0.8)",
                            "rgba(43,205,114,0.8)",
                            "rgba(255,75,91,0.8)",
                            "rgba(250,199,81,0.8)",
                            "rgba(82,196,202,0.8)",
                            "rgba(225,228,233,0.8)",
                            "rgba(49,49,49,0.8)",
                            "rgba(76,124,243,0.8)",
                            "rgba(148,156,169,0.8)",
                            "rgba(43,205,114,0.8)",
                            "rgba(255,75,91,0.8)",
                            "rgba(250,199,81,0.8)",
                            "rgba(82,196,202,0.8)",
                            "rgba(225,228,233,0.8)",
                            "rgba(49,49,49,0.8)",
                            "rgba(76,124,243,0.8)",
                            "rgba(148,156,169,0.8)",
                            "rgba(43,205,114,0.8)",
                            "rgba(255,75,91,0.8)",
                            "rgba(250,199,81,0.8)",
                            "rgba(82,196,202,0.8)",
                            "rgba(225,228,233,0.8)",
                            "rgba(49,49,49,0.8)",
                            "rgba(76,124,243,0.8)",
                            "rgba(148,156,169,0.8)",
                            "rgba(43,205,114,0.8)",
                            "rgba(255,75,91,0.8)",
                            "rgba(250,199,81,0.8)",
                            "rgba(82,196,202,0.8)",
                            "rgba(225,228,233,0.8)",
                            "rgba(49,49,49,0.8)",
                            "rgba(76,124,243,0.8)",
                            "rgba(148,156,169,0.8)",
                            "rgba(43,205,114,0.8)",
                            "rgba(255,75,91,0.8)",
                            "rgba(250,199,81,0.8)",
                            "rgba(82,196,202,0.8)",
                            "rgba(225,228,233,0.8)",
                            "rgba(49,49,49,0.8)",
                            "rgba(76,124,243,0.8)",
                            "rgba(148,156,169,0.8)",
                            "rgba(43,205,114,0.8)",
                            "rgba(255,75,91,0.8)",
                            "rgba(250,199,81,0.8)",
                            "rgba(82,196,202,0.8)",
                            "rgba(225,228,233,0.8)",
                            "rgba(49,49,49,0.8)",
                            "rgba(76,124,243,0.8)",
                            "rgba(148,156,169,0.8)",
                            "rgba(43,205,114,0.8)",
                            "rgba(255,75,91,0.8)",
                            "rgba(250,199,81,0.8)",
                            "rgba(82,196,202,0.8)",
                            "rgba(225,228,233,0.8)",
                            "rgba(49,49,49,0.8)",
                            "rgba(76,124,243,0.8)",
                            "rgba(148,156,169,0.8)",
                            "rgba(43,205,114,0.8)",
                            "rgba(255,75,91,0.8)",
                            "rgba(250,199,81,0.8)",
                            "rgba(82,196,202,0.8)",
                            "rgba(225,228,233,0.8)",
                            "rgba(49,49,49,0.8)",
                            "rgba(76,124,243,0.8)",
                            "rgba(148,156,169,0.8)",
                            "rgba(43,205,114,0.8)",
                            "rgba(255,75,91,0.8)",
                            "rgba(250,199,81,0.8)",
                            "rgba(82,196,202,0.8)",
                            "rgba(225,228,233,0.8)",
                            "rgba(49,49,49,0.8)",
                            "rgba(76,124,243,0.8)",
                            "rgba(148,156,169,0.8)",
                            "rgba(43,205,114,0.8)",
                            "rgba(255,75,91,0.8)",
                            "rgba(250,199,81,0.8)",
                            "rgba(82,196,202,0.8)",
                            "rgba(225,228,233,0.8)",
                            "rgba(49,49,49,0.8)",
                            "rgba(76,124,243,0.8)",
                            "rgba(148,156,169,0.8)",
                            "rgba(43,205,114,0.8)",
                            "rgba(255,75,91,0.8)",
                            "rgba(250,199,81,0.8)",
                            "rgba(82,196,202,0.8)",
                            "rgba(225,228,233,0.8)",
                            "rgba(49,49,49,0.8)",
                            "rgba(76,124,243,0.8)",
                            "rgba(148,156,169,0.8)",
                            "rgba(43,205,114,0.8)",
                            "rgba(255,75,91,0.8)",
                            "rgba(250,199,81,0.8)",
                            "rgba(82,196,202,0.8)",
                            "rgba(225,228,233,0.8)",
                            "rgba(49,49,49,0.8)",
                            "rgba(76,124,243,0.8)",
                            "rgba(148,156,169,0.8)",
                            "rgba(43,205,114,0.8)",
                            "rgba(255,75,91,0.8)",
                            "rgba(250,199,81,0.8)",
                            "rgba(82,196,202,0.8)",
                            "rgba(225,228,233,0.8)",
                            "rgba(49,49,49,0.8)",
                            "rgba(76,124,243,0.8)",
                            "rgba(148,156,169,0.8)",
                            "rgba(43,205,114,0.8)",
                            "rgba(255,75,91,0.8)",
                            "rgba(250,199,81,0.8)",
                            "rgba(82,196,202,0.8)",
                            "rgba(225,228,233,0.8)",
                            "rgba(49,49,49,0.8)",
                            "rgba(76,124,243,0.8)",
                            "rgba(148,156,169,0.8)",
                            "rgba(43,205,114,0.8)"
                        ],
                        borderColor: [
                            "rgba(76,124,243,0.8)",
                            "rgba(148,156,169,0.8)",
                            "rgba(43,205,114,0.8)",
                            "rgba(255,75,91,0.8)",
                            "rgba(250,199,81,0.8)",
                            "rgba(82,196,202,0.8)",
                            "rgba(225,228,233,0.8)",
                            "rgba(49,49,49,0.8)",
                            "rgba(76,124,243,0.8)",
                            "rgba(148,156,169,0.8)",
                            "rgba(43,205,114,0.8)",
                            "rgba(255,75,91,0.8)",
                            "rgba(250,199,81,0.8)",
                            "rgba(82,196,202,0.8)",
                            "rgba(225,228,233,0.8)",
                            "rgba(49,49,49,0.8)",
                            "rgba(76,124,243,0.8)",
                            "rgba(148,156,169,0.8)",
                            "rgba(43,205,114,0.8)",
                            "rgba(255,75,91,0.8)",
                            "rgba(250,199,81,0.8)",
                            "rgba(82,196,202,0.8)",
                            "rgba(225,228,233,0.8)",
                            "rgba(49,49,49,0.8)",
                            "rgba(76,124,243,0.8)",
                            "rgba(148,156,169,0.8)",
                            "rgba(43,205,114,0.8)",
                            "rgba(255,75,91,0.8)",
                            "rgba(250,199,81,0.8)",
                            "rgba(82,196,202,0.8)",
                            "rgba(225,228,233,0.8)",
                            "rgba(49,49,49,0.8)",
                            "rgba(76,124,243,0.8)",
                            "rgba(148,156,169,0.8)",
                            "rgba(43,205,114,0.8)",
                            "rgba(255,75,91,0.8)",
                            "rgba(250,199,81,0.8)",
                            "rgba(82,196,202,0.8)",
                            "rgba(225,228,233,0.8)",
                            "rgba(49,49,49,0.8)",
                            "rgba(76,124,243,0.8)",
                            "rgba(148,156,169,0.8)",
                            "rgba(43,205,114,0.8)",
                            "rgba(255,75,91,0.8)",
                            "rgba(250,199,81,0.8)",
                            "rgba(82,196,202,0.8)",
                            "rgba(225,228,233,0.8)",
                            "rgba(49,49,49,0.8)",
                            "rgba(76,124,243,0.8)",
                            "rgba(148,156,169,0.8)",
                            "rgba(43,205,114,0.8)",
                            "rgba(255,75,91,0.8)",
                            "rgba(250,199,81,0.8)",
                            "rgba(82,196,202,0.8)",
                            "rgba(225,228,233,0.8)",
                            "rgba(49,49,49,0.8)",
                            "rgba(76,124,243,0.8)",
                            "rgba(148,156,169,0.8)",
                            "rgba(43,205,114,0.8)",
                            "rgba(255,75,91,0.8)",
                            "rgba(250,199,81,0.8)",
                            "rgba(82,196,202,0.8)",
                            "rgba(225,228,233,0.8)",
                            "rgba(49,49,49,0.8)",
                            "rgba(76,124,243,0.8)",
                            "rgba(148,156,169,0.8)",
                            "rgba(43,205,114,0.8)",
                            "rgba(255,75,91,0.8)",
                            "rgba(250,199,81,0.8)",
                            "rgba(82,196,202,0.8)",
                            "rgba(225,228,233,0.8)",
                            "rgba(49,49,49,0.8)",
                            "rgba(76,124,243,0.8)",
                            "rgba(148,156,169,0.8)",
                            "rgba(43,205,114,0.8)",
                            "rgba(255,75,91,0.8)",
                            "rgba(250,199,81,0.8)",
                            "rgba(82,196,202,0.8)",
                            "rgba(225,228,233,0.8)",
                            "rgba(49,49,49,0.8)",
                            "rgba(76,124,243,0.8)",
                            "rgba(148,156,169,0.8)",
                            "rgba(43,205,114,0.8)",
                            "rgba(255,75,91,0.8)",
                            "rgba(250,199,81,0.8)",
                            "rgba(82,196,202,0.8)",
                            "rgba(225,228,233,0.8)",
                            "rgba(49,49,49,0.8)",
                            "rgba(76,124,243,0.8)",
                            "rgba(148,156,169,0.8)",
                            "rgba(43,205,114,0.8)",
                            "rgba(255,75,91,0.8)",
                            "rgba(250,199,81,0.8)",
                            "rgba(82,196,202,0.8)",
                            "rgba(225,228,233,0.8)",
                            "rgba(49,49,49,0.8)",
                            "rgba(76,124,243,0.8)",
                            "rgba(148,156,169,0.8)",
                            "rgba(43,205,114,0.8)",
                            "rgba(255,75,91,0.8)",
                            "rgba(250,199,81,0.8)",
                            "rgba(82,196,202,0.8)",
                            "rgba(225,228,233,0.8)",
                            "rgba(49,49,49,0.8)",
                            "rgba(76,124,243,0.8)",
                            "rgba(148,156,169,0.8)",
                            "rgba(43,205,114,0.8)",
                            "rgba(255,75,91,0.8)",
                            "rgba(250,199,81,0.8)",
                            "rgba(82,196,202,0.8)",
                            "rgba(225,228,233,0.8)",
                            "rgba(49,49,49,0.8)",
                            "rgba(76,124,243,0.8)",
                            "rgba(148,156,169,0.8)",
                            "rgba(43,205,114,0.8)",
                            "rgba(255,75,91,0.8)",
                            "rgba(250,199,81,0.8)",
                            "rgba(82,196,202,0.8)",
                            "rgba(225,228,233,0.8)",
                            "rgba(49,49,49,0.8)",
                            "rgba(76,124,243,0.8)",
                            "rgba(148,156,169,0.8)",
                            "rgba(43,205,114,0.8)",
                            "rgba(255,75,91,0.8)",
                            "rgba(250,199,81,0.8)",
                            "rgba(82,196,202,0.8)",
                            "rgba(225,228,233,0.8)",
                            "rgba(49,49,49,0.8)",
                            "rgba(76,124,243,0.8)",
                            "rgba(148,156,169,0.8)",
                            "rgba(43,205,114,0.8)",
                            "rgba(255,75,91,0.8)",
                            "rgba(250,199,81,0.8)",
                            "rgba(82,196,202,0.8)",
                            "rgba(225,228,233,0.8)",
                            "rgba(49,49,49,0.8)",
                            "rgba(76,124,243,0.8)",
                            "rgba(148,156,169,0.8)",
                            "rgba(43,205,114,0.8)",
                            "rgba(255,75,91,0.8)",
                            "rgba(250,199,81,0.8)",
                            "rgba(82,196,202,0.8)",
                            "rgba(225,228,233,0.8)",
                            "rgba(49,49,49,0.8)",
                            "rgba(76,124,243,0.8)",
                            "rgba(148,156,169,0.8)",
                            "rgba(43,205,114,0.8)"
                        ],
                        borderWidth: 1,
                        hoverBackgroundColor: [
                            "rgba(76,124,243,1)",
                            "rgba(148,156,169,1)",
                            "rgba(43,205,114,1)",
                            "rgba(255,75,91,1)",
                            "rgba(250,199,81,1)",
                            "rgba(82,196,202,1)",
                            "rgba(225,228,233,1)",
                            "rgba(49,49,49,1)",
                            "rgba(76,124,243,1)",
                            "rgba(148,156,169,1)",
                            "rgba(43,205,114,1)",
                            "rgba(255,75,91,1)",
                            "rgba(250,199,81,1)",
                            "rgba(82,196,202,1)",
                            "rgba(225,228,233,1)",
                            "rgba(49,49,49,1)",
                            "rgba(76,124,243,1)",
                            "rgba(148,156,169,1)",
                            "rgba(43,205,114,1)",
                            "rgba(255,75,91,1)",
                            "rgba(250,199,81,1)",
                            "rgba(82,196,202,1)",
                            "rgba(225,228,233,1)",
                            "rgba(49,49,49,1)",
                            "rgba(76,124,243,1)",
                            "rgba(148,156,169,1)",
                            "rgba(43,205,114,1)",
                            "rgba(255,75,91,1)",
                            "rgba(250,199,81,1)",
                            "rgba(82,196,202,1)",
                            "rgba(225,228,233,1)",
                            "rgba(49,49,49,1)",
                            "rgba(76,124,243,1)",
                            "rgba(148,156,169,1)",
                            "rgba(43,205,114,1)",
                            "rgba(255,75,91,1)",
                            "rgba(250,199,81,1)",
                            "rgba(82,196,202,1)",
                            "rgba(225,228,233,1)",
                            "rgba(49,49,49,1)",
                            "rgba(76,124,243,1)",
                            "rgba(148,156,169,1)",
                            "rgba(43,205,114,1)",
                            "rgba(255,75,91,1)",
                            "rgba(250,199,81,1)",
                            "rgba(82,196,202,1)",
                            "rgba(225,228,233,1)",
                            "rgba(49,49,49,1)",
                            "rgba(76,124,243,1)",
                            "rgba(148,156,169,1)",
                            "rgba(43,205,114,1)",
                            "rgba(255,75,91,1)",
                            "rgba(250,199,81,1)",
                            "rgba(82,196,202,1)",
                            "rgba(225,228,233,1)",
                            "rgba(49,49,49,1)",
                            "rgba(76,124,243,1)",
                            "rgba(148,156,169,1)",
                            "rgba(43,205,114,1)",
                            "rgba(255,75,91,1)",
                            "rgba(250,199,81,1)",
                            "rgba(82,196,202,1)",
                            "rgba(225,228,233,1)",
                            "rgba(49,49,49,1)",
                            "rgba(76,124,243,1)",
                            "rgba(148,156,169,1)",
                            "rgba(43,205,114,1)",
                            "rgba(255,75,91,1)",
                            "rgba(250,199,81,1)",
                            "rgba(82,196,202,1)",
                            "rgba(225,228,233,1)",
                            "rgba(49,49,49,1)",
                            "rgba(76,124,243,1)",
                            "rgba(148,156,169,1)",
                            "rgba(43,205,114,1)",
                            "rgba(255,75,91,1)",
                            "rgba(250,199,81,1)",
                            "rgba(82,196,202,1)",
                            "rgba(225,228,233,1)",
                            "rgba(49,49,49,1)",
                            "rgba(76,124,243,1)",
                            "rgba(148,156,169,1)",
                            "rgba(43,205,114,1)",
                            "rgba(255,75,91,1)",
                            "rgba(250,199,81,1)",
                            "rgba(82,196,202,1)",
                            "rgba(225,228,233,1)",
                            "rgba(49,49,49,1)",
                            "rgba(76,124,243,1)",
                            "rgba(148,156,169,1)",
                            "rgba(43,205,114,1)",
                            "rgba(255,75,91,1)",
                            "rgba(250,199,81,1)",
                            "rgba(82,196,202,1)",
                            "rgba(225,228,233,1)",
                            "rgba(49,49,49,1)",
                            "rgba(76,124,243,1)",
                            "rgba(148,156,169,1)",
                            "rgba(43,205,114,1)",
                            "rgba(255,75,91,1)",
                            "rgba(250,199,81,1)",
                            "rgba(82,196,202,1)",
                            "rgba(225,228,233,1)",
                            "rgba(49,49,49,1)",
                            "rgba(76,124,243,1)",
                            "rgba(148,156,169,1)",
                            "rgba(43,205,114,1)",
                            "rgba(255,75,91,1)",
                            "rgba(250,199,81,1)",
                            "rgba(82,196,202,1)",
                            "rgba(225,228,233,1)",
                            "rgba(49,49,49,1)",
                            "rgba(76,124,243,1)",
                            "rgba(148,156,169,1)",
                            "rgba(43,205,114,1)",
                            "rgba(255,75,91,1)",
                            "rgba(250,199,81,1)",
                            "rgba(82,196,202,1)",
                            "rgba(225,228,233,1)",
                            "rgba(49,49,49,1)",
                            "rgba(76,124,243,1)",
                            "rgba(148,156,169,1)",
                            "rgba(43,205,114,1)",
                            "rgba(255,75,91,1)",
                            "rgba(250,199,81,1)",
                            "rgba(82,196,202,1)",
                            "rgba(225,228,233,1)",
                            "rgba(49,49,49,1)",
                            "rgba(76,124,243,1)",
                            "rgba(148,156,169,1)",
                            "rgba(43,205,114,1)",
                            "rgba(255,75,91,1)",
                            "rgba(250,199,81,1)",
                            "rgba(82,196,202,1)",
                            "rgba(225,228,233,1)",
                            "rgba(49,49,49,1)",
                            "rgba(76,124,243,1)",
                            "rgba(148,156,169,1)",
                            "rgba(43,205,114,1)",
                            "rgba(255,75,91,1)",
                            "rgba(250,199,81,1)",
                            "rgba(82,196,202,1)",
                            "rgba(225,228,233,1)",
                            "rgba(49,49,49,1)",
                            "rgba(76,124,243,1)",
                            "rgba(148,156,169,1)",
                            "rgba(43,205,114,1)"
                        ],
                        hoverBorderColor: [
                            "rgba(76,124,243,1)",
                            "rgba(148,156,169,1)",
                            "rgba(43,205,114,1)",
                            "rgba(255,75,91,1)",
                            "rgba(250,199,81,1)",
                            "rgba(82,196,202,1)",
                            "rgba(225,228,233,1)",
                            "rgba(49,49,49,1)",
                            "rgba(76,124,243,1)",
                            "rgba(148,156,169,1)",
                            "rgba(43,205,114,1)",
                            "rgba(255,75,91,1)",
                            "rgba(250,199,81,1)",
                            "rgba(82,196,202,1)",
                            "rgba(225,228,233,1)",
                            "rgba(49,49,49,1)",
                            "rgba(76,124,243,1)",
                            "rgba(148,156,169,1)",
                            "rgba(43,205,114,1)",
                            "rgba(255,75,91,1)",
                            "rgba(250,199,81,1)",
                            "rgba(82,196,202,1)",
                            "rgba(225,228,233,1)",
                            "rgba(49,49,49,1)",
                            "rgba(76,124,243,1)",
                            "rgba(148,156,169,1)",
                            "rgba(43,205,114,1)",
                            "rgba(255,75,91,1)",
                            "rgba(250,199,81,1)",
                            "rgba(82,196,202,1)",
                            "rgba(225,228,233,1)",
                            "rgba(49,49,49,1)",
                            "rgba(76,124,243,1)",
                            "rgba(148,156,169,1)",
                            "rgba(43,205,114,1)",
                            "rgba(255,75,91,1)",
                            "rgba(250,199,81,1)",
                            "rgba(82,196,202,1)",
                            "rgba(225,228,233,1)",
                            "rgba(49,49,49,1)",
                            "rgba(76,124,243,1)",
                            "rgba(148,156,169,1)",
                            "rgba(43,205,114,1)",
                            "rgba(255,75,91,1)",
                            "rgba(250,199,81,1)",
                            "rgba(82,196,202,1)",
                            "rgba(225,228,233,1)",
                            "rgba(49,49,49,1)",
                            "rgba(76,124,243,1)",
                            "rgba(148,156,169,1)",
                            "rgba(43,205,114,1)",
                            "rgba(255,75,91,1)",
                            "rgba(250,199,81,1)",
                            "rgba(82,196,202,1)",
                            "rgba(225,228,233,1)",
                            "rgba(49,49,49,1)",
                            "rgba(76,124,243,1)",
                            "rgba(148,156,169,1)",
                            "rgba(43,205,114,1)",
                            "rgba(255,75,91,1)",
                            "rgba(250,199,81,1)",
                            "rgba(82,196,202,1)",
                            "rgba(225,228,233,1)",
                            "rgba(49,49,49,1)",
                            "rgba(76,124,243,1)",
                            "rgba(148,156,169,1)",
                            "rgba(43,205,114,1)",
                            "rgba(255,75,91,1)",
                            "rgba(250,199,81,1)",
                            "rgba(82,196,202,1)",
                            "rgba(225,228,233,1)",
                            "rgba(49,49,49,1)",
                            "rgba(76,124,243,1)",
                            "rgba(148,156,169,1)",
                            "rgba(43,205,114,1)",
                            "rgba(255,75,91,1)",
                            "rgba(250,199,81,1)",
                            "rgba(82,196,202,1)",
                            "rgba(225,228,233,1)",
                            "rgba(49,49,49,1)",
                            "rgba(76,124,243,1)",
                            "rgba(148,156,169,1)",
                            "rgba(43,205,114,1)",
                            "rgba(255,75,91,1)",
                            "rgba(250,199,81,1)",
                            "rgba(82,196,202,1)",
                            "rgba(225,228,233,1)",
                            "rgba(49,49,49,1)",
                            "rgba(76,124,243,1)",
                            "rgba(148,156,169,1)",
                            "rgba(43,205,114,1)",
                            "rgba(255,75,91,1)",
                            "rgba(250,199,81,1)",
                            "rgba(82,196,202,1)",
                            "rgba(225,228,233,1)",
                            "rgba(49,49,49,1)",
                            "rgba(76,124,243,1)",
                            "rgba(148,156,169,1)",
                            "rgba(43,205,114,1)",
                            "rgba(255,75,91,1)",
                            "rgba(250,199,81,1)",
                            "rgba(82,196,202,1)",
                            "rgba(225,228,233,1)",
                            "rgba(49,49,49,1)",
                            "rgba(76,124,243,1)",
                            "rgba(148,156,169,1)",
                            "rgba(43,205,114,1)",
                            "rgba(255,75,91,1)",
                            "rgba(250,199,81,1)",
                            "rgba(82,196,202,1)",
                            "rgba(225,228,233,1)",
                            "rgba(49,49,49,1)",
                            "rgba(76,124,243,1)",
                            "rgba(148,156,169,1)",
                            "rgba(43,205,114,1)",
                            "rgba(255,75,91,1)",
                            "rgba(250,199,81,1)",
                            "rgba(82,196,202,1)",
                            "rgba(225,228,233,1)",
                            "rgba(49,49,49,1)",
                            "rgba(76,124,243,1)",
                            "rgba(148,156,169,1)",
                            "rgba(43,205,114,1)",
                            "rgba(255,75,91,1)",
                            "rgba(250,199,81,1)",
                            "rgba(82,196,202,1)",
                            "rgba(225,228,233,1)",
                            "rgba(49,49,49,1)",
                            "rgba(76,124,243,1)",
                            "rgba(148,156,169,1)",
                            "rgba(43,205,114,1)",
                            "rgba(255,75,91,1)",
                            "rgba(250,199,81,1)",
                            "rgba(82,196,202,1)",
                            "rgba(225,228,233,1)",
                            "rgba(49,49,49,1)",
                            "rgba(76,124,243,1)",
                            "rgba(148,156,169,1)",
                            "rgba(43,205,114,1)",
                            "rgba(255,75,91,1)",
                            "rgba(250,199,81,1)",
                            "rgba(82,196,202,1)",
                            "rgba(225,228,233,1)",
                            "rgba(49,49,49,1)",
                            "rgba(76,124,243,1)",
                            "rgba(148,156,169,1)",
                            "rgba(43,205,114,1)"
                        ],
                        hoverBorderWidth: 1,
                        radius: '50px'
                    }
                },
                scales: {
                    xAxes: [{       
                        gridLines: {
                            color: '#e1e4e9',
                            lineWidth: 1,
                            borderDash: [3]
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            color: '#e1e4e9',
                            lineWidth: 1,
                            borderDash: [3]
                        }
                    }]
                }
            }
        });
});