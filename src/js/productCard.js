//product card description
// let argDesc = document.querySelector(".productCard__description-descBlock")
// let itemClick = document.querySelectorAll(".productCard__description-headItem")
// let itemInfo = document.querySelectorAll(".productCard__description-blockList")



let collection = document.querySelector('.productCard__homePage-subtitle')
let title = document.querySelector('.productCard__homePage-title')
let price = document.querySelector('.productCard__homePage-price')
let desc = document.querySelector('.productCard__homePage-desc')
let image = document.querySelector('.productCard__homePage-image')

let db = fetch(`http://localhost:6969/items/${location.hash.slice(1)}`).then(res => res.json())
db.then(res => getInfo(res))
let getInfo = (arg) => {
    title.textContent = `${arg.title}`
    collection.textContent = `${arg.collection}`
    desc.textContent = `${arg.desc}`
    title.textContent = `${arg.title}`
}

console.log(location)

// function getInfo(info) {
//     getInfo.innerHTML = ''
//     let arg = info[0].information
//     argDesc.innerHTML += `
//                 <ul class="productCard__description-headList">
//                         <li class="productCard__description-headItem productCard__description-headItem-active">Техническая информация</li>
//                         <li class="productCard__description-headItem">Размеры</li>
//                         <li class="productCard__description-headItem">Дополнительная комплектация</li>
//                 </ul>
//                 <div class="productCard__description-blockList productCard__description-blockList-active" >
//                         <div class="productCard__description-textCont">
//                             <p class="productCard__description-info">
//                             <span class="productCard__description-info-icon"><svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="4.5" cy="5.40625" r="4.5" fill="#FF9619"/></svg>
//                             </span>
//                                 Механизм:
//                             </p>
//                             <p class="productCard__description-desc">${arg.mechanism}</p>
//                         </div>
//                         <div class="productCard__description-textCont">
//                             <p class="productCard__description-info">
//                             <span class="productCard__description-info-icon"><svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="4.5" cy="5.40625" r="4.5" fill="#FF9619"/></svg>
//                             </span>
//                                 Каркас:
//                             </p>
//                             <p class="productCard__description-desc">${arg.skeleton}</p>
//                         </div>
//                         <div class="productCard__description-textCont">
//                             <p class="productCard__description-info">
//                             <span class="productCard__description-info-icon"><svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="4.5" cy="5.40625" r="4.5" fill="#FF9619"/></svg>
//                             </span>
//                                 Наполнитель:
//                             </p>
//                             <p class="productCard__description-desc">${arg.filler}</p>
//                         </div>
//                         <div class="productCard__description-textCont">
//                             <p class="productCard__description-info">
//                             <span class="productCard__description-info-icon"><svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="4.5" cy="5.40625" r="4.5" fill="#FF9619"/></svg>
//                             </span>
//                                 Обивка:
//                             </p>
//                             <p class="productCard__description-desc">${arg.upholstery}</p>
//                         </div>
//                         <div class="productCard__description-textCont">
//                             <p class="productCard__description-info">
//                             <span class="productCard__description-info-icon"><svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="4.5" cy="5.40625" r="4.5" fill="#FF9619"/></svg>
//                             </span>
//                                 Комплектация:
//                             </p>
//                             <p class="productCard__description-desc">${arg.complects}</p>
//                         </div>
//                         <div class="productCard__description-textCont">
//                             <p class="productCard__description-info">
//                             <span class="productCard__description-info-icon"><svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="4.5" cy="5.40625" r="4.5" fill="#FF9619"/></svg>
//                             </span>
//                                 Декоративные элементы:
//                             </p>
//                             <p class="productCard__description-desc">${arg.decorative}</p>
//                         </div>
//                         <div class="productCard__description-textCont">
//                             <p class="productCard__description-info">
//                             <span class="productCard__description-info-icon"><svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="4.5" cy="5.40625" r="4.5" fill="#FF9619"/></svg>
//                             </span>
//                                 Дополнительные опции:
//                             </p>
//                             <p class="productCard__description-desc">${arg.Additional}</p>
//                         </div>
//                     </div>
//                 <div class="productCard__description-blockList">
//                         <div class="productCard__description-textCont">
//                             <p class="productCard__description-info">
//                             <span class="productCard__description-info-icon"><svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="4.5" cy="5.40625" r="4.5" fill="#FF9619"/></svg>
//                             </span>
//                                 Длина:
//                             </p>
//                             <p class="productCard__description-desc">${arg.length}</p>
//                         </div>
//                         <div class="productCard__description-textCont">
//                             <p class="productCard__description-info">
//                             <span class="productCard__description-info-icon"><svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="4.5" cy="5.40625" r="4.5" fill="#FF9619"/></svg>
//                             </span>
//                                 Ширина:
//                             </p>
//                             <p class="productCard__description-desc">${arg.width}</p>
//                         </div>
//                         <div class="productCard__description-textCont">
//                             <p class="productCard__description-info">
//                             <span class="productCard__description-info-icon"><svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="4.5" cy="5.40625" r="4.5" fill="#FF9619"/></svg>
//                             </span>
//                                 Высота:
//                             </p>
//                             <p class="productCard__description-desc">${arg.height}</p>
//                         </div>
//                         <div class="productCard__description-textCont">
//                             <p class="productCard__description-info">
//                             <span class="productCard__description-info-icon"><svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="4.5" cy="5.40625" r="4.5" fill="#FF9619"/></svg>
//                             </span>
//                                 Ширина посадочного места:
//                             </p>
//                             <p class="productCard__description-desc">${arg.seatWidth}</p>
//                         </div>
//                         <div class="productCard__description-textCont">
//                             <p class="productCard__description-info">
//                             <span class="productCard__description-info-icon"><svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="4.5" cy="5.40625" r="4.5" fill="#FF9619"/></svg>
//                             </span>
//                                 Глубина:
//                             </p>
//                             <p class="productCard__description-desc">${arg.depth}</p>
//                         </div>
//                     </div>
//                 <div class="productCard__description-blockList">
//                         <div class="productCard__description-textCont">
//                             <p class="productCard__description-info">
//                             <span class="productCard__description-info-icon"><svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="4.5" cy="5.40625" r="4.5" fill="#FF9619"/></svg>
//                             </span>
//                                 Чехол:
//                             </p>
//                             <p class="productCard__description-desc">${arg.case}</p>
//                         </div>
//                         <div class="productCard__description-textCont">
//                             <p class="productCard__description-info">
//                             <span class="productCard__description-info-icon"><svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="4.5" cy="5.40625" r="4.5" fill="#FF9619"/></svg>
//                             </span>
//                                 Накладки:
//                             </p>
//                             <p class="productCard__description-desc">${arg.overlay}</p>
//                         </div>
//                         <div class="productCard__description-textCont">
//                             <p class="productCard__description-info">
//                             <span class="productCard__description-info-icon"><svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="4.5" cy="5.40625" r="4.5" fill="#FF9619"/></svg>
//                             </span>
//                                 Боковые полочки:
//                             </p>
//                             <p class="productCard__description-desc">${arg.shelves}</p>
//                         </div>
//                         <div class="productCard__description-textCont">
//                             <p class="productCard__description-info">
//                             <span class="productCard__description-info-icon"><svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="4.5" cy="5.40625" r="4.5" fill="#FF9619"/></svg>
//                             </span>
//                                 Розетки:
//                             </p>
//                             <p class="productCard__description-desc">${arg.socket}</p>
//                         </div>
//                         <div class="productCard__description-textCont">
//                             <p class="productCard__description-info">
//                             <span class="productCard__description-info-icon"><svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="4.5" cy="5.40625" r="4.5" fill="#FF9619"/></svg>
//                             </span>
//                                 Беспроводная зарядка:
//                             </p>
//                             <p class="productCard__description-desc">${arg.wireless}</p>
//                         </div>
//                     </div>
//
//                 `
// }
//
//
// for (let i = 0; i < itemClick.length; i++) {
//     itemClick[i].addEventListener("click", (e) => {
//         let itemClickChildren = e.target.parentElement.children;
//         for (let j = 0; j < itemClickChildren.length; j++) {
//             itemClickChildren[j].classList.remove("productCard__description-headItem-active");
//         }
//         itemClick[i].classList.add("productCard__description-headItem-active");
//         let adminInfoChildren = itemInfo;
//         for (let t = 0; t < adminInfoChildren.length; t++) {
//             adminInfoChildren[t].classList.remove("productCard__description-blockList-active")
//         }
//         itemInfo[i].classList.add("productCard__description-blockList-active");
//     })
// }
// console.log(location)