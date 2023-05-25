function result(){

    if(parseInt(document.getElementById('in1').value) && parseInt(document.getElementById('in2').value)){


        if(document.getElementById('element').value === '+'){

            document.getElementById('output').value
    
            =  parseInt(document.getElementById('in1').value)  +  parseInt(document.getElementById('in2').value);
        }
    
        if(document.getElementById('element').value === '-'){
    
    
            if(parseInt(document.getElementById('in1').value) >= parseInt(document.getElementById('in2').value)){
    
                document.getElementById('output').value
    
            =  parseInt(document.getElementById('in1').value)  -  parseInt(document.getElementById('in2').value);
    
            } else{
    
                document.getElementById('output').value
    
            =  parseInt(document.getElementById('in2').value)  -  parseInt(document.getElementById('in1').value);
            }
            
        }
    
        if(document.getElementById('element').value === '*'){
    
            document.getElementById('output').value
    
            =  parseInt(document.getElementById('in1').value) * parseInt(document.getElementById('in2').value);
        }
    
        if(document.getElementById('element').value === '/'){
    
            if( parseInt(document.getElementById('in1').value)  >= parseInt(document.getElementById('in2').value)){
    
                document.getElementById('output').value
    
                =  parseInt(document.getElementById('in1').value) / parseInt(document.getElementById('in2').value);
    
            } else{
    
                document.getElementById('output').value 
    
                =  parseInt(document.getElementById('in2').value) / parseInt(document.getElementById('in1').value);
            }
        }
    
    } else{

        alert("Please  enter both values!");
    }

    };