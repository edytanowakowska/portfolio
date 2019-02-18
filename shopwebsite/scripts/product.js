/*eslint-env browser*/
var numberOfProductPhotos = 5;
document.getElementById("small-gallery-photo"+1).style.filter = "brightness(0.6)";

function changeMainPhoto(number){
    document.getElementById("main-photo").src = "images/product/product" + number + ".jpg";  
    for(var i =1; i<=numberOfProductPhotos;i++){
        document.getElementById("small-gallery-photo"+i).style.filter = "none";
    }
    document.getElementById("small-gallery-photo"+number).style.filter = "brightness(0.6)";
}