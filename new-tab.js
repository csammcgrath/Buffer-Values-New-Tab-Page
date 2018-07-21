(function() {
  'use strict';

  const backgroundImages = [
    ['../graphics/backgrounds/epic-iceland.jpg',
      '../graphics/backgrounds/orange-light-in-queenstown-new-zealand.jpg'],
    ['../graphics/backgrounds/jacks-point.jpg',
      '../graphics/backgrounds/tekapo-new-zealand-trey-ratcliff-2.jpg'],
    ['../graphics/backgrounds/trey-ratcliff-walking-alone-and-being-somewhat-lost-on-which-way.jpg',
      '../graphics/backgrounds/auckland-night.jpg'],
    ['../graphics/backgrounds/trey-ratcliff-new-york-inception.jpg',
      '../graphics/backgrounds/bang2.jpg'],
    ['../graphics/backgrounds/ohau-cliff-hawaii-trey-ratcliff.jpg',
      '../graphics/backgrounds/sleeping-in.jpg'],
    ['../graphics/backgrounds/day-17-randy-erebus-halo.jpg',
      '../graphics/backgrounds/sheep-in-new-zealand.jpg'],
    ['../graphics/backgrounds/the-lonely-trinity.jpg',
      '../graphics/backgrounds/the-water-in-autumn.jpg'],
    ['../graphics/backgrounds/morning-with-coffee-in-yellowstone.jpg',
      '../graphics/backgrounds/trey-ratcliff-medieval-village.jpg'],
    ['../graphics/backgrounds/behind-my-house-new-zealand.jpg',
      '../graphics/backgrounds/bonus-pink-sky.jpg'],
    ['../graphics/backgrounds/farewell-san-francisco.jpg',
      '../graphics/backgrounds/seattle.jpg']
  ];
  
  display(initialization());

  function initialization() {
    console.log(document.body);
    let values = document.querySelectorAll('.value');
    let index = createRandomSet();
    let pageValue = values[index.first];

    document.body.classList.add('pictures');
    pageValue.classList.add('is-visible');

    return index;
  }

  function display(index) {
    let {first, second} = index;
    let img = document.createElement('img');

    // Load image
    // We're using a hidden img element to load the image and be able to listen to its
    // load event, in order to prevent visual glitchs which would happen if made visible
    // before; once the load event fires, we smoothly reveal the background. We're not
    // revealing the img element itself because 'object-fit: cover' causes glitches too
    // when animated, so we use a pseudo-element's background with 'background-size: cover'
    // to display the image.
    img.src = backgroundImages[first][second];
    document.body.appendChild(img);

    // Once loaded, reveal it
    // A pseudo-element's styles can't be accessed programmatically, so inserting a new
    // style rule in the stylesheet to set the background dynamically it is! :)
    let fadeImgIn = () => {
      document.styleSheets[1].insertRule(
        `body::before {
           background-image: url(${img.src});
         }`,
      0);

      document.body.classList.add('background-is-loaded');
    };

    (img.complete) ? fadeImgIn() : img.addEventListener('load', fadeImgIn); 
  }

  function random(size) { return Math.floor(Math.random() * Math.floor(size)); }
  function createRandomSet() { return {first: random(backgroundImages.length), second: random(2)}; }
})();
