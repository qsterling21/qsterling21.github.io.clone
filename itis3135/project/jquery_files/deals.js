$(document).ready(function() {
    // Function to load deals from the server
    function loadDeals() {
        $.ajax({
            url: 'api/deals', // Adjust this URL based on your API
            type: 'GET',
            dataType: 'json',
            success: function(deals) {
                const dealsContent = deals.map(createDealHtml).join('');
                $('#deals').html(dealsContent);
            },
            error: function() {
                $('#deals').html('<p>Error loading deals. Please try again later.</p>');
            }
        });
    }

    // Function to construct HTML for each deal
    function createDealHtml(deal) {
        return `
            <div class="deal">
                <h3>${deal.title}</h3>
                <p>${deal.description}</p>
                <p><strong>Discount: ${deal.discount}%</strong></p>
                <button class="book-btn" data-hotel="${deal.title}" data-discount="${deal.discount}">Book Now</button>
            </div>
        `;
    }

    // Event listener for "Book Now" buttons
    $('#deals').on('click', '.book-btn', function() {
        var hotelName = $(this).data('hotel');
        var discount = $(this).data('discount');

        // Redirect to the booking page with query parameters for hotel and discount
        window.location.href = `booking.html?hotel=${encodeURIComponent(hotelName)}&discount=${encodeURIComponent(discount)}`;
    });

    // Initial load of deals
    loadDeals();
});
