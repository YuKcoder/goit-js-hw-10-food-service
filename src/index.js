import './sass/style.scss';

import menu from "./menu.json";
import cardsTpl from "./templates/cards.hbs";


const menuList = document.querySelector('.js-menu');
const body = document.querySelector("body");
const checkbox = document.querySelector('#theme-switch-toggle');

const menuMarkup = cardsTpl(menu);
menuList.insertAdjacentHTML('beforeend', menuMarkup);

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const onChangeTheme = () => {

    if (checkbox.checked) {
        body.classList.add(Theme.DARK);
        body.classList.remove(Theme.LIGHT);
        localStorage.setItem('theme', Theme.DARK);
    } else {
        body.classList.add(Theme.LIGHT);
        body.classList.remove(Theme.DARK);
        localStorage.setItem('theme', Theme.LIGHT);
    }
};

const onCheckboxChecked = () => {

    if (localStorage.getItem('theme') === Theme.DARK) {
        body.classList.add(Theme.DARK);
        checkbox.checked = true;
    }
};

checkbox.addEventListener('change', onChangeTheme);
onCheckboxChecked();
