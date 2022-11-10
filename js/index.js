function updateSubtotal(product) {
  let price = Number(product.querySelector(`.price span`).innerHTML);
  let quantity = Number(product.querySelector(`.quantity input`).value);
  let subTotal = product.querySelector(`.subtotal span`);

  let subTotalUpdated = price * quantity;
  return (subTotal.innerHTML = subTotalUpdated);
}

let domTotal = document.querySelector('#total-value span');

function calculateAll() {
  const products = document.querySelectorAll('.product');

  let total = 0;

  products.forEach((product) => {
    total += updateSubtotal(product);
  });

  return (domTotal.innerHTML = total);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;

  let domProductParent = document.querySelector('#cart tbody');

  let domProduct = document.querySelector('.product');

  let domProductSubtotal = Number(
    domProduct.querySelector('.subtotal span').innerHTML
  );

  if (domProduct.contains(target)) {
    domProductParent.removeChild(domProduct);

    domTotal.innerHTML -= domProductSubtotal;
  }
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

// init all the buttons:
window.addEventListener('load', () => {
  // attach calculateAll() to "Calculate Prices" button:
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  // attach removeProduct() to all "Remove" buttons:
  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach((button) =>
    button.addEventListener('click', removeProduct)
  );
});
