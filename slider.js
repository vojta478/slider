//next slide
var slide = 1;
//total slides
var slides = 2;
function changeslide(){
    switch(slide){
        case 1:
            //slide 1 title
            document.getElementById("slidertitle").innerHTML="Guinea Pig";
            document.getElementById("slidernum").innerHTML=slide+"/"+slides;
            if(slide == 1){
                document.getElementById("sliderimg1").style.opacity="1";
                document.getElementById("sliderimg"+slides).style.opacity="0";
            }else{
                document.getElementById("sliderimg"+slide).style.opacity="1";
                document.getElementById("sliderimg"+(slide-1)).style.opacity="0";
            }
            if(slide == slides){
                slide = 1;
            }else{
                slide++;
            }
            break;
        case 2:
            //slide 2 title
            document.getElementById("slidertitle").innerHTML="Carnivorous Flower";
            document.getElementById("slidernum").innerHTML=slide+"/"+slides;
            if(slide == 1){
                document.getElementById("sliderimg1").style.opacity="1";
                document.getElementById("sliderimg"+slides).style.opacity="0";
            }else{
                document.getElementById("sliderimg"+slide).style.opacity="1";
                document.getElementById("sliderimg"+(slide-1)).style.opacity="0";
            }
            if(slide == slides){
                slide = 1;
            }else{
                slide++;
            }
            break;
        default:
            slide = 1;
            console.error("Fatal Error: Invalid slide!");
            changeslide();
            break;
    }
}
changeslide();
setInterval(changeslide, 8000);
