function getoutput (id) {

    if(document.getElementById("inp1").value && document.getElementById("inp2").value) {

        if( id === "add") {

            document.getElementById("data").value
        
            =  parseInt(document.getElementById("inp1").value) + parseInt(document.getElementById("inp2").value);
        };
        
        if( id === "sub") {
        
            if(parseInt(document.getElementById("inp1").value) > parseInt(document.getElementById("inp2").value)) {
        
                document.getElementById("data").value
        
            =  parseInt(document.getElementById("inp1").value) - parseInt(document.getElementById("inp2").value);
        } else{
        
            document.getElementById("data").value
        
            = parseInt(document.getElementById("inp2").value)  - parseInt(document.getElementById("inp1").value);
        };
          };
        
        
        if( id === "mul") {
        
            document.getElementById("data").value
        
            =  parseInt(document.getElementById("inp1").value) * parseInt(document.getElementById("inp2").value);
        };
        
        if( id === "div") {
        
            if(parseInt(document.getElementById("inp1").value) > parseInt(document.getElementById("inp2").value)){
        
                document.getElementById("data").value
        
            =  parseInt(document.getElementById("inp1").value) / parseInt(document.getElementById("inp2").value);
        
            } else{
        
                document.getElementById("data").value
        
            =  parseInt(document.getElementById("inp2").value) / parseInt(document.getElementById("inp1").value);
        
            };
    
        };
        
    } else {

        alert("Please Enter Both Values!");
    }
};