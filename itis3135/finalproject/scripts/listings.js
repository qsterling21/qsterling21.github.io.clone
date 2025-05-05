$(document).ready(function () {
    function loadListings() {
        $.ajax({
            url: 'api/listings', // Replace with your actual API endpoint or JSON path
            type: 'GET',
            success: function (listings) {
                const listingsHtml = listings.map((listing) => `
                    <div class="listing">
                        <h4>${listing.name}</h4>
                        <p>${listing.description}</p>
                        <button onclick="viewListingDetails('${listing.id}')">View Details</button>
                    </div>
                `).join('');
                $('#listings-container').html(listingsHtml);
            },
            error: function () {
                $('#listings-container').html('<p>Unable to load listings.</p>');
            }
        });
    }

    loadListings();
});

// Example helper function for the button (optional)
function viewListingDetails(id) {
    alert("Showing details for listing ID: " + id);
}
