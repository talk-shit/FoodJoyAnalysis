// This function could be triggered by a webhook or a regular polling mechanism
function fetchData() {
    fetch('https://food-joy-analysis.vercel.app/api/calorie-analysis', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ request: 'Fetch Data' })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Data received:', data);
        document.getElementById('data-display').innerText = JSON.stringify(data, null, 2);
    })
    .catch(error => console.error('Error fetching data:', error));
}

// Call fetchData periodically if needed, or trigger based on specific events
fetchData();
