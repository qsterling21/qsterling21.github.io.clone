document.addEventListener('DOMContentLoaded', function() {
    // Fix Leaflet marker image size warning
    L.Icon.Default.mergeOptions({
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png'
    });

    // Initialize map
    const map = L.map('map').setView([35.2271, -80.8431], 10);

    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);

    // Hotel locations
    const hotels = [
        {lat: 35.9940, lng: -78.8986, name: "The Durham Hotel"},
        {lat: 35.2271, lng: -80.8431, name: "The Ivey's Hotel"},
        {lat: 35.7796, lng: -78.6382, name: "Aloft Raleigh"},
        {lat: 35.5951, lng: -82.5515, name: "Hyatt Place Asheville"},
        {lat: 35.8437, lng: -78.6438, name: "Renaissance Raleigh"}
    ];

    // markers to the map
    hotels.forEach((hotel) => {
        L.marker([hotel.lat, hotel.lng]).addTo(map)
            .bindPopup(`<b>${hotel.name}</b>`)
            .on('click', () => {
                console.log(`Marker for ${hotel.name} clicked!`);
            });
    });
});
