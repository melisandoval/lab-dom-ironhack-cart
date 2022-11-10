// init all the buttons functionality:
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

// this variable will be used for more than one function:
let domTotal = document.querySelector('#total-value span');

// calculateAll() function is called by button "Calculate Prices":
function calculateAll() {
  const products = document.querySelectorAll('.product');

  let total = 0;

  products.forEach((product) => {
    total += updateSubtotal(product);
  });

  return (domTotal.innerHTML = total);
}

// updateSubtotal(product) function is called by calculateAll() function:
function updateSubtotal(product) {
  const domPrice = Number(product.querySelector(`.price span`).innerHTML);
  const domQuantity = Number(product.querySelector(`.quantity input`).value);
  const domSubTotal = product.querySelector(`.subtotal span`);

  return (domSubTotal.innerHTML = domPrice * domQuantity);
}

function removeProduct(event) {
  const target = event.currentTarget;
  const domProductParent = document.querySelector('#cart tbody');
  const domProduct = document.querySelector('.product');

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
