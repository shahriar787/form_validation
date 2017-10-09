      function checkValidation(){
		  
		  var username = document.getElementById("username").value;
		  var password = document.getElementById("password").value;
		  
		  var error_flag = 0;
		  
		  if(username == null || username == ""){
			  document.getElementById("username_error").innerHTML="Please insert your username";
			  error_flag = 1;
		  }else{
			  
			  document.getElementById("username_error").innerHTML = "";
		  };
		  if(password == null || password == ""){
			  document.getElementById("password_error").innerHTML="Please insert your password";
			  error_flag = 1;
		  }else{
			  
			  document.getElementById("password_error").innerHTML = "";
		  };
		  if(error_flag==0){
			  document.getElementById("result").innerHTML = "Username: "+username+"<br/>"+"Password: "+password;
			  if(username=="admin" && password=="admin"){
				  location.href="https://www.google.com";
			  };
		  };
		  
	  };