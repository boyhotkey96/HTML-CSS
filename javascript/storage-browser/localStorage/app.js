const btnAdd = document.querySelector("button");
const btnGet = btnAdd.nextElementSibling;

// local storage
const listInfo = {
  name: "Phùng Bá Dự",
  age: 18,
  hobiies: ["soccer", "play game"],
};

btnAdd.addEventListener("click", () => {
  localStorage.setItem("infoLocal", JSON.stringify(listInfo));
  sessionStorage.setItem("infoSession", JSON.stringify(listInfo));
});

btnGet.addEventListener("click", () => {
  const getInfoLocal = JSON.parse(localStorage.getItem("listInfo"));
  const getInfoSession = JSON.parse(sessionStorage.getItem("listInfo2"));
  // console.log('get local storage: ' + getInfoLocal.toString())
  console.log("get local storage: ", getInfoLocal);
  console.log(getInfoLocal);
  console.log(getInfoSession);
});