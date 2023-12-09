document.addEventListener( 'DOMContentLoaded', function () {
  new Splide('.splide', {
  type          : 'fade',
  autoplay      : 'playing',
  rewind        : true,
  interval      : 5000,
  arrows        : false,
  drag          : false,
  padding       : 50,
  pauseOnHover  : false,
  pauseOnFocus  : false,
  resetProgress : false,
  pagination    : false,
  speed         : 900,
  lazyLoad      : 'nearby',
  }).mount();
});

document.addEventListener( 'DOMContentLoaded', function () {
  new Splide('.splide-phone', {
  type          : 'loop',
  arrows        : false,
  drag          : true,
  pagination    : true,
  speed         : 900,
  lazyLoad      : 'nearby',
  }).mount();
});
