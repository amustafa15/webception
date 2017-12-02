// this is the function/script for the navigation bar changing color on scroll. it's attached to banner now but maybe not forever
//this is the navbar function for the homepage. 
$(document).ready(function(){
    var scroll_start = 0;
    var startchange = $('.banner'); //this is where the transition starts. it starts at the banner
    var offset = startchange.offset();
    if (startchange.length){
        
        $(document).scroll(function(){
            scroll_start = $(this).scrollTop();
            if(scroll_start > offset.top) {
                $(".navbar-default").css('background', 'white'); //this is the changing color
                $(".navbar-brand").css('color', 'black'); //this is the changing font color
                $(".navbar-dilly").css('color', 'black'); //this is the right side font color
                $(".navbar-default").css('box-shadow', '0 2px 0 0 #000');
            } else {
                $(".navbar-default").css('background', 'transparent'); // this is the starting color
                $(".navbar-brand").css('color', 'white'); // this is the starting font color
                $(".navbar-dilly").css('color', 'white'); // this is the right side font color
                $(".navbar-default").css('box-shadow', 'none');
            }
        });
    }
});
//this is for the newportfolio.html page  need box shadow

$(document).ready(function(){
    var scroll_start = 0;
    var startchange = $('.box'); //this is where the transition starts. it starts at the box
    // so it's '.banner' because banner is a class. #box is a div id so it's a #
    var offset = startchange.offset();
    if (startchange.length){
        
        $(document).scroll(function(){
            scroll_start = $(this).scrollTop();
            if(scroll_start > offset.top) {
                $(".navbar-default").css('background', 'pink'); //this is the changing color
                $(".navbar-brand").css('color', 'white'); //this is the changing font color
                $(".navbar-dilly").css('color', 'white'); //this is the right side font color
                $(".navbar-default").css('box-shadow', '0 2px 0 0 #000');
            } else {
                $(".navbar-default").css('background', 'transparent'); // this is the starting color
                $(".navbar-brand").css('color', 'black'); // this is the starting font color
                $(".navbar-dilly").css('color', 'black'); // this is the right side font color
                $(".navbar-default").css('box-shadow', 'none');
            }
        });
    }
});

// the one below is for the sample page. 

$(document).ready(function(){
    var scroll_start = 0;
    var startchange = $('.box'); //this is where the transition starts. it starts at the box
    // so it's '.banner' because banner is a class. #box is a div id so it's a #
    var offset = startchange.offset();
    if (startchange.length){
        
        $(document).scroll(function(){
            scroll_start = $(this).scrollTop();
            if(scroll_start > offset.top) {
                $(".navbar-default").css('background', 'red'); //this is the changing color
                $(".navbar-brand").css('color', 'white'); //this is the changing font color
                $(".navbar-dilly").css('color', 'white'); //this is the right side font color
                $(".navbar-default").css('box-shadow', '0 2px 0 0 #000');
            } else {
                $(".navbar-default").css('background', 'transparent'); // this is the starting color
                $(".navbar-brand").css('color', 'black'); // this is the starting font color
                $(".navbar-dilly").css('color', 'black'); // this is the right side font color
                $(".navbar-default").css('box-shadow', 'none');
            }
        });
    }
});

// the above function does the same scroll navbar effect but on //the newportfolio.html box shadow

//this function does the navbar disappearing on scroll. do you like it? I don't know how to feel about it. 


// (function() {
    
//        var documentElem = $(document),
//            nav = $('nav'),
//            lastScrollTop = 0;
    
//        documentElem.on('scroll', function() {
//                        var currentScrollTop = $(this).scrollTop();
  //  
    //                        //scroll down
      //                  if ( currentScrollTop > lastScrollTop ) nav.addClass('hidden');
        //                    //scroll up 
          //              else nav.removeClass('hidden');
    //
      //                  lastScrollTop = currentScrollTop;
//   });
//     })();

