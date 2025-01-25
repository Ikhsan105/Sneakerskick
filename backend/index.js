const express = require('express');
const cors = require('cors');
const session = require('express-session');
const loginController = require('./controllers/login_controller'); // Pastikan path benar

const app = express();
const port = 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Middleware session
app.use(
  session({
    secret: 'your-secret-key', // Ganti dengan kunci rahasia yang aman
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 }, // Cookie bertahan 30 hari
  })
);

// Route untuk login
app.post('/api/login', loginController.login);

// Route untuk logout
app.post('/api/logout', loginController.logout);

// Jalankan server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
