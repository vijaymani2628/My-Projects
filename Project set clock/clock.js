var intervalInstance ;

var count = 1;

function  start () {

    intervalInstance  = setInterval(function (){document.getElementById('para').innerHTML = count;;
count++;

},1000 );
};

function stop() {

    clearInterval(intervalInstance);
};

function reset () {

    clearInterval(intervalInstance);

    count = 1;
}

