/*eslint-env browser*/
var isNavbarTogglerPressed=false;

function chnageStylesNavbarTogller(){
    if(!isNavbarTogglerPressed){
            $(".navbar-toggler").css("border-color", "#fff");
            $(".navbar").css("background","rgba(1,1,1,.4)");
            $(".navbar").css("transition", "background .5s");
            isNavbarTogglerPressed=true;
        }else{
            $(".navbar-toggler").css("border-color", "rgba(0,0,0,.1)"); $(".navbar").css("background","rgba(1,1,1,0)");
            $(".navbar").css("transition", "background .5s");
            isNavbarTogglerPressed=false;
        }
};

$(document).ready(function(){
    $(".navbar-toggler").click(function(){
        chnageStylesNavbarTogller();
    });
    
   // zmiana wielkości
    $( window ).resize(function(){
        if(isNavbarTogglerPressed){
          $('.navbar-toggler').click();
        }
    });
    

});