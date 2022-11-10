// ITERATION 1

function updateSubtotal(product) {
  let price = Number(product.querySelector(`.price span`).innerHTML);
  // console.log(`price is ${price}`);

  let quantity = Number(product.querySelector(`.quantity input`).value);
  // console.log(`quantity is ${quantity}`);

  let subTotal = product.querySelector(`.subtotal span`);
  // console.log(`subtotal inner html is ${subTotal.innerHTML}`);
  let subTotalUpdated = price * quantity;

  return (subTotal.innerHTML = subTotalUpdated);
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  const products = document.querySelectorAll('.product');
  console.log(products);

  products.forEach((product) => {
    updateSubtotal(product);
  });

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
