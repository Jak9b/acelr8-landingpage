var border = document.getElementById("border1");
var values = [document.getElementById("value1"), document.getElementById("value2"), document.getElementById("value3"), document.getElementById("value4"), document.getElementById("value5"), document.getElementById("value6"), document.getElementById("value7"), document.getElementById("value8"), document.getElementById("value9"), document.getElementById("value10")];
var pictures = [document.getElementById("b1b"), document.getElementById("b2b"), document.getElementById("b3b"), document.getElementById("b4b"), document.getElementById("b5b")];

var dropDown = document.getElementById("logo");
var backB = document.getElementById("ddButton");
var navBox = document.getElementById("ddBox");

console.log(window.innerWidth);

if(window.innerWidth > 920) {
    var sizeUp = function() {
        if(window.innerWidth > 1340) {
            border.style.width = 1220 + "px";
            border.style.height = 620 + "px";
            border.style.marginLeft = 100 + "px";
        
            pictures[0].style.width = 150 + "px";
            pictures[0].style.height = 250 + "px";
            pictures[1].style.width = 150 + "px";
            pictures[1].style.height = 250 + "px";
            pictures[2].style.width = 150 + "px";
            pictures[2].style.height = 250 + "px";
            pictures[3].style.width = 200 + "px";
            pictures[3].style.height = 200 + "px";
            pictures[4].style.width = 200 + "px";
            pictures[4].style.height = 200 + "px";
        }
    
        else {
            border.style.width = 900 + "px";
            border.style.height = 400 + "px";
            border.style.marginLeft = 4 + "%";
        
            pictures[0].style.width = 80 + "px";
            pictures[0].style.height = 150 + "px";
            pictures[1].style.width = 80 + "px";
            pictures[1].style.height = 150 + "px";
            pictures[2].style.width = 80 + "px";
            pictures[2].style.height = 150 + "px";
            pictures[3].style.width = 100 + "px";
            pictures[3].style.height = 100 + "px";
            pictures[4].style.width = 100 + "px";
            pictures[4].style.height = 100 + "px";
        } 
    
        if(window.innerWidth >= 1225) {
            for(i = 0; i < 10; i++) {
                values[i].style.display = "none";
            }
        }
    
        for(i = 0; i < 5; i++) {
                pictures[i].style.display = "block";
            }
        if(window.innerWidth > 1340) {
            pictures[0].style.marginLeft = 70 + "px";
            pictures[0].style.marginTop = -300 + "px";
            pictures[1].style.marginLeft = 1000 + "px";
            pictures[1].style.marginTop = -10 + "px";
            pictures[2].style.marginLeft = 1000 + "px";
            pictures[2].style.marginTop = -300 + "px";
            pictures[3].style.marginLeft = 500 + "px";
            pictures[3].style.marginTop = -10 + "px";
            pictures[4].style.marginLeft = 50 + "px";
            pictures[4].style.marginTop = 0 + "px";
        }
    
        else {
            pictures[0].style.marginLeft = 50 + "px";
            pictures[0].style.marginTop = -330 + "px";
            pictures[1].style.marginLeft = 750 + "px";
            pictures[1].style.marginTop = -130 + "px";
            pictures[2].style.marginLeft = 750 + "px";
            pictures[2].style.marginTop = -330 + "px";
            pictures[3].style.display = "none";
            pictures[4].style.marginLeft = 30 + "px";
            pictures[4].style.marginTop = -100 + "px";
        }
      }
    }

if(window.innerWidth > 925) {
    var sizeDown = function() {
        border.style.width = 400 + "px";
        border.style.height = 400 + "px";
        border.style.marginLeft = 33 + "%";
        if(window.innerWidth <= 930 && window.innerWidth >= 810) {
           border.style.marginLeft = 270 + "px"; 
        }
    
        if(window.innerWidth >= 1225) {
            for(i = 0; i < 10; i++) {
                values[i].style.display = "block";
            }
        }
    
        for(i = 0; i < 5; i++) {
                pictures[i].style.display = "none";
            }
    }
}


if(window.innerWidth <= 800) {
    var openDD = function() {
        navBox.style.display = "block";
   }
    
    var closeDD = function() {
        navBox.style.display = "none";
    }
}
