const menuItems = document.querySelectorAll('.nav li a[href*="#"]');
const menu = document.querySelector(".menu-bar");
const header = document.querySelector("#header");
const subMenu = document.querySelector(".nav .list-item .nav-sub");
const headerHeight = header.clientHeight;
let count = 0;


// handle click icon menu: open & close
menu.onclick = () => {
  const isClosed = header.clientHeight;
  if (isClosed === headerHeight) {
    header.style.height = "auto";
  } else {
    header.style.height = "45px";
  }
};

// handle click item menu
for (const item of menuItems) {
  item.onclick = () => {
    const isParentMenu =
      this.nextElementSibling &&
      this.nextElementSibling.classList.contains("nav-sub");
    isParentMenu ? null : header.style.height = null;
  };
}

// handle click submenu: toggle
subMenu.parentElement.addEventListener('click', () => {
  if (count % 2 === 0) {
    subMenu.style.display = 'block';
    count++;
  } else {
    subMenu.style.display = 'none';
    count++;
  }
})