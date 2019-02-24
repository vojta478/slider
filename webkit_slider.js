//next slide
var slide = 1;
//total slides
var slides = 2;
function changeslide(){
    switch(slide){
        case 1:
            //url for slide 1
            slide1url = "/img/dummies/slides/1.webified.jpg";
            //title for slide 1
            slide1title = "Guinea Pig";
            document.getElementById("sliderimg").style.backgroundImage="url(\""+slide1url+"\")";
            document.getElementById("slidertitle").innerHTML=slide1title;
            document.getElementById("slidernum").innerHTML=slide+"/"+slides;
            if(slide == slides){
                slide = 1;
            }else{
                slide++;
            }
            break;
        case 2:
            //url for slide 2
            slide2url = "/img/dummies/slides/2.webified.jpg";
            //title for slide 2
            slide2title = "Carnivorous Flower";
            document.getElementById("sliderimg").style.backgroundImage="url(\""+slide2url+"\")";
            document.getElementById("slidertitle").innerHTML=slide2title;
            document.getElementById("slidernum").innerHTML=slide+"/"+slides;
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
//time in ms to automatically change slide
setInterval(changeslide, 8000);
