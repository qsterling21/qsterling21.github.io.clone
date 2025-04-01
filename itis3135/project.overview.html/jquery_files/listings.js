$(document).ready(function() {
    function loadListings() {
        $.ajax({
            url: 'api/listings', // API endpoint
            type: 'GET',
            success: function(listings) {
                const listingsHtml = listings.map(listing => `
                    <div class="listing">
                        <h4>${listing.name}</h4>
                        <p>${listing.description}</p>
                        <button onclick="viewListingDetails('${listing.id}')">View Details</button>
                    </div>
                `).join('');
                $('#listings-container').html(listingsHtml);
            },
            error: function() {
                $('#listings-container').html('<p>Unable to load listings.</p>');
            }
        });
    }

    function viewListingDetails(listingId) {
        console.log(`Viewing details for listing ${listingId}`);
        // Logic to view details
    }

    loadListings();
});
