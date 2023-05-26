const check = (() => {
    var input = document.getElementById("inp1").value;
    var data = "";

    input.toUpperCase();

    for(var i=input.length;i>=1;i--) {

        data = data + input[i-1];

    }

    if(data == input) {
        document.getElementById("h2").innerHTML = "This word is Palindrome";
    } else {
        document.getElementById("h2").innerHTML = "This word is not Palindrome";
    }

});

