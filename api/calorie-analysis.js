export default async function handler(req, res) {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', 'https://www.elsasd.com'); // Adjust this to match your security needs
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle OPTIONS request (necessary for CORS preflight)
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    // Handle POST request
    if (req.method === 'POST') {
        const data = req.body;
        console.log('Received data:', data);

        // Here you can process the data, for example, forwarding it to another service
        res.status(200).json({ message: 'Data received successfully', data });
    } else {
        // Respond with method not allowed if not a POST request
        res.status(405).json({ message: 'Only POST requests are allowed' });
    }
}
