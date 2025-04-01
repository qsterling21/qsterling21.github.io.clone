document.addEventListener('DOMContentLoaded', function() {
    // Initialize the map on the 'map' div with a center and zoom level
    var map = L.map('map').setView([35.2271, -80.8431], 10);

    // Add OpenStreetMap tiles to the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);

    // Array of hotel data including latitude, longitude, and name
    const hotels = [
        {lat: 35.9940, lng: -78.8986, name: "The Durham Hotel"},
        {lat: 35.2271, lng: -80.8431, name: "The Ivey's Hotel"},
        {lat: 35.7796, lng: -78.6382, name: "Aloft Raleigh"},
        {lat: 35.5951, lng: -82.5515, name: "Hyatt Place Asheville"},
        {lat: 35.8437, lng: -78.6438, name: "Renaissance Raleigh"}
    ];

    // Iterate over the hotels array to create and add markers to the map
    hotels.forEach(function(hotel) {
        var marker = L.marker([hotel.lat, hotel.lng]).addTo(map)
            .bindPopup(`<b>${hotel.name}</b>`);  // Bind a popup with the hotel name

        // Attach a click event listener to each marker
        marker.on('click', function(e) {
            handleMarkerClick(hotel);  // Handle click event by calling handleMarkerClick
        });
    });

    // Function to handle marker click events
    function handleMarkerClick(hotel) {
        console.log(`Marker for ${hotel.name} clicked!`);
        // This function could be expanded to display detailed information in a sidebar
        // or open a modal window with more details about the hotel
    }
});
// This code initializes a Leaflet map, adds OpenStreetMap tiles, and places markers for hotels in North Carolina.
// Each marker has a popup with the hotel name, and clicking a marker logs the hotel name to the console.


