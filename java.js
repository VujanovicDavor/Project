

function CheckUser(name, password){
    
}

function Login(username, password){
    var data = document.getJSON("http://localhost:3000/users");

    console.log(data[1]);
    if(username === saveedUsername.name && data[0] === password)
    {
        console.log('yeah');
        
    }
}

function Write(){
    console.log('yeah');
}