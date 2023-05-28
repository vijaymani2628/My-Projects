const btn = document.getElementById("btn");

btn.addEventListener("click" , (() => {

    var value = document.getElementById("value").value;

    var factorial = 1;

        for(var i = 2;i<=value;i++) {
    
            factorial = factorial * i
           
        }
    
        if(value == 0) {
            document.getElementById("h2").innerHTML = `Can't find the Factorial`;
        } else if (value == 1) {
            document.getElementById("h2").innerHTML = `${value}'s Factorial always can be ${value}`;
        } else {
            document.getElementById("h2").innerHTML = `${value} Factorial is ${factorial}`;
        }

})

);