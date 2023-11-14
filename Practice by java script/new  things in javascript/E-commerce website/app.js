const express = require('express');
const router = express.Router();

// Define your API routes here

module.exports = router;
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the client folder
app.use(express.static(path.join(__dirname, '../client/public')));

// API routes
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

// Serve the React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
