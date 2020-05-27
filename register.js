
function login() {
    var request = new XMLHttpRequest();
    request.open('GET', 'http://localhost:3000/users', true);

    var inputUsername = document.getElementById('username').value;
    var inputPassword = document.getElementById('password').value;

    request.onload = function () {
        var data = JSON.parse(this.response);

        data.forEach(user => {
            if(user.name === inputUsername && user.password === inputPassword){
                location.replace('test.html')
            }

            else{
                console.log('no')
            }

        });
    }
    request.send();
}
