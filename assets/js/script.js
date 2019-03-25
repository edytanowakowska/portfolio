$(function(){
    //opening links to project in new window
    $('.new-window-link').click(function(){
        window.open(this.href);
        return false;
    });
    
    //slow scroll for main button
    $('.main-button-big').click(function(){
      $('html, body').animate({
		scrollTop: $('#my-projects').offset().top - $('#main-nav').height()-30
        }, 400, 'swing'); 
    });
    
    
    //slow scroll for menu links
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
		scrollTop: $($(this).attr('href')).offset().top- $('#main-nav').height()-30
        }, 400, 'swing');
    });
    
    //showing different photos when hovering on project images
    $('.project-image-link').hover(
        function(){
            $(this).children("img").attr("src", $(this).children("img").attr("src").replace(".jpg","alternative.jpg"));
        }, function(){
            $(this).children("img").attr("src", ($(this).children("img").attr("src").replace("alternative.jpg",".jpg")));
        }
    );
    
});
