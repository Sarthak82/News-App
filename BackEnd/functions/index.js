const functions = require('firebase-functions');
const axios = require('axios');

// Cloud Function
exports.api = functions.https.onRequest(async (req, res) => {
    const { keyword = '', country = '', category = '', page = 1 } = req.query;

    // Fetch API Key from Firebase environment configuration
    const config = functions.config();
    console.log('Config:', config); // Add this line for debugging
    const apiKey = config.gnews?.apikey;

    if (!apiKey) {
        return res.status(500).json({ error: "Missing GNews API key in configuration" });
    }

    try {
        const response = await axios.get('https://gnews.io/api/v4/search', {
            params: {
                q: keyword,
                country: country,
                category: category,
                page: page,
                apikey: apiKey
            }
        });

        if (response.status !== 200) {
            return res.status(response.status).json({ error: "Failed to fetch news from GNews API" });
        }

        res.json(response.data);
    } catch (error) {
        console.error('Error fetching news:', error.message);
        res.status(500).json({ error: "Error fetching the news. Please try again later." });
    }
});
