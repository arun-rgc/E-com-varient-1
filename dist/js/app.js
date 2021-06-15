
function show_sidebar()
{
document.getElementById('category-menu').style.visibility="visible";
}

function hide_sidebar()
{
document.getElementById('category-menu').style.visibility="hidden";
}


function openNav() {
  document.getElementById("mySidebar").style.width = "100%";
  document.getElementById("main").style.marginLeft = "0";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}