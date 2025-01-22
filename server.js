const express = require('express');
const path = require('path');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Handle POST requests to /reset-password
app.post('/reset-password', (req, res) => {
    const { email, oldPassword, newPassword } = req.body;

    console.log('Reset Password Request:', { email, oldPassword, newPassword });

    // Example response to simulate a successful password reset
    res.status(200).json({
        message: 'Password reset successful',
        email: email
    });
});

// Define a route for the root URL ('/')
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Set the port to use (default to 5000)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
