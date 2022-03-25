import renderItems from "../renderElements/render.js";

const sort = () => {
    const mainContentSort = document.querySelector('.main__content-sort'),
        sortPopUp = mainContentSort.querySelector('.main__content-sortPopup'),
        mainContentArrow = mainContentSort.querySelector('.main__content-arrow'),
        mainContentLi = document.querySelectorAll('.main__content-li'),
        sortInfo = document.querySelector('.main__content-sortInfo');


    mainContentSort.addEventListener('click', () => {
        if (sortPopUp.classList.contains('active')) {
            sortPopUp.classList.remove('active')
            mainContentArrow.style.transform = 'rotate(0deg)'
        } else {
            sortPopUp.classList.add('active')
            mainContentArrow.style.transform = 'rotate(180deg)'
        }
    })

    mainContentLi.forEach(item => {
        item.addEventListener('click', () => {
            sortInfo.innerHTML = item.innerHTML
            if (item.innerHTML == 'популярности') {
                setData(item.innerHTML)
            }else if(item.innerHTML == 'цене') {
                sortPrice()
            }else if(item.innerHTML == 'алфавиту') {
                sortAlfa()
            }
        })
    })




    const setData = async (popular) => {
        await fetch('https://pizza-8cdea-default-rtdb.firebaseio.com/db.json')
            .then(res => res.json())
            .then(db => {
                let arr = popular ? db.filter(item => item.popular === popular) : db
                renderItems(arr)
            })
    }

    const sortPrice = async () => {
        await fetch('https://pizza-8cdea-default-rtdb.firebaseio.com/db.json')
        .then(res => res.json())
        .then(data => {
            let arr = data.sort((item1, item2) => +item1.price - +item2.price)
            arr.pop()
            renderItems(arr)
        })
    }

    const sortAlfa = async () => {
        await fetch('https://pizza-8cdea-default-rtdb.firebaseio.com/db.json')
        .then(res => res.json())
        .then(data => {
            let arr = data.sort((item1, item2) => {
                if(item1.title > item2.title) return 1
                if(item1.title < item2.title) return -1
                return 0
            })
            arr.splice(1, 1)
            renderItems(arr)
        })
    }
}




export default sort;