$(document).ready(function () {
    var animation_timeline = anime.timeline({
        easing: 'easeInOutQuad',
        duration: 500
    });
    $('#pads > div').click(function (e) { 
        e.preventDefault();
        var pad = $(this);
        var audio = pad[0].children[0]
        audio.currentTime = 0
        audio.play();
        //make pad look like it was clicked
        pad.css('border', '3px solid black');
        setTimeout(function(){ 
            pad.css('border', '0px solid black');
        }, 100);
        //change background color
        var colour = pad.css('background');
        // $('body').css('background', colour);
        animation_timeline.add(
            {
                targets: 'body',
                background: colour
            }, 
        0)
    });
});