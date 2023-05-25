    var v1 = document.getElementById("fname"); var v2 = document.getElementById("lname"); var v3 = document.getElementById("password");
    var v4 = document.getElementById("dob"); var btn = document.getElementById("submit"); var formno = document.getElementById("formno");
    var edit = document.getElementById("edit"); var arr = [];
    
    btn.addEventListener("click", click);

    function click(obj) {

    if (!v1.value && !v2.value && !v3.value && !v4.value) { 
         alert("Please enter the First Name , Last Name , Password , and Date Of Birth ");

    } else if (v1.value && !v2.value && !v3.value && !v4.value) {alert("Please enter Last Name, Password , and Date Of Birth");
       
    } else if (!v1.value && v2.value && !v3.value && !v4.value ) {alert("Please enter First Name , Password , and Date Of Birth");
       
    } else if (!v1.value && !v2.value && v3.value && !v4.value) {alert("Please enter   First Name , Last Name and Date Of Birth");
        
    } else if (!v1.value && !v2.value && !v3.value && v4.value) {alert("Please enter  First Name , Last Name and Password ");
       
     } else if (v1.value && v2.value && v3.value && !v4.value) {alert("Please enter Date of Birth");
        
     }  else if (v1.value && v2.value && !v3.value && v4.value) {alert("Please enter Password");
       
     }  else if (v1.value && !v2.value && v3.value && v4.value) {alert("Please enter Last Name");
        
     } else if (!v1.value && v2.value && v3.value && v4.value) {alert("Please enter First Name");
       
     }  else if (v1.value && v2.value && !v3.value && !v4.value) {alert("Please enter Password and Data of Birth ");
        
     }  else if (!v1.value && !v2.value && v3.value && v4.value) {alert("Please enter First Name and Last Name ");
        
     }  else if (v1.value && !v2.value && v3.value && !v4.value) {alert("Please enter Last Name and Data of Birth ");
        
     }  else if (!v1.value && v2.value && !v3.value && v4.value) {alert("Please enter  First Name and Password");

     }  else if (v1.value && !v2.value && !v3.value && v4.value) {alert("Please enter Last Name and Password");

     }  else if (v1.value && v2.value && v3.value && !v4.value) {alert("Please enter Date of Birth");
        
     }  else if (!v1.value && v2.value && v3.value && !v4.value) {alert("Please enter First Name and Data of Birth");   };
        
   
    var obj = { fname: v1.value, lname: v2.value, password: v3.value, dob: v4.value };

    if (v1.value && v2.value && v3.value && v4.value) {
        if (formno.value) {
            arr[formno.value -1] = obj
        } else {  arr.push(obj) ; }  }  else { }

        console.log(arr);

    edit.addEventListener("click", click2);

    function click2(obj) {

        if( obj = arr[formno.value -1 ]) {v1.value = obj.fname; v2.value = obj.lname; v3.value = obj.password; v4.value = obj.dob;}

        else { alert("Invalid Form No") } };
          
        v1.value = ""; v2.value = "";  v3.value = ""; v4.value = ""; formno.value = "";  };   
 
    /// Clear
    function Reset() {  v1.value = ""; v2.value = "";  v3.value = ""; v4.value = ""; formno.value = "";   };

   
  
  











