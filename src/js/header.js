import {user, getUserFromLocalStorage} from './user.js'

getUserFromLocalStorage()

let userAuthBtn = document.querySelector('.header__list-user');

if (user !== null) {
    userAuthBtn.innerHTML = `
         <span class="header__list-userLogo">${user.login}</span>
         <ul class="header__list-user-menu">
             <li class="header__list-user-login"><span class="header__list-user-exit">Выйти</span></li>
         </ul>
  `;
    let userExitBtn = document.querySelector('.header__list-user-exit');
    userExitBtn.addEventListener('click', () => {
        localStorage.removeItem('user');
        window.location.href = window.location.href;
    });

}