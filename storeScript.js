document.addEventListener('DOMContentLoaded', function() {

  const modal = document.getElementById("contactModal");

  const btn = document.getElementById("inquireBtn");

  const span = document.getElementsByClassName("close")[0];

  if (btn) {
    btn.onclick = function() {
      modal.style.display = "block";
    }
  }

  if (span) {
    span.onclick = function() {
      modal.style.display = "none";
    }
  }

  // When the user clicks anywhere outside of the modal content, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
});