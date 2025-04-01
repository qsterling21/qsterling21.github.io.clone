$(document).ready(function() {
    $('#booking-form').submit(function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Validate the required inputs to ensure they are not empty and correctly formatted
        if (validateForm()) {
            // Hide the form to display the confirmation message
            $(this).hide();

            // Append a confirmation message to the 'main' element
            $('main').append(`
                <div id="confirmation" style="padding: 10px; background-color: #f4f4f4; border: 1px solid #ccc; margin-top: 20px; text-align: center;">
                    <p>Booking complete! Your stay is booked from <strong>${$('#check-in').val()}</strong> to <strong>${$('#check-out').val()}</strong>.</p>
                    <button id="cancelBooking" style="padding: 5px 10px; background-color: #dc3545; color: white; border: none; cursor: pointer;">Cancel</button>
                </div>
            `);

            // Event handler for the Cancel button
            $('#cancelBooking').click(function() {
                $('#confirmation').remove(); // Remove the confirmation message
                $('#booking-form').show();   // Show the form again
                $('#booking-form')[0].reset(); // Reset the form fields
            });
        }
    });

    function validateForm() {
        let isValid = true;
        const email = $('#email').val();
        const checkIn = $('#check-in').val();
        const checkOut = $('#check-out').val();

        if (!$('#name').val() || !validateEmail(email) || !checkIn || !checkOut) {
            alert('Please fill in all required fields with valid information.');
            isValid = false;
        }

        if (isValid && new Date(checkIn) >= new Date(checkOut)) {
            alert('Check-out date must be after the check-in date.');
            isValid = false;
        }

        return isValid;
    }

    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
});


