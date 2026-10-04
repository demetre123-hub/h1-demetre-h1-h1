```javascript
// კალათა

let cart = [];


// პროდუქტში დამატება

function addToCart(name, price) {

    const existingProduct =
        cart.find(item => item.name === name);


    if (existingProduct) {

        existingProduct.quantity++;

    } else {

        cart.push({
            name: name,
            price: price,
            quantity: 1
        });

    }


    updateCart();

    openCart();
}


// კალათის განახლება

function updateCart() {

    const cartItems =
        document.getElementById("cart-items");

    const cartCount =
        document.getElementById("cart-count");

    const cartTotal =
        document.getElementById("cart-total");


    cartItems.innerHTML = "";


    if (cart.length === 0) {

        cartItems.innerHTML =
            "<p>კალათა ცარიელია.</p>";

    }


    let total = 0;

    let count = 0;


    cart.forEach((item, index) => {

        total +=
            item.price * item.quantity;

        count += item.quantity;


        const element =
            document.createElement("div");

        element.className =
            "cart-item";


        element.innerHTML = `

            <div>
                <strong>
                    ${item.name}
                </strong>

                <br>

                ${item.price} ₾ ×
                ${item.quantity}
            </div>

            <button
                onclick="removeFromCart(${index})">
                წაშლა
            </button>

        `;


        cartItems.appendChild(element);

    });


    cartCount.textContent = count;

    cartTotal.textContent = total;

}


// პროდუქტის წაშლა

function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();

}


// კალათის გახსნა

function openCart() {

    document
        .getElementById("cart")
        .classList.add("active");

}


// კალათის დახურვა

function closeCart() {

    document
        .getElementById("cart")
        .classList.remove("active");

}


// ფორმების სექციაზე გადასვლა

function scrollToProducts() {

    document
        .getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// შეკვეთა

function checkout() {

    if (cart.length === 0) {

        alert(
            "კალათა ცარიელია!"
        );

        return;
    }


    alert(
        "მადლობა შეკვეთისთვის! 🇬🇪\n\n" +
        "შეკვეთის სისტემა დემო რეჟიმშია."
    );

}
```