document.getElementById('contactForm').addEventListener('submit', function(event) {
 event.preventDefault();
let isValid = true;

 // Example validation for name
 const name = document.getElementById('name').value.trim();
 if (name === '') {
 alert('Name is required');
 isValid = false;
 }
 // Add similar checks for email, phone, message...

if (isValid) {
       alert('Thank you for your message!');
 this.reset();
 }
});
