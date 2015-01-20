$(document).ready(function() {
   
  var owl = $(".quotes");

  owl.owlCarousel({
   
  // navigation : true,
  slideSpeed : 300,
  paginationSpeed : 400,
  singleItem:true
   
  });

  // Custom Navigation Events
  $(".next").click(function(){
  owl.trigger('owl.next');
  })
  $(".prev").click(function(){
  owl.trigger('owl.prev');
  })
   
});

