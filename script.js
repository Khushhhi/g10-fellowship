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