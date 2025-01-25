const db = require('./backend/config/database'); // Pastikan path ke file database.js benar

db.query('SHOW TABLES', (err, results) => {
  if (err) {
    console.error('Error executing query:', err);
    return;
  }
  console.log('Tables in database:', results);
  db.end(); // Tutup koneksi setelah selesai
});
