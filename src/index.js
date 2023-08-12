import './style.css';
import {header, center, sideImg, sideText} from './load.js';
import restaurant from './restaurant.jpg';
import txt from './description.txt';

console.log(restaurant);
let content = document.querySelector('.content');
let resImg = new Image()
resImg.src = restaurant;
console.log(resImg);

content.appendChild(header());
let centerDiv = center();
content.appendChild(centerDiv);
centerDiv.appendChild(sideImg()).appendChild(resImg);
centerDiv.appendChild(sideText(txt));
