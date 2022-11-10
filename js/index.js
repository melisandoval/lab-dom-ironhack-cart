// global scope variables:

// domTotal variable store the value displayed in the H2 that says "Total"
let domTotal = document.querySelector('#total-value span');

// domProductsParent store the node element that is the parent of all the product rows:
const domProductsParent = document.querySelector('#cart tbody');

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

// removeProduct() is called by all "Remove" buttons:
function removeProduct(event) {
  const currentRowProduct = event.path[2];

  let domProductSubtotal = Number(
    currentRowProduct.querySelector('.subtotal span').innerHTML
  );

  domProductsParent.removeChild(currentRowProduct);

  domTotal.innerHTML -= domProductSubtotal;
}

// createProduct() is called by "Create Product" button
// and its function is add the new product to the cart list
// and clean the input fields
function createProduct() {
  let domProductName = document.querySelector(
    '.create-product input[type=text]'
  );

  let domUnitPrice = document.querySelector(
    '.create-product input[type=number]'
  );

  domProductsParent.appendChild(
    createNewProductRow(domProductName.value, domUnitPrice.value)
  );

  domProductName.value = '';
  domUnitPrice.value = 0;
}

// createNewProductRow() is called by createProduct() and
// its function is create the dom element that will be added by createProduct()
function createNewProductRow(productName, unitPrice) {
  const newRow = document.createElement('tr');
  newRow.setAttribute('class', 'product');

  newRow.innerHTML = `
        <tr>
          <td class="name">
            <span>${productName}</span>
          </td>
          <td class="price">$<span>${unitPrice}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
        </tr>`;

  const newRowRemoveBtn = newRow.querySelector('.btn-remove');
  newRowRemoveBtn.addEventListener('click', removeProduct);

  return newRow;
}

// init all the buttons functionality:
window.addEventListener('load', () => {
  //
  // attach calculateAll() to "Calculate Prices" button:
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  // attach removeProduct() to all "Remove" buttons:
  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach((button) =>
    button.addEventListener('click', removeProduct)
  );

  // attach createProduct() to "Create Product" button:
  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
});
