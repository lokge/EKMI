let catalogList = document.querySelector('.catalog__main-content')
let filterSelectorCatalog = document.querySelector('.catalog__top-select')
let filterSearch = document.querySelector('.catalog__top-input')

let url = 'http://localhost:6969/items?'

let filterCatalog = '';
let filterSearchValue = '';


const getCatalogItems = () => {
    catalogList.innerHTML = ''
    fetch(url + `${filterCatalog.length ? 'model=' + filterCatalog + '&' : ''}${filterSearchValue.length ? 'title_like=' + filterSearchValue + '&' : ''}`)
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

const debounce = (fn, delay) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        let fnCall = () => {
            fn(...args);
        };
        timeout = setTimeout(fnCall, delay);
    };
};


filterSelectorCatalog.addEventListener('change', (e) => {
    filterCatalog = e.target.value
    getCatalogItems()
})

filterSearch.addEventListener('keyup', (e) => {
    filterSearchValue = e.target.value;
    debounce(getCatalogItems(), 2000);
});


getCatalogItems()