// deals.js (Static version/ QTS)

$(document).ready(function () {
    // Function to create HTML for each deal
    function createDealHtml(deal) {
        return `
            <div class="deal">
                <h3 class="deal-heading">${deal.title}</h3>
                <p>${deal.description}</p>
                <p><strong>Discount: ${deal.discount}%</strong></p>
                <button class="book-btn" data-hotel="${deal.title}" data-discount="${deal.discount}">Book Now</button>
            </div>
        `;
    }

    // Define static deals data
    const deals = [
        {
            id: 1,
            title: "Weekend Getaway Special at The Durham Hotel",
            description: "Enjoy a 20% discount on weekend stays this month. Perfect for a relaxing weekend near the historic sites of Durham.",
            discount: 20
        },
        {
            id: 2,
            title: "Extended Stay Discount at Aloft Raleigh",
            description: "Stay for more than 7 nights and receive a 25% discount. Ideal for longer assignments or projects.",
            discount: 25
        }
    ];

    // Generate and display the deals
    const dealsContent = deals.map(createDealHtml).join('');
    $('#deals').html(dealsContent);

    // Handle button click to redirect to booking page
    $('#deals').on('click', '.book-btn', function () {
        const hotelName = $(this).data('hotel');
        const discount = $(this).data('discount');

        // Redirect with query parameters
        window.location.href = `booking.html?hotel=${encodeURIComponent(hotelName)}&discount=${encodeURIComponent(discount)}`;
    });
});
