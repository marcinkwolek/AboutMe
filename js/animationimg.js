$(document).ready(function () {
    setInterval(rotate, 50)

});
var counter = 0;

function rotate() {
    var $this = $('.rotate');

    if (counter !== -360) {
        counter -= 1;
        $this.css({
            MozTransform: 'rotate(-' + -counter + 'deg)',
            WebkitTransform: 'rotate(' + -counter + 'deg)',
            transform: 'rotate(' + -counter + 'deg)'
        })} else {
            counter = 0;
        }


}

