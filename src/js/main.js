let newSwipeList = document.querySelector('.new__swipe-block')
let lastSwipeList = document.querySelector('.last__swipe-block')


let url = 'http://localhost:6969/items?'



const getItems = () => {
    fetch(url)
        .then((resolve) => resolve.json())
        .then((resolve) => {
            resolve.forEach((item) => {
                newSwipeList.innerHTML += `
                <div class="new__swipe-box">
                <a href="http://localhost:63342/underworld/src/pages/productCard.html#${item.id}" class="new__swipe-textContent">
                <div class="new__swipe-imgCont">
                <img src="${item.image}" alt="content image" class="new__swipe-img">
                </div>
                <h5 class="new__swipe-desc">${item.title}</h5>
                <p class="new__swipe-price">${item.price} UAH</p>
                </a>
                </div>
                `
                lastSwipeList.innerHTML += `
                <div class="new__swipe-box">
                <div class="new__swipe-imgCont">
                <img src="${item.image}" alt="content image" class="new__swipe-img">
                </div>
                <a href="http://localhost:63342/underworld/src/pages/productCard.html#${item.id}" class="new__swipe-textContent catalog__main-desc">
                ${item.title}
                </a>
                </div>
                `
            })
        })
        .catch((err) => alert(err))
}

getItems()