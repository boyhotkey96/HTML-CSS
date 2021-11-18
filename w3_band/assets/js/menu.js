 // Menu
 var menuItems = document.querySelectorAll('.nav li a[href*="#"]')
 var menu = document.querySelector('.menu-bar')
 var header = document.querySelector('#header')
 var subMenu = document.querySelector('.nav .list-item .nav-sub')
 var sss = document.querySelector('.nav .list-item:hover .nav-sub')
 var headerHeight = header.clientHeight

 // Click icon menu
 menu.onclick = function () {
     var isClosed = header.clientHeight
     if (isClosed === headerHeight) {
         header.style.height = 'auto'
     } else {
         header.style.height = '45px'
     }
 }

 //Item Menu
 for (var i = 0; i < menuItems.length; i++) {
     var count = 0;

     menuItems[i].onclick = function (event) {
         var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('nav-sub')

         if (isParentMenu) {
             if (count == 0) {
                 event.preventDefault();
                 subMenu.style.display = 'block';
                 count = 1;
             } else {
                 subMenu.style.display = 'none';
                 count = 0;
             }
         } else {
             header.style.height = null;
         }
     }
 }