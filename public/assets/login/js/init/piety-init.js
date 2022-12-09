"use strict";
$(document).ready(function(){

    /* -----  Piety - Line Chart ----- */
    $(".xp-piety-line").peity("line", {
      width: 50,
      height: 30,  
      fill: ["rgba(76,124,243,0.5)"],
      stroke: "#4c7cf3"
    });

    /* -----  Piety - Updating Chart ----- */
    var updatingChart = $(".xp-piety-updating-chart").peity("line", { 
        width: 70,
        height: 30,
        fill: ["rgba(76,124,243,0.5)"],
        stroke: "#4c7cf3"
    })
    setInterval(function() {
      var random = Math.round(Math.random() * 10)
      var values = updatingChart.text().split(",")
      values.shift()
      values.push(random)

      updatingChart
        .text(values.join(","))
        .change()
    }, 1000)

    /* -----  Piety - Bar Chart ----- */
    $(".xp-piety-bar").peity("bar", {
      width: 50,
      height: 30,   
      padding: 0.2,  
      fill: ["#4c7cf3", "#e1e4e9", "#2bcd72"]
    });

	/* -----  Piety - Pie Chart ----- */
    $(".xp-piety-pie").peity("pie", {
      width: 40,  
      height: 40,
      fill: ["#4c7cf3", "#e1e4e9", "#2bcd72", "#ff4b5b"]
    });

    /* -----  Piety - Donut Chart ----- */    
    $(".xp-piety-donut").peity("donut", {
      width: 40,  
      height: 40,          
      fill: ["#4c7cf3", "#e1e4e9", "#2bcd72", "#ff4b5b"]
    });

    /* -----  Piety - Data Attributes Chart ----- */
    $(".xp-piety-data-attributes span").peity("donut");

});