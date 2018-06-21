(function($){
	// LOGIN
	$("#btn").click(function(){
		var indexLogin = $("#indexLogin").val(),
			indexPass = $("#indexPass").val();
		console.log(indexLogin, indexPass);

		var settings = {
		  "async": true,
		  "crossDomain": true,
		  "url": "http://localhost:8080/auth/login",
		  "method": "POST",
		  "headers": {
		    "content-type": "application/json",
		    "cache-control": "no-cache",
		  },
		  "processData": false,
		  "data": "{\"login\":\""+indexLogin+"\",\"password\":\""+indexPass+"\"}"
		}

		$.ajax(settings).done(function (response) {
				alert("success");
				window.location.href='file:///C:/Users/Jojo/Desktop/Skola/Web.Techn/projectTiposWeb-master/html/login.html';
		  	console.log(response);
		}).fail(function(data){
			alert("fail");
			console.log(data);
		});
	});


	// REGISTRATION
	$("#reset").click(function(){
		$("input").val("");
		$(".error").text("");
	});


	$("#sent").click(function(){
		var firstName = $("#firstName").val(),
			lastName = $("#lastName").val(),
			email = $("#email").val(),
			login = $("#login").val(),
			password = $("#password").val();

		var settings = {
		  "async": true,
		  "crossDomain": true,
		  "url": "http://localhost:8080/auth/reg",
		  "method": "POST",
		  "headers": {
		    "content-type": "application/json",
		    "cache-control": "no-cache",
		  },
		  "processData": false,
		  "data": "{\n\"firstname\":\""+firstName+"\",\n\"lastname\":\""+lastName+"\",\n\"email\":\""+email+"\",\n\"login\":\""+login+"\",\n\"password\":\""+password+"\"\n}"
		}

		$.ajax(settings).done(function (response) {
	  	    alert("You have successfully registered!");
			window.location.href ='../index.html';

		}).fail(function(data){
			alert("User or email address already exists!");
		});
		
	});

})(jQuery);