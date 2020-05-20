function submitToServer(){
	var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
    var theUrl = "http://localhost:3000/users";
	
    var name = document.getElementById("fName").value;
    var mail = document.getElementById("fMail").value;
	var password = document.getElementById("fPassword").value;
	
	xmlhttp.open("POST", theUrl);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	xmlhttp.send(JSON.stringify({
    "name": name,
    "mail": mail,
    "password": password}));
}

