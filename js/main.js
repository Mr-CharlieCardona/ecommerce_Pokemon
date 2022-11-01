const buttonHamburger = document.getElementById('button-hamburger');
const nav = document.getElementById('nav');
const br1 = document.getElementById('br1')
const br2 = document.getElementById('br2')
const br3 = document.getElementById('br3')
const itemNav = document.querySelectorAll(".main-nav__link")

buttonHamburger.addEventListener('click', ()=> {
      br1.classList.toggle('br-1')
      br2.classList.toggle('br-2')
      br3.classList.toggle('br-3')
      nav.classList.toggle('mainOpen')
   
})

const foo = document.querySelector('.section-cards__footer');
foo.setAttribute('id', 'toasts');
const toast = document.getElementById('toasts');

const messages = [
    'Notificación Informativa',
    'Notificación Error',
    'Producto añadido al carrito',
    'Notificación Advertencia'
]

const types = [
    'info',
    'success',
    'error',
    'warning'
]


function createToast(message = null, type = null) {
    let properties

    const notif = document.createElement('div')
    const notifIcon = document.createElement('span')
    const notificationType = 'success';
    
    properties = setProperties(notificationType)

    notif.classList.add('toast')
    notif.classList.add(notificationType)
    
    notifIcon.classList.add(properties[0])
    notifIcon.classList.add(properties[1])

    notif.innerText = messages[properties[2]]

    toast.appendChild(notif)
    notif.append(notifIcon)

    setTimeout(() => {
        notif.remove()
    }, 3000)
}

function setProperties(notificationType){
    let propertyList

    switch (notificationType) {
        case 'info':
            propertyList = ['fas', 'fa-info-circle', 0]
            break
        case 'error':
            propertyList = ['fas', 'fa-exclamation-circle', 1]
            break
        case 'success':
            propertyList = ['fas', 'fa-check-circle', 2]
            break
        case 'warning':
            propertyList = ['fas', 'fa-exclamation-triangle', 3]
            break
    }

    return propertyList;
}




function trolley(){
      const iTrolley = '<i class="fa-solid fa-cart-shopping main-header__cart-button-container__cart-icon"></i>';
      const contentiTrolley = document.querySelector('.main-header__cart-button-container');
      let countProduct = localStorage.getItem('productsInCart') || 0;
      const small = `<small>${countProduct}</small>`;
      contentiTrolley.innerHTML = iTrolley + small;

      const products = document.querySelectorAll('.the-new__cards-container__card__addCart > p');
      const contentProducts = document.querySelectorAll('.the-new__cards-container__card');
      products[0].onclick = () => {addClass(0)};
      products[1].onclick = () => {addClass(1)};
      products[2].onclick = () => {addClass(2)};
      products[3].onclick = () => {addClass(3)};
      products[4].onclick = () => {addClass(4)};
      products[5].onclick = () => {addClass(5)};
      products[6].onclick = () => {addClass(6)};
      products[7].onclick = () => {addClass(7)};
      products[8].onclick = () => {addClass(8)};

      function addClass(index){
            let className = contentProducts[index].className;
            let classActiveCart = className.split("addCartActive");
            let newClass = (classActiveCart.length > 1)? false : true;
            if(newClass){
                  contentProducts[index].classList.add('addCartActive');
                  countProduct++;
                  const small = `<small>${countProduct}</small>`;
                  contentiTrolley.innerHTML = iTrolley + small;
                  products[index].innerText = '-';
                  createToast();
                  // (localStorage.getItem('productsInCart') !== 0)? localStorage.setItem('productsInCart', countProduct) : null;
            }else{
                  contentProducts[index].classList.remove('addCartActive');
                  countProduct--;
                  const small = `<small>${countProduct}</small>`;
                  contentiTrolley.innerHTML = iTrolley + small;
                  products[index].innerText = '+';
                  // (localStorage.getItem('productsInCart') == 0)? localStorage.clear :  localStorage.setItem('productsInCart', countProduct);
            }

      }



}
trolley();