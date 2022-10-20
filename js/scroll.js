window.addEventListener("scroll",function(){
    var header=document.querySelector("nav");
    var header1=document.getElementById("navbar");

        header.classList.toggle("abajo",window.scrollY>0);
        if(window.scrollY>0){
        //header.style.backdropFilter="blur(20px)";   
        }
        if(window.scrollY==0){
        //header.style.backdropFilter="blur(0px)";           
        }
       // header.classList.toggle("negro",window.scrollY>1850);
        //header.classList.toggle("negro",window.scrollY==section.clientHeight); 
})


window.sr=ScrollReveal(
    {
    distance: '25px',
	duration: 2500,
	reset: true
    }
);

sr.reveal(".services,.contenedor,.gallery,.gradient-section,.sect-op",{delay:200, origin:'bottom'});