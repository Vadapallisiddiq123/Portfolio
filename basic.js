console.log("siddiq")
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
document.getElementById("contact-right").addEventListener("submit", function(event) {
    // Prevent the form from submitting by default
    event.preventDefault();
  
    // Validate form fields
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    
    if (name && email && message) {
      // Change color if all fields are filled out
      document.getElementById("submit").style.backgroundColor = "black";
      // Optionally, submit the form after changing the color
      document.getElementById("name").value='';
      document.getElementById("email").value='';
      document.getElementById("message").value='';
      alert("Form Submitted Successfully")
    } else {
      alert("Please fill out all fields before submitting the form.");
    }
    
  });
// function search()
// {
//     let bg = document.getElementById("submit").style.background="yellow";
// }
function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
