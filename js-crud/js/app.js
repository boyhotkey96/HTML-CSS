let nameProduct = document.querySelector('.name-product');
let manufacturerProduct = document.querySelector('.manufacturer-product');
let priceProduct = document.querySelector('.price-product');
let btnAdd = document.querySelector('.btn-add');
let tbody = document.querySelector('#result');
let productList = [];


function addProduct() {
  if (nameProduct.value === '' || manufacturerProduct.value === '' || priceProduct.value === '') return null
  
  /* let arrProduct = {
    name          :   nameProduct.value,
    manufacturer  :   manufacturerProduct.value,
    price         :   cpriceProduct.value,
  } */
  
  let objItem = {};
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


  var str = '';
  productList.forEach(function ( product) {
       str += `<tr>
                <td>1</td>
                <td>${product.name}</td>
                <td>${product.manufacturer}</td>
                <td>${product.price}</td>
              </tr>`
      
  })
  // console.log(str)
  tbody.innerHTML = str;
}


btnAdd.addEventListener('click', addProduct);