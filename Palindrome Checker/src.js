const check = (() => {
    var input = document.getElementById("inp1").value;
    var data = "";

    if(input == "") {
        document.getElementById("h2").innerHTML = "Please enter the word";
    }

for(var i=input.length;i>=1;i--) {

    let value = input.toUpperCase()

        data = data + value[i-1];

        if(data === value) {
            document.getElementById("h2").innerHTML = `${data} => is Palindrome`;
        } else {
            document.getElementById("h2").innerHTML = `${data} => is not Palidrome`;
        }

}

});

