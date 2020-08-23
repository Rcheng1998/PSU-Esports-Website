$("#blackHoodie").on({
    "mouseover" : function() {
        $("#mainHoodie").attr('src','imgs/merch/PENN_STATE_ESPORTS_Hoodie_BLACK.png');
     },
     "mouseout" : function() {
        $("#mainHoodie").attr('src','imgs/merch/PENN_STATE_ESPORTS_Hoodie_BLUE.png');
     }
   });

$("#greyHoodie").on({
    "mouseover" : function() {
        $("#mainHoodie").attr('src','imgs/merch/PENN_STATE_ESPORTS_Hoodie_GREY.png');
     },
     "mouseout" : function() {
        $("#mainHoodie").attr('src','imgs/merch/PENN_STATE_ESPORTS_Hoodie_BLUE.png');
     }   
});

$("#whiteHoodie").on({
    "mouseover" : function() {
        $("#mainHoodie").attr('src','imgs/merch/PENN_STATE_ESPORTS_Hoodie_WHITE.png');
     },
     "mouseout" : function() {
        $("#mainHoodie").attr('src','imgs/merch/PENN_STATE_ESPORTS_Hoodie_BLUE.png');
     }
});

$("#backJersey").on({
    "mouseover" : function() {
        $("#mainJersey").attr('src','imgs/merch/Jersey_back.png');
     },
     "mouseout" : function() {
        $("#mainJersey").attr('src','imgs/merch/Jersey_front.png');
     }
 });

 $("#blackTShirt").on({
    "mouseover" : function() {
        $("#mainTShirt").attr('src','imgs/merch/Basic_Logo_Tee_BLACK_front.png');
     },
     "mouseout" : function() {
        $("#mainTShirt").attr('src','imgs/merch/Basic_Logo_Tee_BLUE_front.png');
     }
 });

 $("#whiteTShirt").on({
   "mouseover" : function() {
       $("#mainTShirt").attr('src','imgs/merch/Basic_Logo_Tee_WHITE_front.png');
    },
    "mouseout" : function() {
       $("#mainTShirt").attr('src','imgs/merch/Basic_Logo_Tee_BLUE_front.png');
    }
});


 $("#blackTShirt2").on({
    "mouseover" : function() {
        $("#mainTShirt2").attr('src','imgs/merch/PENN_STATE_ESPORTS_Tee_BLACK_front.png');
     },
     "mouseout" : function() {
        $("#mainTShirt2").attr('src','imgs/merch/PENN_STATE_ESPORTS_Tee_BLUE_front.png');
     }
 });

 $("#whiteTShirt2").on({
   "mouseover" : function() {
       $("#mainTShirt2").attr('src','imgs/merch/PENN_STATE_ESPORTS_Tee_WHITE_front.png');
    },
    "mouseout" : function() {
       $("#mainTShirt2").attr('src','imgs/merch/PENN_STATE_ESPORTS_Tee_BLUE_front.png');
    }
});

$("#greyTShirt2").on({
   "mouseover" : function() {
       $("#mainTShirt2").attr('src','imgs/merch/PENN_STATE_ESPORTS_Tee_GREY_front.png');
    },
    "mouseout" : function() {
       $("#mainTShirt2").attr('src','imgs/merch/PENN_STATE_ESPORTS_Tee_BLUE_front.png');
    }
});

AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});