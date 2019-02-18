/*eslint-env browser*/
var numberOfCollectionPhoto = 1;
var numberOfPhotos=4;

function switchPhoto(up){
    if(up){
        numberOfCollectionPhoto++;
        if(numberOfCollectionPhoto>numberOfPhotos){
            numberOfCollectionPhoto=1;
        }
    }else{
        numberOfCollectionPhoto--;
        if(numberOfCollectionPhoto<1){
            numberOfCollectionPhoto=numberOfPhotos;
        }
    }
    changePhoto();
}

function changePhoto(){
    document.getElementById("collection-photo").src = "images/collectionPhoto"+numberOfCollectionPhoto+".jpg";
    makeDots();
}

function makeDots(){
    var dots="";

    for(var i=0;i<numberOfPhotos;i++){
    if(i==numberOfCollectionPhoto-1){
         dots+='<i class="fas fa-circle circle-gallery"></i>';
    }else{
        dots+='<i class="far fa-circle circle-gallery"></i>';
    }
}
 document.getElementById("gallery-dots").innerHTML = dots;
}

//function switchPhotoByNumber(number){
//    numberOfCollectionPhoto = number;
//    changePhoto();
//}

makeDots();
document.getElementById("left-button-gallery").onclick= function(){switchPhoto(false)};
document.getElementById("right-button-gallery").onclick= function(){switchPhoto(true)};
//
//document.getElementsByClassName("circle-gallery").onclick=function(){switchPhotoByNumber(this.);}

