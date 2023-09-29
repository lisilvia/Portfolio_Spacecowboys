document.addEventListener("click",function (e){
    if(e.target.classList.contains("gallery-item")){
       const src = e.target.getAttribute("src");
       document.querySelector(".modal-img").src = src;
       const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
       myModal.show();
    }
  })
  
  const navEl = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 56) {
        navEl.classList.add('navbar-scrolled')
      } else if (window.scrollY < 56) {
        navEl.classList.remove('navbar-scrolled');
      }
    });
  
    $('.card-inner').click(function () {
    $(this).toggleClass('flipped');
    });
  
    // Form validation using JavaScript
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = document.getElementById('name');
        const lastName = document.getElementById('lastName');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        const nameError = document.getElementById('nameError');
        const lastNameError = document.getElementById('lastNameError');
        const emailError = document.getElementById('emailError');
        const messageError = document.getElementById('messageError');
  
        // Validate name
        if (name.value.trim() === '') {
            nameError.textContent = 'First Name is required';
        } else {
            nameError.textContent = '';
        }
  
        // Validate last name
        if (lastName.value.trim() === '') {
            lastNameError.textContent = 'Last Name is required';
        } else {
            lastNameError.textContent = '';
        }
  
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            emailError.textContent = 'Invalid email format';
        } else {
            emailError.textContent = '';
        }
  
        // Validate message
        if (message.value.trim() === '') {
            messageError.textContent = 'Message is required';
        } else {
            messageError.textContent = '';
        }
  
        // If all fields are valid, you can submit the form here
        if (
            nameError.textContent === '' &&
            lastNameError.textContent === '' &&
            emailError.textContent === '' &&
            messageError.textContent === ''
        ) {
            // Form is valid, you can submit it or take any desired action here
            alert('Form submitted successfully!');
            form.reset(); // Reset the form after submission
        }
    });
  