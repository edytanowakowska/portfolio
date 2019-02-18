/*eslint-env browser*/
function hover(element) {
        element.setAttribute('src', './images/products/'+element.id+'A.jpg');
    }

function unhover(element) {
        element.setAttribute('src', './images/products/'+element.id+'.jpg' );
    }

$(function(){
    var numberOfItems = $('.product-cell').length;
    $('.number-of-items span').text(numberOfItems);
    //lazy loading
    $('img.lazy').Lazy({
        effect: 'fadeIn',
        effectTime: 500,
        afterLoad: function(element){
        },
        onError: function(element) {
//            console.log('error loading ' + element.data('src'));
        }
    });    
})