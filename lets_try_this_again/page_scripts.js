/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("sidebar").style.width = "250px";
  document.getElementById("sidebar_nav").innerHTML = (
    "<a href='#title_page'>Home</a>" +
    "<a href='#about'>About</a>" +
    "<a href='#skills'>Skills</a>" +
    "<a href='#experience_map'>Experience Map</a>" +
    "<a href='#project_gallery'>Project Gallery</a>" +
    "<a href='#contact'>Contact</a>"
    );
  document.getElementById("sidebar").style.backgroundColor = "white";
  document.getElementById("sidebar").style.height = "100vh";
  document.getElementById("sidebar_button").onclick = closeNav;
  document.getElementById("sidebar_button").classList.toggle("change");
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("sidebar").style.width = "50px";
  document.getElementById("sidebar_nav").innerHTML = "";
  document.getElementById("sidebar").style.border = "";
  document.getElementById("sidebar").style.backgroundColor = "hsla(0, 0%, 100%, 0)";
  document.getElementById("sidebar").style.height = "";
  document.getElementById("sidebar_button").onclick = openNav;
  document.getElementById("sidebar_button").classList.toggle("change");
}

/*sidebar button hover color change effect*/
function sidebar_button_out() {
  document.getElementById("bar1").style.backgroundColor = "#017359";
  document.getElementById("bar2").style.backgroundColor = "#017359";
  document.getElementById("bar3").style.backgroundColor = "#017359";
}

function sidebar_button_over() {
  document.getElementById("bar1").style.backgroundColor = "#26147B";
  document.getElementById("bar2").style.backgroundColor = "#26147B";
  document.getElementById("bar3").style.backgroundColor = "#26147B";

}
