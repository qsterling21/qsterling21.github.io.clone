window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-include]").forEach(el => {
      fetch(el.getAttribute("data-include"))
        .then(res => res.text())
        .then(data => {
          el.innerHTML = data;
          const event = new Event("contentLoaded");
          el.dispatchEvent(event);
        });
    });
  
    $(document).ready(function () {
      function loadProfile() {
        $.ajax({
          url: 'api/profile',
          type: 'GET',
          success: function (profile) {
            $('#username').text(profile.username);
            $('#email').val(profile.email);
          },
          error: function () {
            alert('Error loading profile.');
          }
        });
      }
  
      $('form').submit(function (event) {
        event.preventDefault();
        const name = $('#name').val().trim();
        const email = $('#email').val().trim();
        const phone = $('#phone').val().trim();
  
        if (name === '') {
          alert('Name cannot be empty.');
          return;
        }
  
        $('#message').show();
        setTimeout(() => $('#message').fadeOut(), 3000);
        console.log(`Profile submitted: ${name}, ${email}, ${phone}`);
      });
  
      $('#updateProfile').on('click', function () {
        const email = $('#email').val();
        console.log(`Profile updated with email: ${email}`);
      });
  
      loadProfile();
    });
  });
  