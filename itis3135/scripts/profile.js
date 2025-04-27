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
      const profile = {
        username: 'John Doe',
        email: 'john.doe@example.com'
      };
      $('#username').text(profile.username);
      $('#email').val(profile.email);
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

    loadProfile();
  });
});
