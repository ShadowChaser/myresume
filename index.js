var navMenuAnchorTags=document.getElementsByClassName('navcontetnt'); //Getting the Array of nav bars
var interval; // Declaring interval as Global to use inside Function
for(var i=0;i<navMenuAnchorTags.length;i++){
    
    navMenuAnchorTags[i].addEventListener('click',function(event){   
        event.preventDefault();                                      // To Prevent default animation of going to selected nav
        var targetsectionID=this.textContent.trim().toLowerCase();  // Extracting the text, trimming extra space and making it lowercase to use as the id name of each section
         
        var targetSection=document.getElementById(targetsectionID); // Getting Section for each nav 
        
        
            interval=setInterval(verticalscroll,20,targetSection);  //
    });
}

function verticalscroll(targetSection){
    var counter=0;
    var targetSectionCoordinates=targetSection.getBoundingClientRect();    //Getting the Y axis coordinates for the targetsection
    var target=targetSection.id;   
    console.log(target);

    if(target=='contact' && targetSectionCoordinates.top<=460){
        clearInterval(interval);           //Stopping the scroll
        return;
    } 
    else if(targetSectionCoordinates.top<=0){   //When each section ends it goes to -ve so making it as condition
                clearInterval(interval);           //Stopping the scroll
                return;
            }
            window.scrollBy(0,50);    //Scrolling 0 in x and 50px in Y axis.
}



//Handle Scroll Event
//Check if skill container section is visible or not 
//Ensure initial skill width of skill level is reset to 0
//Start Animation on Every Skill for that we can increase skill width from 0-that percent
//Store Skill level fot that skill -> Html with the help of data attribute


var progressbars=document.querySelectorAll('.skill-progress > div');  // array of bars

var skillsontainer=document.getElementById('skillscontainer'); 

window.addEventListener('scroll', checkScroll);
var animationdone=false;

function initialiseBars(){
    for(let bar of progressbars){  //for each bar
        // console.log(bar)
        bar.style.width=0+'%';
    }
}

initialiseBars();

function fillBars(){
   for(let bar of progressbars){
    //    console.log(bar)
       let targetWidth=bar.getAttribute('data-value');
       let currentWidth=0;
       let interval=setInterval(function(){  //for every Interval increase the width
           if(currentWidth>targetWidth){  
                clearInterval(interval);
                return;
           }
           else{
               currentWidth++;
               bar.style.width=currentWidth+'%';
           }
       },20)
   }
}
function checkScroll(){
    
    
    var coordinates=skillsontainer.getBoundingClientRect(); //Getting coordinates for the skill section
    if(!animationdone && coordinates.top < window.innerHeight){  // checking top height with viewport height
        animationdone=true;
        fillBars();
    }else if(coordinates.top>window.innerHeight){
        animationdone=false;
        initialiseBars();
    }

}

