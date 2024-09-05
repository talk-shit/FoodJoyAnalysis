document.addEventListener('DOMContentLoaded', function() {
    // Function to fetch data from your serverless function
    function fetchData() {
        fetch('https://food-joy-analysis.vercel.app/api/calorie-analysis', {
            method: 'POST', // Using POST as specified
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ request: 'Fetch Data' }) // Send any necessary data
        })
        .then(response => response.json()) // Parse JSON response
        .then(data => {
            console.log('Data received:', data);
            // Update webpage content
            document.getElementById('data-display').innerText = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('data-display').innerText = 'Failed to load data.';
        });
    }

    // Optionally, fetch data on an interval if updates are needed regularly
    setInterval(fetchData, 5000); // Fetch data every 5 seconds
    // Fetch data immediately when the page loads
    fetchData();
});
