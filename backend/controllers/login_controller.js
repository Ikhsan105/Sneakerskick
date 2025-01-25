const bcrypt = require('bcrypt');
const db = require('../config/database'); // Pastikan file database Anda terhubung
const session = require('express-session'); // Untuk mengelola session

// Fungsi Login
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Periksa apakah email ada di database
    const [user] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    if (!user.length) {
      return res.status(404).json({ message: 'Email tidak ditemukan' });
    }

    const foundUser = user[0];

    // Periksa apakah password cocok
    const isPasswordValid = await bcrypt.compare(password, foundUser.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Password salah' });
    }

    // Simpan informasi login di session
    req.session.user = {
      id: foundUser.id,
      email: foundUser.email,
      name: foundUser.name,
      social_provider: foundUser.social_provider,
    };

    return res.status(200).json({
      message: 'Login berhasil',
      user: req.session.user,
    });
  } catch (error) {
    console.error('Error saat login:', error);
    return res.status(500).json({ message: 'Terjadi kesalahan pada server' });
  }
};

// Fungsi Logout
const logout = (req, res) => {
  // Hapus session pengguna
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: 'Gagal logout' });
    }
    res.clearCookie('connect.sid'); // Menghapus cookie session
    return res.status(200).json({ message: 'Logout berhasil' });
  });
};

module.exports = {
  login,
  logout,
};
