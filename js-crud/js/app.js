const nameProduct = document.querySelector('.name-product');
const manufacturerProduct = document.querySelector('.manufacturer-product');
const priceProduct = document.querySelector('.price-product');

const btnAdd = document.querySelector('.btn-add');
const btnUpdate = document.querySelector('.btn-update');
const tbody = document.querySelector('#result');

const productList = [];
let count = 0;
let ID;
let countEdit = 0;



const updateUI = () => {
  const panelResultElement = document.getElementById('panel-result');
  if (productList.length === 0) {
    panelResultElement.style.display = 'none';
  } else {
    panelResultElement.style.display = 'block';
  }
}


const showBtnUpdate = () => {
  btnAdd.style.display = 'none';
  btnUpdate.style.display = 'block';
}

const hideBtnUpdate = () => {
  btnAdd.style.display = 'block';
  btnUpdate.style.display = 'none';
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
  // trElement[0].parentNode.removeChild(trElement[countIndex - 1]);
  resultElement.removeChild(trElement[countIndex - 1]);
  updateUI();
}

const editProduct = (id) => {
  ID = Number(id);
  for (const item of productList) {
    const { id, name, manufacturer, price } = item;
    if (id === ID) {
      nameProduct.value = name;
      manufacturerProduct.value = manufacturer;
      priceProduct.value = price;
    }
  }
  showBtnUpdate();
  nameProduct.focus();
  countEdit = 1;
}


/* const renderNewProduct = (id, name, manufacturer, price) => {
  const trElement = document.createElement('tr');
  trElement.innerHTML = `
    <td>${id}</td>
    <td>${name}</td>
    <td>${manufacturer}</td>
    <td>${price}</td>
    <td>
      <input type="submit" id="edit" value="EDIT" onclick="editProduct('${id}')" />
      <input type="submit" id="delete" value="DELETE" onclick="deleteProduct('${id}')" />
    </td>
  `
  tbody.append(trElement);
} */
const renderNewProduct = () => {
  let htmls = '';
  productList.forEach(item => {
    htmls += `
      <tr>
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.manufacturer}</td>
        <td>${item.price}</td>
        <td class="center">
          <button id="edit" onclick="editProduct('${item.id}')">EDIT</button>
          <button id="delete" onclick="deleteProduct('${item.id}')">DELETE</button>
        </td>
      </tr>
    `
  });
  tbody.innerHTML = htmls;
}

const updateProduct = () => {
  // push value in obj
  let objItem = {};
  let countIndex = 0;
  for (const item of productList) {
    if (item.id === Number(ID)) {
      objItem = {
        id: Number(ID),
        name: nameProduct.value,
        manufacturer: manufacturerProduct.value,
        price: priceProduct.value
      }
      break;
    }
    countIndex++;
  }
  productList.splice(countIndex, 1, objItem);

  // update obj in productList
  /* for (const key in productList) {
    if (productList[key].id === ID) {
    }
  } */

  clearInput();
  hideBtnUpdate();
  renderNewProduct();
  countEdit = 0;
}


const addProduct = (event) => {
  const nameProductValue = nameProduct.value.trim();
  const manufacturerProductValue = manufacturerProduct.value.trim();
  const priceProductValue = priceProduct.value.trim();

  if (!nameProductValue || !manufacturerProductValue || !priceProductValue) {
    alert('You entered wrong: Product Infomation invalid!');
    return;
  }

  let objItem = {
    id: Number(++count),
    name: nameProductValue,
    manufacturer: manufacturerProductValue,
    price: priceProductValue
  }
  productList.push(objItem);
  console.log(productList);
  
  clearInput();
  renderNewProduct();
  updateUI();
}

const keycodeEnter = (event, next) => {
  console.log(event.which)
  if (event.which === 13) {
    next;
  }
}



btnAdd.addEventListener('click', addProduct);
btnUpdate.addEventListener('click', updateProduct);

nameProduct.addEventListener('keypress', (event) => {
  keycodeEnter(event, manufacturerProduct.focus());
});
manufacturerProduct.addEventListener('keypress', (event) => {
  keycodeEnter(event, priceProduct.focus());
});
priceProduct.addEventListener('keypress', (event) => {
  if (event.which === 13) {
    priceProduct.blur()
    if (countEdit === 1) {
      updateProduct();
    } else {
      addProduct();
    }
  }
});