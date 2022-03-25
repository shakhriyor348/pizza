import renderItems from "../renderElements/render.js"


const tabs = () => {

    const mainContentLink = document.querySelectorAll('.main__content-link')
    
    renderItems()

    mainContentLink.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault()
            removeActiveClass(mainContentLink)
            addActiveClass(link)
            const category = link.dataset.category
            getData(category)
        })
    })

    function removeActiveClass(element) {
        element.forEach(link => {
            link.classList.remove('active')
        })
    }

    function addActiveClass(btn) {
        btn.classList.add('active')
    }



    const getData = async (category) => {
        await fetch('https://pizza-8cdea-default-rtdb.firebaseio.com/db.json')
            .then(res => res.json())
            .then(data => {
                const arr = category ? data.filter(item => item.category === category) : data
                // console.log(arr);
                if(category == undefined) {
                    data.pop()
                }
                renderItems(arr)

            })
    }

    getData()

}


export default tabs;

