const btn = document.getElementById("btn");
const cart = document.getElementById("cart");
const products = document.getElementById("products");

const render = () => {
    const api = fetch("https://fakestoreapi.com/products");

    api 
        .then(res => res.json())
        .then(res => {
            for (let i = 0; i < res.length; i++) {
                products.innerHTML += `
                <div id="product">
                    <h1>${res[i].title}</h1>
                    <br>
                    <img src="${res[i].image}" alt="img">
                    <br>
                    <p>Price: ${res[i].price}</p>
                    <br>
                    <p>${res[i].description}</p>
                    <br>
                    <p>Category: ${res[i].category}</p>
                    <br>
                    <button class="addCart">Add to cart</button>
                </div>
            `
            const addCart = document.getElementsByClassName("addCart");
    
            addCart.onclick = cart.innerHTML += `<li>${res[i].title}</li>`

            btn.onclick = cart.innerHTML = "";
            }
        })
        .catch(err => console.error(`Error: ${err}`))
}

document.addEventListener("DOMContentLoaded",(e) => {
    e.preventDefault();

    render();
})