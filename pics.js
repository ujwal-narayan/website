var counter = 1;

imgClickAndChange.onclick = function(){
    if(counter == 0){
        document.getElementById("imgClickAndChange").src = "image1.jpg";
        counter++;
    }
    else if(counter == 1){
        document.getElementById("imgClickAndChange").src = "image2.jpg";
        counter++;
    }
    else if(counter == 2){
        document.getElementById("imgClickAndChange").src = "image3.jpg";
        counter ++;
   }
else if(counter == 3){
        document.getElementById("imgClickAndChange").src = "image4.jpg";
        counter=0;
    } 


};
