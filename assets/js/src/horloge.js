/**
 * Created by guillaumesoullard on 09/01/2017.
 */
var clock;

$(document).ready(function() {
    console.log('coucou');
    clock = $('.clock').FlipClock({
        clockFace: 'TwentyFourHourClock',
        showSeconds: false
    });
});