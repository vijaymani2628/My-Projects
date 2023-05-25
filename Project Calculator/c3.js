function getdata(data) {

var Enter1 = parseInt(document.getElementById('enter1').value);

var Enter2 = parseInt(document.getElementById('enter2').value);

var Element;

switch (data){

case add :
       Element = Enter1 + Enter2;
break;

case sub :

if(Enter1 > Enter2) {

    Element = Enter1 - Enter2 

} else {

    Element = Enter2 - Enter1 
}
       
break;

case mul :

Element = Enter1 * Enter2;

break;

case div : 

if(Enter1 > Enter2) {

    Element = Enter1 / Enter2;

} else {

    Element = Enter2 / Enter1;

}
break;
}

 document.getElementById('answer').value = Element;

}



