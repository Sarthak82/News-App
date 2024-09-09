const express = require('express');
const cors = require('cors');
const newsRoutes = require('./routes/newsRoutes'); // Ensure this path is correct

const functions = require('firebase-functions');

const app = express();
app.use(cors());
app.use('/api', newsRoutes); // This mounts the newsRoutes at /api

// const PORT = process.env.PORT || 8080;

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

exports.api = functions.https.onRequest(app);
