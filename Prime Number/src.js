/* 

=>  Prime number  is a positive integer that is only divisible by 

1 and itself. For example 2,3,5,7,11 are the first few Prime Numbers.m 

*/

const prime = (() => {

    var input = document.getElementById("ip1").value;

    if(input == 1 || input == 0) {
        return document.getElementById("h2").innerHTML = "Can't find the Prime";
    }

        for(var i=2;i<input;i++) {
            if(input%i === 0) {
                return document.getElementById("h2").innerHTML = "This is not a Prime";
            } 
        }
            return document.getElementById("h2").innerHTML = "This is Prime";
});

const remove = (() => {
    document.getElementById("h2").innerHTML = "";
    document.getElementById("ip1").value = "";
});























