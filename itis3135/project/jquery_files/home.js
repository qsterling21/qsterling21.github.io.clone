$(document).ready(function() {
    // Function to load featured listings dynamically
    function loadFeaturedListings() {
        $.ajax({
            url: 'data/featured_listings.json',  // Ensure this URL correctly points to your JSON file
            method: 'GET',
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                var listingsHTML = '<div class="listings-grid">';  // Wrap listings in a grid container for better layout
                // Loop through the data and create HTML for each listing
                $.each(data, function(index, listing) {
                    listingsHTML += '<div class="listing-item">';
                    listingsHTML += '<h3>' + listing.name + '</h3>';
                    listingsHTML += '<p>' + listing.description + '</p>';
                    listingsHTML += '<p class="hospital-info">Nearby Hospital: ' + listing.hospital + ' (' + listing.proximity + ')</p>';
                    listingsHTML += '</div>';
                });
                listingsHTML += '</div>';
                $('#listings-container').html(listingsHTML);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.error("Failed to load listings: " + textStatus + ", " + errorThrown);
                $('#listings-container').html('<p>Unable to load listings. Please check back later.</p>');
            }
        });
    }

    // Call the function to load listings on page load
    loadFeaturedListings();
});

