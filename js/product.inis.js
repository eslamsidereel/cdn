var elem = document.querySelector('.grid-jetaime');
var iso = new Isotope( elem, {
  // options
  itemSelector: '.grid-item-jetaime',
  layoutMode: 'masonry',
  masonry: {
		columnWidth: 40,
		isFitWidth: true,
		percentPosition: true,
	}
});