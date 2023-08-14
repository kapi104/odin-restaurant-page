import './style.css';
import {loadMain} from './loadMain.js';
import {loadMenu} from './loadMenu.js';
import {loadContact} from './loadContact';
import mainImg from './main.jpg';
import mainTxt from './main.txt';
import menuImg from './menu.jpg';
import menuTxt from './menu.txt';
import contactImg from './contact.jpeg';
import contactTxt from './contact.txt';


let firstLoad = true

document.addEventListener('DOMContentLoaded', () => {loadMain(firstLoad, mainImg, mainTxt)}, {once: true})

firstLoad = false


setTimeout(() => {
  let deleteContent = () => {
    document.querySelector('.content').innerHTML = '';
  } 
  
  
    document.querySelector('.main').addEventListener('click', () => {
      deleteContent()
      loadMain(firstLoad, mainImg, mainTxt)
    }, {once: true})
    
    document.querySelector('.menu').addEventListener('click', () => {
      deleteContent()
      loadMenu(menuImg, menuTxt)
    })
    
    document.querySelector('.contact').addEventListener('click', () => {
      deleteContent()
      loadContact(contactImg, contactTxt)
    })
}, 5);



