import pizzaInfo from '../pizzaInfo/pizzaInfo.js';

const headerNavPrice = document.querySelector('.header__nav-price'),
    cart = document.querySelector('.header__nav-amount span')

    headerNavPrice.textContent = 0
    cart.textContent = 0

const renderItems = (array) => {
    try{
        const mainTabsContent = document.querySelector('.main__tabs-content');

    mainTabsContent.innerHTML = ''

    array.forEach(({ img, title, addBtn, price, sizeBig, sizeMedium, sizeMini, typeThin, typeTraditional }) => {
        const tabsItems = document.createElement('div')

        tabsItems.classList.add('main__tabs-items')

        tabsItems.innerHTML = `
            <div class="main__tabs-item">
                <img class="main__tabs-img" src="${img}" alt="">
                <h4 class="main__tabs-title">${title}</h4>
                <div class="main__tabs-info">
                    <a class="main__tabs-btn" href="">${typeThin}</a>
                    <a class="main__tabs-btn" href="">${typeTraditional}</a>
                    <a class="main__tabs-size" href="">${sizeMini}</a>
                    <a class="main__tabs-size" href="">${sizeMedium}</a>
                    <a class="main__tabs-size" href="">${sizeBig}</a>
                </div>
                <div class="main__tabs-add">
                    <span class="main__tabs-price">от <span>${price}</span> ₽</span>
                    <a class="main__tabs-addCart" href="">${addBtn}</a>
                </div>
            </div>
        `
        
        
        mainTabsContent.appendChild(tabsItems)
        
    })

    const  addCart = document.querySelectorAll('.main__tabs-addCart')

        addCart.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault()
                let amount = ++cart.textContent
                let parent = e.target.closest('.main__tabs-item')
                let span = parent.querySelector('.main__tabs-price span') 
                headerNavPrice.textContent = +amount *  +span.textContent + ' ₽'
            })
        })

    pizzaInfo()
    }catch(e) {}
}

export default renderItems

