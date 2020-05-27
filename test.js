function add() {

    var request = new XMLHttpRequest();
    var products = document.getElementById('prods').getElementsByTagName('tbody')[0];
    var data;
    request.open('GET', 'http://localhost:3000/products', true);
    request.onload = function () 
    {
        if (request.status < 200 || request.status > 400) { console.log("error: connection failed"); return; }
        var card;
        var trow;
        data = JSON.parse(this.response);
        var counter = 0;

        for (var i = 0; i < data.length; i++) {
            counter++;

            if (counter === 1) {
                trow = products.insertRow();
            }

            var tcell = trow.insertCell(counter - 1);

            card = document.createElement('div');
            card.setAttribute('class', 'card h-100');
            card.style = "width:330";

            var prodimg = document.createElement('img');
            prodimg.src = data[i].img;
            prodimg.setAttribute('class', 'card-img-top');

            var cardBody = document.createElement('div');
            cardBody.setAttribute('class', 'card-body');

            var prdctname = document.createElement('h5');
            prdctname.setAttribute('class', 'card-title');
            prdctname.textContent = data[i].productName;
            prdctname.id = data[i].id;

            var prize = document.createElement('p');
            prize.setAttribute('class', 'card-text');
            prize.textContent = data[i].price + ",-";

            var button = document.createElement('button');
            button.setAttribute('class', 'btn-add');
            button.textContent = "Add To Cart";
            button.onclick = searchInShopCart(data, i);
            button.id = data[i].id;

            tcell.appendChild(card);
            card.appendChild(prodimg);
            card.appendChild(cardBody);
            cardBody.appendChild(prdctname);
            cardBody.appendChild(prize);
            cardBody.appendChild(button);
        }
    }
    request.send();
}

function searchInShopCart(data, id) {

    var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
    var theUrl = "http://localhost:3000/cart";

    xmlhttp.open("POST", theUrl);

    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send(JSON.stringify({

        "productName": data[id].productName,
        "price": data[id].price,
    }));

}

add();
