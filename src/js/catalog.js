let catalogList = document.querySelector('.catalog__main-content')
let filterSelectorCatalog = document.querySelector('.catalog__top-select')

let url = 'http://localhost:6969/items?'

let filterCatalog = ''

const getCatalogItems = () => {
    catalogList.innerHTML = ''
    fetch(url + `${filterCatalog.length ? 'model=' + filterCatalog : ''}`)
        .then((resolve) => resolve.json())
        .then((resolve) => {
            resolve.forEach((item) => {
                catalogList.innerHTML +=`
                <div class="catalog__main-box">
                        <img style="width: 100%" src="${item.image}" alt="Image" class="catalog__main-img">
                        <a href="${item.link}" class="catalog__main-desc">${item.title}</a>
                </div>
                `
            })
        })
        .catch((err) => alert(err))
}

filterSelectorCatalog.addEventListener('change', (e) => {
    filterCatalog = e.target.value
    getCatalogItems()
})

getCatalogItems()