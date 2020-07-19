$(document).ready(function(){   
  $("a").on('click', function(event) {
      
    if (this.Link !== "") {
      event.preventDefault();

      // Store Link
      var Link = this.Link;
      $('html, body').animate({
        scrollTop: $(Link).offset().top
      }, 2000, function(){
   
        window.location.Link = Link;
      });
    }
  });
});

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  this.Close();
}

const OPTS = {
  fill: 'none',
  radius: 25,
  strokeWidth: { 50: 0 },
  scale: { 0: 1 },
  angle: { 'rand(-35, -70)': 0 },
  duration: 500,
  left: 0, top: 0,
  easing: 'cubic.out' };

