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
        console.log("here")
        $("#mainTShirt").attr('src','imgs/merch/Basic_Logo_Tee_BLACK_front.png');
     },
     "mouseout" : function() {
        $("#mainTShirt").attr('src','imgs/merch/Basic_Logo_Tee_BLUE_front.png');
     }
 });

 $("#whiteTShirt").on({
    "mouseover" : function() {
        console.log("here")
        $("#mainTShirt").attr('src','imgs/merch/Basic_Logo_Tee_WHITE_front.png');
     },
     "mouseout" : function() {
        $("#mainTShirt").attr('src','imgs/merch/Basic_Logo_Tee_BLUE_front.png');
     }
 });