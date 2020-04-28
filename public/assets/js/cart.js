// if (document.readyState == 'loading') {
//   document.addEventListener('DOMContentLoaded', ready)
// } else {
//   ready()
// }
// function ready() {
//   var removeCartItemsButtons = document.getElementsByClassName('btn-danger');
//   console.log(removeCartItemsButtons);
//   for (var i = 0; i < removeCartItemsButtons.length; i++) {
//     var button = removeCartItemsButtons[i]
//     button.addEventListener('click', removeCartItem);
//   }
//   var quantityInputs = document.getElementsByClassName('cart-quantity-input');
//     for (var i = 0; i < quantityInputs.length; i++) {
//       var input = quantityInputs[i];
//       input.addEventListener('change', quantityChanged);
//   }


//   var addToCartButtons = document.getElementsByClassName('shop-item-button')
//   for (var i = 0; i < addToCartButtons.length; i++) {
//     var button = addToCartButtons[i];
//     button.addEventListener('click', addToCartClicked);
//   }
// }

// function removeCartItem() {
//   var buttonClicked = event.target
//   buttonClicked.parentElement.parentElement.remove();
//   updateCartTotal()
// }

// function quantityChanged(event) {
//   var input = event.target
//   if (isNaN(input.value) || input.value <= 0) {
//     input.value = 1
//   }
//   updateCartTotal()
// }

// function addToCartClicked(event) {
//   var button = event.target
//   var shopItem = button.parentElement.parentElement.parentElement.parentElement
//   var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
//   var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
//   var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
//   console.log(title, price, imageSrc);
//   addItemToCart(title, price, imageSrc)
// }

// function addItemToCart(title, price, imageSrc) {
//   var cartRow = document.createElement('div')
//   cartRow.innerText = title
//   var cartItems = document.getElementsByClassName('cart-items')[0]
//   cartItems.append(cartRow)
// }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
// function updateCartTotal () {
//   var cartItemContainer = document.getElementsByClassName('cart-items')[0]
//   var cartRows = cartItemContainer.getElementsByClassName('cart-row')
//   var total = 0;
//   for (var i = 0; i < cartRows.length; i++) {
//     var cartRow = cartRows[i]
//     var priceElement = cartRow.getElementsByClassName('cart-price')[0]
//     var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
//     var price = parseFloat(priceElement.innerText.replace('$', ''))
//     var quantity = quantityElement.value
//     total = total + (price * quantity);
//   }
//   total = Math.round(total * 100) / 100; 
//   document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
// } 

let carts = document.querySelectorAll('.add-cart');

products = [
  {
    name: 'Zoodles Arrabbiata',
    tag: 'zoodles-arrabbiata',
    price: 10.95,
    inCart: 0
  },
  {
    name: 'Pasta Francaise',
    tag: 'pasta-francaise',
    price: 10.95,
    inCart: 0
  },
  {
    name: 'Super Food Pasta',
    tag: 'super-food-pasta',
    price: 10.95,
    inCart: 0
  },
  {
    name: 'What The Kale',
    tag: 'what-the-kale',
    price: 11.95,
    inCart: 0
  }
]

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener('click', () => {
    cartNumbers(products[i]);
    totalCost(products[i]);
  });
}

// var addToCartClick = document.getElementsByClassName('shop-item-cart') 
//   for (var i = 0; i < addToCartClick.length; i++) {
//       var click = addToCartClick[i]
//       click.addEventListener('click', addToCartClicked)
//   }


// function addToCartClicked(event) {
//   var click = event.target
//   var shopItem = click.parentElement.parentElement
//   var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
//   console.log(title)
// }

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers');
  if (productNumbers) {
    document.querySelector('.cart span').textContent = productNumbers;
  } 
}

function cartNumbers(product) {
  let productNumbers = localStorage.getItem('cartNumbers');

  productNumbers = parseInt(productNumbers);


  if (productNumbers) {
    localStorage.setItem('cartNumbers', productNumbers + 1);
    document.querySelector('.cart span').textContent = productNumbers + 1
    } else {
      localStorage.setItem('cartNumbers', 1);
      document.querySelector('.cart span').textContent = 1
    }
    setItems(product);
}

function setItems(product){
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);
  if(cartItems != null) {

    if(cartItems[product.name] == undefined) {
      cartItems = {
        ...cartItems,
        [product.name]: product 
      }
    }
    cartItems[product.name].inCart += 1
  } else {
      product.inCart = 1;
      cartItems = {
        [product.name]: product
      }
  }
  
  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
  
  let cartCost = localStorage.getItem('totalCost');



  if(cartCost != null) {
    cartCost = parseFloat(cartCost);
    localStorage.setItem('totalCost', (cartCost + product.price).toFixed(2));
  } else {
    localStorage.setItem('totalCost', product.price);
  }
  
}

function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems)
  let productContainer = document.querySelector('.products');
  let cartCost = localStorage.getItem('totalCost');


  if(cartItems && productContainer ) {
    productContainer.innerHTML = '';
    Object.values(cartItems).map(item => {
      productContainer.innerHTML += `
      <div class="product">
        <ion-icon name="close-circle"></ion-icon>
        <img class="image" src="./assets/images/${item.tag}.jpg">
        <span>${item.name}</span>
         </div>
        <div class="price">${item.price}</div>
        <div class="quantity">
        <ion-icon name="caret-back-outline" id="subtract"></ion-icon>
        <span>${item.inCart}</span>
        <ion-icon name="caret-forward-outline" id="add"></ion-icon>
        </div>
       <div class="total">
        $${(item.inCart * 10) * (item.price * 10) / 100}
       </div>
        `;
    });
    productContainer.innerHTML += `
      <div class="basketTotalContainer">
        <h4 class="basketTotalTitle">
          Cart Total
        </h4>
        <h4 class="basketTotal">
          $${cartCost}
        </h4>
    `;

  }
  deleteButtons();
}

function deleteButtons() {
  let deleteButtons = document.querySelectorAll('.product ion-icon')
  let productName;
  let productNumbers = localStorage.getItem('cartNumbers');
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);
  let cartCost = localStorage.getItem('totalCost');

  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener('click', () => {
      productName = deleteButtons[i].parentElement.textContent.trim();
      // .toLowerCase().replace(/ /g, "-");

      localStorage.setItem('cartNumbers', productNumbers - cartItems[productName].inCart ); 

      localStorage.setItem('totalCost', cartCost - ( cartItems[productName].price.toFixed(2) * cartItems[productName].inCart));
    
      delete cartItems[productName];
      localStorage.setItem('productsInCart', JSON.stringify(cartItems));

      displayCart();
      onLoadCartNumbers();
    });
  }
}



// function addOneSubtractOne() {

//   let btnAdd = document.querySelector('#add');
//   let btnSubtract = document.querySelector('#subtract');
//   let inCart = document.querySelector('inCart');
//     btnAdd.addEventListener('click', () => {
//       item.inCart.value = parseInt(item.inCart) + 1;
//     });

//     btnSubtract.addEventListener('click', () => {
//       item.inCart.value = parseInt(item.inCart.value) - 1;
//     });

// }


onLoadCartNumbers();
displayCart();