const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// POST endpoint to handle form submission
app.post('/reset-password', (req, res) => {
    const { email, oldPassword, newPassword } = req.body;

    console.log('Received email:', email);  // Log email to console
    console.log('Old Password:', oldPassword);
    console.log('New Password:', newPassword);

    // Validate passwords (add your custom logic here)
    if (newPassword.length < 7) {
        return res.status(400).send({ message: 'New password must be at least 7 characters long.' });
    }

    // Simulating a successful response from the backend
    res.status(200).send({ message: 'Password reset successfully!' });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
