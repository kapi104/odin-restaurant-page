  const header = () => {
    let element = document.createElement('div');
    element.innerHTML = 'HEADER';
    element.classList.add('header');
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

  export {
    header,
    center,
    sideImg,
    sideText
  }