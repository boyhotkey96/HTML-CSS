const nameProduct = document.querySelector('.name-product');
const manufacturerProduct = document.querySelector('.manufacturer-product');
const priceProduct = document.querySelector('.price-product');

const btnAdd = document.querySelector('.btn-add');
const tbody = document.querySelector('#result');

const productList = [];
let count = 0;



const updateUI = () => {
  const panelResultElement = document.getElementById('panel-result');
  if (productList.length === 0) {
    panelResultElement.style.display = 'none';
  } else {
    panelResultElement.style.display = 'block';
  }
}

const clearInput = () => {
  nameProduct.value = '';
  manufacturerProduct.value = '';
  priceProduct.value = '';
}


const deleteProduct = (id) => {
  let countIndex = 1;
  for (const product of productList) {
    if (product.id === Number(id)) {
      productList.splice(countIndex - 1, 1);
      break;
    }
    countIndex++;
  }
  console.log(productList);

  const resultElement = document.getElementById('result');
  const trElement = resultElement.querySelectorAll('tr');
  // trElement[countIndex-1].remove();
  resultElement.removeChild(trElement[countIndex-1]);
  updateUI();
}


/* const renderNewProduct = (id, name, manufacturer, price) => {
  const trElement = document.createElement('tr');
  trElement.innerHTML = `<tr>
                          <td>${id}</td>
                          <td>${name}</td>
                          <td>${manufacturer}</td>
                          <td>${price}</td>
                          <td>
                            <input type="submit" id="delete" value="Delete" onclick="deleteProduct('${id}')" />
                          </td>
                        </tr>
                        `
  tbody.append(trElement);
} */


const addProduct = () => {
  const nameProductValue = nameProduct.value;
  const manufacturerProductValue = manufacturerProduct.value;
  const priceProductValue = nameProduct.value;

  if (!nameProductValue.trim() || !manufacturerProductValue.trim() || !priceProductValue.trim()) {
    alert('You entered wrong: Product Infomation invalid!');
  } else {  
    let objItem = {
      id            :   Number(++count),
      name          :   nameProductValue,
      manufacturer  :   manufacturerProductValue,
      price         :   priceProductValue,
    }
    productList.push(objItem);
    console.log(productList);
    clearInput();
    // renderNewProduct(objItem.id, objItem.name, objItem.manufacturer, objItem.price);
    const trElement = document.createElement('tr');
    trElement.innerHTML = `<tr>
                            <td>${objItem.id}</td>
                            <td>${objItem.name}</td>
                            <td>${objItem.manufacturer}</td>
                            <td>${objItem.price}</td>
                            <td>
                              <input type="submit" id="delete" value="Delete" onclick="deleteProduct('${objItem.id}')" />
                            </td>
                          </tr>
                          `
    tbody.append(trElement);
    updateUI();
  }
}



btnAdd.addEventListener('click', addProduct);
