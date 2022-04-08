let nameProduct = document.querySelector('.name-product');
let manufacturerProduct = document.querySelector('.manufacturer-product');
let priceProduct = document.querySelector('.price-product');
let btnAdd = document.querySelector('.btn-add');
let tbody = document.querySelector('#result');
let btnDelete = document.querySelector('#delete');
let productList = [];
let count = 0;


function addProduct() {
  if (nameProduct.value === '' || manufacturerProduct.value === '' || priceProduct.value === '') return null
  
  /* let arrProduct = {
    name          :   nameProduct.value,
    manufacturer  :   manufacturerProduct.value,
    price         :   cpriceProduct.value,
  } */
  
  let objItem = {};
  objItem.id            =   Number(++count);
  objItem.name          =   nameProduct.value,
  objItem.manufacturer  =   manufacturerProduct.value,
  objItem.price         =   priceProduct.value,
  // console.log(objItem);
  
  productList.push(objItem);
  console.log(productList);

 /*  //loop for
  for (let product = 0; product < productList.length; product++) {
    for (let i = 0; i < Object.values(productList[product]).length; i++) {
      console.log(Object.values(productList[product])[i]);
    }
  } */

  /* // loop for in get values
  for (let product = 0; product < productList.length; product++) {
    console.log(productList[product])
    for (let i in Object.keys(productList[product])) {
      console.log(productList[product][Object.keys(productList[product])[i]])
    }
  } */


  let str = '';
  productList.forEach(function (product) {
      str += `<tr>
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.manufacturer}</td>
                <td>${product.price}</td>
                <td>
                  <input type="submit" id="delete" value="Delete" />
                </td>
              </tr>`
  })

  tbody.innerHTML = str;
  // console.log('count: ' + count)

  let btnDelete = document.querySelectorAll('#delete');
  for (let i = 0; i < btnDelete.length; i++) {
    btnDelete[i].addEventListener('click', function() {
      let parentElement = btnDelete[i].closest('tr');
      let textTD1 = parentElement.getElementsByTagName('td')[0].innerText;
        deleteProduct(textTD1);
    }, false);
  }
}


function deleteProduct(textTD1) {
  // productList.forEach(function (product) {
    for (let x = 0; x < productList.length; x++) {
        console.log(productList[x])
        if (Object.entries(productList[x])[0][1] == textTD1) {
          console.log(Object.entries(productList[x])[0][1])
          productList.splice(productList[x], 1);
        }
  }
}

btnAdd.addEventListener('click', addProduct);
