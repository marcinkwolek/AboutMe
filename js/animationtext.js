$(document).ready(function () {



    var text = document.getElementById('border');

    var names = ['Welcome', 'Junior Front-End Developer', 'Marcin Kwolek', ' Junior Programmer'];
    var stringToType = '';
    var speed = 200;
    var numberOfCurrentWord = 0;
    var i = 0;
    var string = new Array();
    var remove = false;

    function typing() {

        stringToType = names[numberOfCurrentWord];

        if (remove == false) {
            if (i <= stringToType.length) {
                speed = 200;
                string.push(stringToType[i]);
                text.innerHTML = string.join('');
                i++;
                setTimeout(typing, speed);
            } else {
                remove = true;
                setTimeout(typing, speed);
            }
        } else if (remove = true) {
            speed = 80;
            string.pop();
            i = 0;
            if (string.length == 0) {
                remove = false;

                if (numberOfCurrentWord < 2)
                    numberOfCurrentWord++;
                else
                    numberOfCurrentWord = 0;
            }
            setTimeout(typing, speed);
        }

        text.innerHTML = string.join('');
    }
    typing();
});

