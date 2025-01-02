function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 40.674, lng: -73.945 },
        zoom: 12,
        styles: [
            { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
            { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
            { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
            // Add more styles as needed
        ],
    });
}

window.onload = function() {
    initMap();
    displayDateTime();
};

function displayDateTime() {
    const now = new Date();
    document.getElementById('date-time').innerText = now.toLocaleString();
}