// Initialize Typed.js on the span element with class 'text'
var typed = new Typed(".text", {
  strings: [
    "Frontend Developer",
    "Javascript Developer",
    "PHP Developer",
    "Database Administrator",
  ],
  typeSpeed: 80,
  backSpeed: 80,
  backDelay: 1000,
  loop: true,
});

function toggleMenu() {
  document.querySelector(".navbar").classList.toggle("active");
}
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-link");

function toggleMenu() {
  navbar.classList.toggle("active");
}

/* CLOSE MENU ON LINK CLICK */
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");

    /* ACTIVE LINK HIGHLIGHT */
    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
  });
});

document.getElementById('downloadResume').addEventListener("click",function(){
  const link=this.querySelector('a');
  link.href ="Assets/Himanshu_B_Patanvadiya.pdf";
  link.download = "Himanshu_B_Patanvadiya.pdf";
  link.click();
});



// --- SKILLS ANIMATION ON SCROLL ---
const skillItems = document.querySelectorAll(".skill-item");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.4 }
);

skillItems.forEach((item) => observer.observe(item));

// --- PROJECT SECTION ANIMATION ---
const projectCards = document.querySelectorAll(".project-card");

const projectObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

projectCards.forEach((card) => projectObserver.observe(card));

/* ==============================
   SCROLL REVEAL FUNCTIONALITY
   ============================== */

const revealElements = document.querySelectorAll(
  ".reveal-left, .reveal-right, .reveal-top, .reveal-bottom"
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-active");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealElements.forEach((el) => revealObserver.observe(el));

document.getElementById("contactForm").addEventListener("submit", function (e) {
  // fields
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");
  let subject = document.getElementById("subject");
  let message = document.getElementById("message");

  // error fields
  let errName = document.getElementById("errName");
  let errEmail = document.getElementById("errEmail");
  let errPhone = document.getElementById("errPhone");
  let errSubject = document.getElementById("errSubject");
  let errMessage = document.getElementById("errMessage");

  // clear errors
  errName.innerText = "";
  errEmail.innerText = "";
  errPhone.innerText = "";
  errSubject.innerText = "";
  errMessage.innerText = "";

  let isValid = true;

  //Name validation
  if (name.value.trim().length < 3) {
    errName.innerText = "Name must be at least 3 characters";
    isValid = false;
  }
  // Email validation
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value)) {
    errEmail.innerText = "Enter a valid email";
    isValid = false;
  }
  // Phone validation
  phonePattern = /^[6-9]\d{9}$/;
  if (phone.value.trim() === "") {
    errPhone.innerText = "Phone number is required";
    isValid = false;
  } else if (phone.value.trim().length !== 10 || !phonePattern.test(phone.value)) {
    errPhone.innerText = "Enter a valid 10-digit phone number";
    isValid = false;
  }

  // Subject validation
  if (subject.value.trim().length < 5) {
    errSubject.innerText = "Subject must be at least 5 characters";
    isValid = false;
  }
  // Message validation
  if (message.value.trim().length < 10) {
    errMessage.innerText = "Message must be at least 10 characters";
    isValid = false;
  }

  // ❌ stop submit if invalid
  if (!isValid) {
    e.preventDefault();
  }
});
