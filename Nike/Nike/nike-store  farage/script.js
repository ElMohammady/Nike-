// Smooth Scroll for Navbar Links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
  
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 50, // Adjust for navbar height
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Form Validation
  document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
  
    if (!username || !email || !password) {
      alert('Please fill in all fields!');
      return;
    }
  
    if (!validateEmail(email)) {
      alert('Please enter a valid email address!');
      return;
    }
  
    if (password.length < 6) {
      alert('Password must be at least 6 characters long!');
      return;
    }
  
    alert(Welcome, ${username}! Your account has been created.);
  });
  
  // Email Validation Function
  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
  }
  
  // Change Navbar Style on Scroll
  window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  // Select the body to add bubbles
const body = document.body;

// Create a container for the animated background
const background = document.createElement('div');
background.classList.add('background-animation');
body.appendChild(background);

// Generate bubbles dynamically
function createBubble() {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  
  // Randomize bubble position and size
  const size = Math.random() * 40 + 10; // Bubble size between 10px and 50px
  bubble.style.width = ${size}px;
  bubble.style.height = ${size}px;
  bubble.style.left = ${Math.random() * 100}%;

  // Append bubble to the background container
  background.appendChild(bubble);

  // Remove bubble after animation ends
  setTimeout(() => {
    bubble.remove();
  }, 10000); // Matches the "rise" animation duration
}

// Generate a bubble every 300ms
setInterval(createBubble, 300);