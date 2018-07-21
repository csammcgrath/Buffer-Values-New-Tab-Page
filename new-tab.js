(async () => {
  const {backgroundImages} = await import('./content.js');
  
  document.addEventListener('load', display(initialization()));

  function initialization() {
    let values = document.body.getElementsByClassName('value');
    let index = createRandomSet();
    let pageValue = values[index.first];

    document.body.classList.add('pictures');
    pageValue.classList.add('is-visible');

    return index;
  }

  function display(index) {
    let {first, second} = index;
    let img = document.createElement('img');

    img.src = backgroundImages[first][second];
    document.body.appendChild(img);

    let fadeImgIn = () => {
      document.styleSheets[1].insertRule(
        `body::before {
           background-image: url(${img.src});
         }`,
      0);

      document.body.classList.add('background');
    };

    (img.complete) ? fadeImgIn() : img.addEventListener('load', fadeImgIn); 
  }

  function random(size) { return Math.floor(Math.random() * Math.floor(size)); }
  function createRandomSet() { return {first: random(backgroundImages.length), second: random(2)}; }
})();
