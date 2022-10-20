// Get the modal
var modal2 = document.getElementById("myModal1");
var modalContent2=document.getElementById("modal-content");
var body2= document.getElementById("body1");

// Get the button that opens the modal
var btn2 = document.getElementById("myBtn1");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn2.onclick = function() {
  modal2.style.visibility = "visible";
  modal2.style.backdropFilter="blur(8px)";
  modal2.style.width = "100%";
  modalContent2.style.margin="0% 40%";
  modalContent2.style.width="60%";
  modal2.style.overflowY="auto";
  body2.style.overflowY="hidden";
  body2.style.overflowX="hidden";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal2.style.visibility = "hidden";
  modal2.style.backdropFilter="blur(0px)";
  modal2.style.overflowY="hidden";
  modalContent2.style.margin="0% 100%";
  body2.style.overflowY="auto";
  body2.style.overflowX="hidden";

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal1) {
    modal2.style.visibility = "hidden";
    modal2.style.overflowY="hidden";
    modalContent2.style.margin="0% 100%";
    body2.style.overflowY="auto";
    body2.style.overflowX="hidden";
    body2.style.overflowY="auto";

  }
}

// Get the <span> element that closes the modal
var span_close = document.getElementsById("close");
span_close.onclick = function () {
  modal2.style.display = "none";
  modal2.style.visibility = "hidden";
  modalContent2.style.margin = "0% 100%";
  modalContent2.style.width = "100%";
}


// Get the modal
var modal2 = document.getElementById("myModalEdit");

// Get the button that opens the modal
var btn3 = document.getElementById("myBtn3");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn3.onclick = function () {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

// Get the <span> element that closes the modal
var span_close = document.getElementsById("close");
span_close.onclick = function () {
  modal1.style.display = "none";
}