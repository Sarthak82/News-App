const axios = require('axios');
const functions = require('firebase-functions');
require('dotenv').config();

exports.api = async (req, res) => {
    const { keyword = '', country = '', category = '', page = 1 } = req.query;
    
    const apiKey = functions.config().gnews.apikey; // Make sure this is set

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
};
