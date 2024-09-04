export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    // Here you can process the data, for example, forwarding it to another service
    console.log('Received data:', data);

    res.status(200).json({ message: 'Data received successfully', data });
  } else {
    res.status(405).json({ message: 'Only POST requests are allowed' });
  }
}
