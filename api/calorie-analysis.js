// JavaScript for API 
export default function handler(req, res) {
    console.log("Function received a request.");
    if (req.method === 'POST') {
        console.log("POST request received with body:", req.body);
        res.status(200).json({ message: "Success", data: req.body });
    } else {
        console.log("Received non-POST request.");
        res.status(405).json({ message: "Method Not Allowed" });
    }
}
