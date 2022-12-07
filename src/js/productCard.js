let itemClick = document.querySelectorAll(".productCard__description-headItem")
let adminInfo = document.querySelectorAll(".productCard__description-blockList")

for (let i = 0; i < itemClick.length; i++) {
    itemClick[i].addEventListener("click", (e) => {
        let itemClickChildren = e.target.parentElement.children;
        for (let j = 0; j < itemClickChildren.length; j++) {
            itemClickChildren[j].classList.remove("productCard__description-headItem-active");
        }
        itemClick[i].classList.add("productCard__description-headItem-active");
        let adminInfoChildren = adminInfo;
        for (let t = 0; t < adminInfoChildren.length; t++) {
            adminInfoChildren[t].classList.remove("productCard__description-blockList-active")
        }
        adminInfo[i].classList.add("productCard__description-blockList-active");
    })
}