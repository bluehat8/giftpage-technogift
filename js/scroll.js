window.addEventListener("scroll",function(){
    var header=document.querySelector("nav");
        header.classList.toggle("abajo",window.scrollY>0);     
       // header.classList.toggle("negro",window.scrollY>1850);
        //header.classList.toggle("negro",window.scrollY==section.clientHeight); 
})


window.sr=ScrollReveal(
    {
    distance: '25px',
	duration: 2000,
	reset: true
    }
);

sr.reveal(".gallery",{delay:200, origin:'bottom'});