//console.log("js has been loaded");

const menuBtn = document.getElementById("menuBtn");// match const name with id name
const mobileMenu = document.getElementById("mobileMenu");
const closeBtn = document.getElementById("closeBtn")
// "event name", callback function
menuBtn.addEventListener("click", function() {
    //console.log("click")
    mobileMenu.classList.add("active");
}); // end of menu Btn click
closeBtn.addEventListener("click", function() {
    //console.log("click")
    mobileMenu.classList.remove("active");
}); // end of menu Btn click