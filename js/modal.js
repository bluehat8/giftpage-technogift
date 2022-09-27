// Get the modal
var modal1 = document.getElementById("myModal");
var modalContent=document.getElementById("modal-content");

// Get the button that opens the modal
var btn1 = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn1.onclick = function() {
  modal1.style.display = "block";
  modal1.style.visibility = "visible";
  modal1.style.width = "100%";
  modalContent.style.margin="0% 40%";
  modalContent.style.width="60%";

}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal1.style.visibility = "hidden";
  modalContent.style.margin="0% 100%";
  modalContent.style.width="100%";

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.visibility = "hidden";
    modalContent.style.margin="0% 100%";
    modalContent.style.width="100%";

  }
}

// Get the <span> element that closes the modal
var span_close = document.getElementsById("close");
span_close.onclick = function() {
  modal1.style.display = "none";
  modal1.style.visibility = "hidden";
  modalContent.style.margin="0% 100%";
  modalContent.style.width="100%";
}


// Get the modal
var modal2 = document.getElementById("myModalEdit");

// Get the button that opens the modal
var btn3 = document.getElementById("myBtn3");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn3.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

// Get the <span> element that closes the modal
var span_close = document.getElementsById("close");
span_close.onclick = function() {
  modal1.style.display = "none";
}