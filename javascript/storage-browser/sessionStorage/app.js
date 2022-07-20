const btnAddCookies = document.querySelector('button');
const btnGetCookies = btnAddCookies.nextElementSibling;


// Cookies storage
btnAddCookies.addEventListener("click", () => {
  const userId = "123"
  const user = {name: 'boyhotkey', age: 18}
  document.cookie = `uid=${userId}; expires`;
  document.cookie = `user=${JSON.stringify(user)}`
});

btnGetCookies.addEventListener("click", () => {
  console.log(document.cookie);
  const cookieData = document.cookie.split('; ')
  console.log(cookieData)
  const arr = []
  const data = cookieData.map(i => {
    if (i.trim().includes('user')) {
      arr.push(i)
    }
    return i
  })
  // console.log(data[1].split('=')[1])
  console.log(arr[0].split('=')[1])
});
