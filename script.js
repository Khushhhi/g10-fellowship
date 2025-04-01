document.addEventListener('DOMContentLoaded', function() {
  const routes = {
    '/': 'index.html',
    '/apply': 'https://airtable.com/appQU0zWgLPP70fmz/pagHP09q6RLIdzITQ/form',
    '/faq': 'faq.html',
    '/manifesto': 'manifesto.html'
  };
  
  const path = window.location.pathname;
  if (routes[path]) {
    if (path === '/apply') {
      window.location.href = routes[path];
    } else {
      fetch(routes[path])
        .then(response => response.text())
        .then(html => {
          document.getElementById('content').innerHTML = html;
        });
    }
  }
});


document.addEventListener('DOMContentLoaded', () => {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const arrow = question.querySelector('.arrow');

            // Toggle active class on the clicked question/answer
            question.classList.toggle('active');
            answer.classList.toggle('active');

            // Optional: Close other open FAQs (Currently commented out)
            // faqQuestions.forEach(otherQuestion => {
            //     if (otherQuestion !== question && otherQuestion.classList.contains('active')) {
            //         otherQuestion.classList.remove('active');
            //         otherQuestion.nextElementSibling.classList.remove('active');
            //         const otherArrow = otherQuestion.querySelector('.arrow');
            //         if (otherArrow) {
            //              otherArrow.style.transform = 'rotate(0deg)'; // Reset arrow if closing others
            //         }
            //     }
            // });

             // Update arrow direction based on active state
             if(arrow) { // Check if arrow exists
                if (question.classList.contains('active')) {
                     arrow.style.transform = 'rotate(180deg)';
                } else {
                     arrow.style.transform = 'rotate(0deg)';
                }
             }
        });
    });
});

const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector("nav");
  
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
    
    // Prevent scrolling when menu is open
    document.body.classList.toggle("no-scroll");
  });
  
  // Close menu when clicking on a link
  document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      nav.classList.remove("active");
      document.body.classList.remove("no-scroll");
    });
  });
