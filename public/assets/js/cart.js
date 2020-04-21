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
    price: 10.95,
    inCart: 0
  },
  {
    name: 'Pasta Francaise',
    price: 10.95,
    inCart: 0
  },
  {
    name: 'Super Food Pasta',
    price: 10.95,
    inCart: 0
  },
  {
    name: 'What The Kale',
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
    localStorage.setItem('totalCost', cartCost + product.price);
  } else {
    localStorage.setItem('totalCost', product.price);
  }
  
}

onLoadCartNumbers();