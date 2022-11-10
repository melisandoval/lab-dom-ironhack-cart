function updateSubtotal(product) {
  let price = Number(product.querySelector(`.price span`).innerHTML);
  let quantity = Number(product.querySelector(`.quantity input`).value);
  let subTotal = product.querySelector(`.subtotal span`);

  let subTotalUpdated = price * quantity;

  return (subTotal.innerHTML = subTotalUpdated);
}

function calculateAll() {
  const products = document.querySelectorAll('.product');

  let total = 0;

  products.forEach((product) => {
    total += updateSubtotal(product);
  });

  let domTotal = document.querySelector('#total-value span');

  return (domTotal.innerHTML = total);
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
