$(document).ready(function() {
    function loadProfile() {
        $.ajax({
            url: 'api/profile', // API endpoint
            type: 'GET',
            success: function(profile) {
                $('#username').text(profile.username);
                $('#email').val(profile.email);
            },
            error: function() {
                alert('Error loading profile.');
            }
        });
    }

    $('#updateProfile').on('click', function() {
        const email = $('#email').val();
        // Update logic here
        console.log(`Profile updated with email ${email}`);
    });

    loadProfile();
});
