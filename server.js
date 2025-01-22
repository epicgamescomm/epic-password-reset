const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors for Step 2

const app = express();

// Middleware
app.use(cors()); // Enable CORS for cross-origin requests (Step 2)
app.use(bodyParser.json()); // Parse incoming JSON data
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files

// Root Route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Reset Password Route (Add Step 3 here)
app.post('/reset-password', (req, res) => {
  console.log('Request received:', req.body); // Debug logging
  const { email, oldPassword, newPassword } = req.body;

  // Replace this with your real password reset logic
  if (!email || !oldPassword || !newPassword) {
    console.error('Missing fields in request:', req.body); // Log missing fields
    return res.status(400).json({ error: 'All fields are required' });
  }

  console.log(`Password reset for email: ${email}`);
  res.json({ message: 'Password reset successful' });
});

// Server Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
