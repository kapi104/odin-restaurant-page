  const header = () => {
    let element = document.createElement('div');
    element.innerHTML = 'MAIN';
    element.classList.add('header');
    return element;  
  }

  const nav = () => {
    let element = document.createElement('div');
    element.classList.add('nav');
    let links = ['main', 'menu', 'contact']
    let navLinks = ''
    for (let i = 0; i < 3; i++) {
      navLinks = navLinks + `<a href="${links[i]}.html">${links[i]}</a>`
    }
    element.innerHTML = navLinks;
    return element;
  }

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

  const loadMain = (img, txt) => {
    let content = document.querySelector('.content');
    let resImg = new Image()
    resImg.src = img;
    
    content.appendChild(header());
    document.querySelector('.header').appendChild(nav())
    let centerDiv = center();
    content.appendChild(centerDiv);
    centerDiv.appendChild(sideImg()).appendChild(resImg);
    centerDiv.appendChild(sideText(txt));
  }
  

  export default loadMain;