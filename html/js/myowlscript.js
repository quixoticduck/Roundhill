$(document).ready(function() {
   
  var owl = $(".quotes");

  owl.owlCarousel({
   
  // navigation : true,
  slideSpeed : 300,
  paginationSpeed : 400,
  singleItem:true,
  stopOnHover: true,
  autoPlay: 4000
   
  });

  // Custom Navigation Events
  $(".next").click(function(){
  owl.trigger('owl.next');
  })
  $(".prev").click(function(){
  owl.trigger('owl.prev');
  })
   
});

//  navigation : true, // Show next and prev buttons
//  pagination: true,
//  items: 1,
//  autoPlay : true,

// "singleItem:true" is a shortcut for:
// items : 1,
// itemsDesktop : false,
// itemsDesktopSmall : false,
// itemsTablet: false,
// itemsMobile : false