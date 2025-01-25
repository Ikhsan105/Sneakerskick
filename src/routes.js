const express = require('express');
const router = express.Router();

// Import controller
const AuthController = require('./controller/AuthController');
const ProductController = require('./controller/ProductController');
const OrderController = require('./controller/OrderController');
const UserController = require('./controller/UserController');

// Rute autentikasi
router.post('/login', AuthController.login);
router.post('/register', AuthController.register);

// Rute produk
router.get('/products', ProductController.getAllProducts);
router.get('/products/:id', ProductController.getProductById);
router.post('/products', ProductController.createProduct);
router.put('/products/:id', ProductController.updateProduct);
router.delete('/products/:id', ProductController.deleteProduct);

// Rute pesanan
router.post('/orders', OrderController.createOrder);
router.get('/orders/:id', OrderController.getOrderById);
router.put('/orders/:id', OrderController.updateOrderStatus);
router.delete('/orders/:id', OrderController.deleteOrder);

// Rute pengguna
router.get('/users/:id', UserController.getUserById);
router.put('/users/:id', UserController.updateUser);
router.delete('/users/:id', UserController.deleteUser);

// Rute lainnya
router.get('/', (req, res) => {
  res.send('API is working!');
});

module.exports = router;
