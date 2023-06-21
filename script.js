'use strict';

const modalWindow = document.querySelector('.modal-window');
const Overlay = document.querySelector('.overlay');
const btnCloseModalWindow = document.querySelector('.close-modal-window');
const btnsShowModalWindow = document.querySelectorAll('.show-modal-window');

for (let i = 0; i < btnsShowModalWindow.length; i++) {
     console.log(btnsShowModalWindow[i].textContent);   
}