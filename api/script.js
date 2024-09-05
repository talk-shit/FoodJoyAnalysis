function fetchData() {
    // URL of your serverless function
    const url = 'https://food-joy-analysis.vercel.app/api/calorie-analysis';

    // Fetch data from the server
    fetch(url, {
        method: 'POST', // or 'GET', depending on your server setup
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ request: 'Fetch Data' }) // Adjust or remove if your API doesn't need a body for GET requests
    })
    .then(response => response.json()) // Convert response to JSON
    .then(data => {
        // Update your webpage's content
        console.log('Data received:', data);
        document.getElementById('data-display').innerText = JSON.stringify(data, null, 2);
    })
    .catch(error => console.error('Error fetching data:', error));
}

// Call fetchData every 5000 milliseconds (5 seconds)
setInterval(fetchData, 5000);
