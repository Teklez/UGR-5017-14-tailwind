
// FOR THE HUMBERGER MENU

const hamburger = document.getElementById("menu-bars");
const menulist = document.getElementById("menu-list");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menulist.classList.toggle("active");
});

document.querySelectorAll(".manu-links").forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.remove("active");
    menulist.classList.remove("active");
  });
});



// CONTACT FORM

function sendEmail() {
    Email.send({
            Host : "smtp.gmail.com",
            Username : "zemenumekiria@gmail.com",
            Password : "@just#another$day",
            To : 'zemenumekiria@gmail.com',
            From : document.getElementById("email").value,
            Subject : "This is the subject",
            Body : "Name: " + document.getElementById("name").value 
            + "<br>" + "Email: " + document.getElementById("email").value 
            + "<br>" + "Subject: " + document.getElementById("subject").value
            + "<br>" + "Message: " + document.getElementById("message").value
    }).then(
      message => alert("Message Sent Successfully.")
    );
}

