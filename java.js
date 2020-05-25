

function CheckUser(name, password){
    
}

function Login(username, password){
    var data = document.getJSON("http://localhost:3000/users");
    var username = document.getElementById('username').valeue;
    var password = document.getElementById('password').value;
}

function Write(){
    
}

function card(){

}

function loadProduct(){

    var request = newXHTMLRequest();
    const products = document.getElementById('Nike');
    var container = document.getElementById('div');
    products.appendChild(container);

    request.open('GET', 'http://localhost:3000/products')
    request.onload = funtion()
    {
        var card;
        var data = JSON.parse(this.response);

        for(var i = 0; i < data.length; i++)
        {
            card = document.createElement('div');
            card.setAttribute('class', 'card');

            var prodimg = document.createElement('img');
            prodimg.src = data[i].imagename;

            var prdctname = document.createElement('h1');
            prdctname.textContent = data[i].productname;

            var prize = document.createElement('p');
            prize.setAttribute('class', 'prize');
            prize.textContent = data[i].productprize;

            var button = document.createElement('button');
            button.textContent = "Add To Cart";

            container.appendChild(card);
            card.appendChild(img);
            card.appendChild(prdctname);
            card.appendChild(prize);
            card.appendChild(button);

            var abstand = document.createElement('br');
            container.appendChild(abstand);
        }
    }
request.send();
}