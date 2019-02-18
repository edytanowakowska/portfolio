

/*SCROLLING**/

$(document).ready(function() {
    $(document).on("scroll", onScroll);

    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 600, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#mainNav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top -200<= scrollPos && refElement.position().top -200 + refElement.height() > scrollPos) {
            $('#mainNav ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}

/***SLIDESHOW***/
var slideIndex =1;
showSlideShow();

function showSlideShow(){
$(document).ready(showImage(slideIndex));
}
function plusIndex(n){
  showImage(slideIndex+=n)
}

function currentSlide(n){
  showImage(slideIndex=n)
}

function showImage(n){
  setTimeout(function(){
  var slide = document.getElementsByClassName("slides");
  var dots= document.getElementsByClassName("dots");
  if(n > slide.length){ slideIndex = 1;}
  if(n < 1){ slideIndex = slide.length;}
  for(var i = 0; i<slide.length;i++){
    slide[i].classList.remove("showMe");
  }
  slide[slideIndex-1].classList.add("showMe");
  for(var i = 0; i<dots.length;i++){
    dots[i].classList.remove("activeDot");
  }
  dots[slideIndex-1].classList.add("activeDot");
}, 50);
}

/***Dynamically Loading***/
//var sectionsLoaded = [false,false,false,false];
//
//$(window).scroll(function() {
//  if(!sectionsLoaded[0]){loadContent('#festivalAnch',"festival.html",0);}
//  if(!sectionsLoaded[1]){loadContent('#newsAnch',"news.html",1);}
//  if(!sectionsLoaded[2]){loadContent('#ticketsWihoutPhoto',"tickets.html",2);}
//  if(!sectionsLoaded[3]){loadContent('#lastEditionsAnch',"lastEditions.html",3);}
//});
//
//
//function loadContent(id, nameOfFile, number){
//  var hT = $(id).offset().top,
//      hH = $(id).outerHeight(),
//      wH = $(window).height(),
//      wS = $(this).scrollTop();
//  if (wS > (hT+hH-wH)){
//    sectionsLoaded[number] = true;
//    $(id).load("sections/"+nameOfFile, function () {
//    	if(id=='#lastEditionsAnch'){
//      		showSlideShow();
//      	}
//    });
//  }
//}

/**VerticalMenu**/
$(document).ready(changeMenu);
var verticalMenuDisplayed = false;
function showVarticalMenu(){
    if(!verticalMenuDisplayed){
      $("#mainNav").removeClass("hidden");
      verticalMenuDisplayed = true;
    }else{
      $("#mainNav").addClass("hidden");
      verticalMenuDisplayed = false;
    }
}

$(window).resize(changeMenu);

function changeMenu() {
    if ($(window).width() < 975) {
      $('#mainNav').addClass('verticalMenu');
      $('#mainNav').removeClass('horizontalMenu');
      $('#mainNav').addClass("hidden");
    } else {
      $('#mainNav').addClass('horizontalMenu');
      $('#mainNav').removeClass('verticalMenu');
      $('#mainNav').removeClass("hidden");
    }
}
