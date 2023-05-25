
  function add(){

    document.getElementById('op').value 

     =  parseInt (document.getElementById('ip1').value) + parseInt(document.getElementById('ip2').value);
  };

  function sub() {
    
    if(parseInt(document.getElementById ('ip1').value) >= parseInt(document.getElementById('ip2').value)){

     document.getElementById('op').value
     
    =  parseInt(document.getElementById ('ip1').value) - parseInt(document.getElementById('ip2').value);

    } else{
    document.getElementById('op').value
     
    =  parseInt(document.getElementById ('ip2').value) - parseInt(document.getElementById('ip1').value);
   
    };
    
  };


  function mul(){

    document.getElementById('op').value

     = parseInt(document.getElementById('ip1').value) * parseInt(document.getElementById('ip2').value);
  };


  function div(){

    if(parseInt(document.getElementById('ip1').value) >= parseInt(document.getElementById('ip2').value)){

     document.getElementById('op').value

    = parseInt(document.getElementById ('ip1').value) / parseInt(document.getElementById('ip2').value);
    } else{

    document.getElementById('op').value

     = parseInt(document.getElementById('ip2').value)  / parseInt(document.getElementById('ip1').value);
    };
  };