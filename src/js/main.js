let newSwipeList = document.querySelector('.new__swipe-block')
let lastSwipeList = document.querySelector('.last__swipe-block')

let url = 'http://localhost:6969/items?'

const getItems = () => {
    fetch(url)
        .then((resolve) => resolve.json())
        .then((resolve) => {
            resolve.forEach((item) => {
                newSwipeList.innerHTML +=`
                <div class="new__swipe-box">
                <div class="new__swipe-imgCont">
                <img src="${item.image}" alt="content image" class="new__swipe-img">
                </div>
                <a href="${item.link}" class="new__swipe-textContent">
                <h5 class="new__swipe-desc">${item.title}</h5>
                <p class="new__swipe-price">${item.price} UAH</p>
                </a>
                </div>
                `
                lastSwipeList.innerHTML +=`
                <div class="new__swipe-box">
                <div class="new__swipe-imgCont">
                <img src="${item.image}" alt="content image" class="new__swipe-img">
                </div>
                <a href="${item.link}" class="new__swipe-textContent">
                <h5 class="new__swipe-desc">${item.title}</h5>
                </a>
                </div>
                `
            })
        })
        .catch((err) => alert(err))
}


getItems()