function calculator(){
    const v1 = parseInt(document.getElementById('v1').value);
    const v2 = parseInt(document.getElementById('v2').value );
    const symbol = document.getElementById('output').value ;

    if (symbol === '+'){

        document.getElementById('result').value = v1 + v2;
    };

    if (symbol === '-'){

        if(v1 > v2) {

            document.getElementById('result').value = v1 - v2;
        } else {

            document.getElementById('result').value = v2 - v1;
        }
        
    } 

    if (symbol === '*'){

        document.getElementById('result').value = v1 * v2;
    };

    if (symbol === '/'){

        if(v1>v2) {

            document.getElementById('result').value = v1 / v2;

        } else {

            document.getElementById('result').value = v2 / v1;
        }
        
    } 

    if (symbol  === '%'){
        
        document.getElementById('result').value = v1 % v2;
    };
}

