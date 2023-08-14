

const center = () => {
  let element = document.createElement('div');
  element.classList.add('center');
  return element;
}

const sideImg = () => {
  let element = document.createElement('div');
  element.classList.add('sideImg');
  return element;
}

const sideText = (txt) => {
  let element = document.createElement('div');
  element.innerText = txt;
  element.classList.add('sideText');
  return element;
}

const loadMenu = (img, txt) => {
  let content = document.querySelector('.content');
  let resImg = new Image()
  resImg.src = img;
  
  let centerDiv = center();
  content.appendChild(centerDiv);
  centerDiv.appendChild(sideImg()).appendChild(resImg);
  centerDiv.appendChild(sideText(txt));
}


export {loadMenu};