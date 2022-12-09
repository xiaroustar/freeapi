$(function () {
    
    'use strict';

    $("#xp-range-slider-basic").ionRangeSlider();

    $("#xp-range-slider-min-max").ionRangeSlider({
        min: 100,
        max: 1000,
        from: 550
    });

    $("#xp-range-slider-prefix").ionRangeSlider({
        type: "double",
        grid: true,
        min: 0,
        max: 1000,
        from: 200,
        to: 800,
        prefix: "$"
    });

    $("#xp-range-slider-range").ionRangeSlider({
        type: "double",
        grid: true,
        min: -1000,
        max: 1000,
        from: -500,
        to: 500
    });

    $("#xp-range-slider-step").ionRangeSlider({
        type: "double",
        grid: true,
        min: -1000,
        max: 1000,
        from: -500,
        to: 500,
        step: 250
    });

    $("#xp-range-slider-fractional-step").ionRangeSlider({
        type: "double",
        grid: true,
        min: -12.8,
        max: 12.8,
        from: -3.2,
        to: 3.2,
        step: 0.1
    });

    $("#xp-range-slider-own-numbers").ionRangeSlider({
        type: "double",
        grid: true,
        from: 1,
        to: 5,
        values: [0, 10, 100, 1000, 10000, 100000, 1000000]
    });

    $("#xp-range-slider-string-value").ionRangeSlider({
        grid: true,
        from: 5,
        values: [
            "zero", "one",
            "two", "three",
            "four", "five",
            "six", "seven",
            "eight", "nine",
            "ten"
        ]
    });

    $("#xp-range-slider-no-prettify").ionRangeSlider({
        grid: true,
        min: 1000,
        max: 1000000,
        from: 100000,
        step: 1000,
        prettify_enabled: false
    });

    $("#xp-range-slider-prettify").ionRangeSlider({
        grid: true,
        min: 1000,
        max: 1000000,
        from: 200000,
        step: 1000,
        prettify_enabled: true
    });

    $("#xp-range-slider-seperator").ionRangeSlider({
        grid: true,
        min: 1000,
        max: 1000000,
        from: 300000,
        step: 1000,
        prettify_enabled: true,
        prettify_separator: "."
    });

    $("#xp-range-slider-own-prettify-function").ionRangeSlider({
        grid: true,
        min: 1000,
        max: 1000000,
        from: 400000,
        step: 1000,
        prettify_enabled: true,
        prettify: function (num) {
            return (Math.random() * num).toFixed(0);
        }
    });

    $("#xp-range-slider-postfixes").ionRangeSlider({
        type: "single",
        grid: true,
        min: -90,
        max: 90,
        from: 0,
        postfix: "°"
    });

    $("#xp-range-slider-max-postfixes").ionRangeSlider({
        grid: true,
        min: 18,
        max: 70,
        from: 30,
        prefix: "Age ",
        max_postfix: "+"
    });

    $("#xp-range-slider-both-decoration").ionRangeSlider({
        type: "double",
        min: 100,
        max: 200,
        from: 145,
        to: 155,
        prefix: "Weight: ",
        postfix: " million pounds",
        decorate_both: true
    });

    $("#xp-range-slider-remove-decoration").ionRangeSlider({
        type: "double",
        min: 100,
        max: 200,
        from: 145,
        to: 155,
        prefix: "Weight: ",
        postfix: " million pounds",
        decorate_both: false
    });

    $("#xp-range-slider-own-value-separator").ionRangeSlider({
        type: "double",
        min: 100,
        max: 200,
        from: 148,
        to: 152,
        prefix: "Weight: ",
        postfix: " million pounds",
        values_separator: " → "
    });     

    $("#xp-range-slider-value-separator-to").ionRangeSlider({
        type: "double",
        min: 100,
        max: 200,
        from: 148,
        to: 152,
        prefix: "Range: ",
        postfix: " light years",
        decorate_both: false,
        values_separator: " to "
    });

    $("#xp-range-slider-hide-visual-details").ionRangeSlider({
        type: "double",
        min: 1000,
        max: 2000,
        from: 1200,
        to: 1800,
        hide_min_max: true,
        hide_from_to: true,
        grid: false
    });

    $("#xp-range-slider-hide-any-detail").ionRangeSlider({
        type: "double",
        min: 1000,
        max: 2000,
        from: 1200,
        to: 1800,
        hide_min_max: true,
        hide_from_to: true,
        grid: true
    });

    $("#xp-range-slider-hide-from-to-details").ionRangeSlider({
        type: "double",
        min: 1000,
        max: 2000,
        from: 1200,
        to: 1800,
        hide_min_max: false,
        hide_from_to: true,
        grid: false
    });

    $("#xp-range-slider-hide-min-max-grid-details").ionRangeSlider({
        type: "double",
        min: 1000,
        max: 2000,
        from: 1200,
        to: 1800,
        hide_min_max: true,
        hide_from_to: false,
        grid: false
    });
        
});