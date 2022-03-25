const pizzaInfo = () => {
    const mainTabsBtn = document.querySelectorAll('.main__tabs-btn'),
        mainTabsSize = document.querySelectorAll('.main__tabs-size')

    mainTabsBtn.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault()
            removeActive(mainTabsBtn)
            addActive(link)
        })
    })

    mainTabsSize.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault()
            removeActive(mainTabsSize)
            addActive(link)
        })
    })


    function removeActive(arr) {
        arr.forEach(btn => {
            btn.classList.remove('active')
        })
    }

    function addActive(btn) {
        btn.classList.add('active')
    }
}


export default pizzaInfo