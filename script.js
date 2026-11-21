
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const customerName = document.getElementById("name").value;
    const formMessage = document.getElementById("formMessage");

    formMessage.textContent = "Thank you, " + customerName + "! Your form has been checked.";
    contactForm.reset();
  });
}


const questions = document.querySelectorAll(".faq-question");

questions.forEach(function(question) {
  question.addEventListener("click", function() {
    const faqItem = question.parentElement;
    faqItem.classList.toggle("show");

    const symbol = question.querySelector("span");

    if (faqItem.classList.contains("show")) {
      symbol.textContent = "−";
    } else {
      symbol.textContent = "+";
    }
  });
});
