document.addEventListener('DOMContentLoaded', function() {
    var map = L.map('map').setView([35.2271, -80.8431], 10); // Center the map and set the zoom level

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);

    // Example locations as an array of objects
    const locations = [
        {lat: 35.9940, lng: -78.8986, name: "The Durham Hotel"},
        {lat: 35.2271, lng: -80.8431, name: "The Ivey's Hotel"},
        {lat: 35.7796, lng: -78.6382, name: "Aloft Raleigh"},
        {lat: 35.5951, lng: -82.5515, name: "Hyatt Place Asheville"},
        {lat: 35.8437, lng: -78.6438, name: "Renaissance Raleigh"}
    ];

    // Loop through the locations and add markers to the map
    locations.forEach(function(location) {
        var marker = L.marker([location.lat, location.lng]).addTo(map)
            .bindPopup(`<b>${location.name}</b>`);

        // Adding a click listener to the marker
        marker.on('click', function(e) {
            handleMarkerClick(location);
        });
    });

    function handleMarkerClick(location) {
        console.log(`Marker for ${location.name} clicked!`);
        // Additional actions can be added here, such as displaying detailed information
        // or redirecting to a detailed page about the hotel/location
    }
});


