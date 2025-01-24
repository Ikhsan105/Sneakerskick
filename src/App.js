import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import NewArrival from './components/NewArrival';
import ShoeDetails from './components/ShoeDetails';
import BestCollection from './components/BestCollection';
import About from './components/About';
import Cart from './components/Cart';
import Favourite from './components/Favourites';
import Profile from './components/profile';
import Address from './components/Address';
import ChangePassword from './components/ChangePassword';
import OrderHistory from './components/OrderHistory';
import AdminDashboard from './components/Admin/AdminDashboard';
import AdminProducts from './components/Admin/AdminProducts';
import AdminOthers from './components/Admin/AdminOthers';
import ProductDetails from './components/ProductDetails';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  const [role, setRole] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Cek status login saat aplikasi pertama kali dimuat
  useEffect(() => {
    const storedRole = localStorage.getItem('role');
    if (storedRole) {
      setRole(storedRole);
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (userRole) => {
    localStorage.setItem('role', userRole);
    setRole(userRole);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('role');
    setRole('');
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Rute untuk admin */}
        <Route
          path="/admin/AdminDashboard"
          element={
            <ProtectedRoute isAllowed={role === 'admin'}>
              <AdminDashboard onLogout={handleLogout} />
            </ProtectedRoute>
          }
        />

        {/* Rute untuk user */}
        <Route
          path="/"
          element={
            <ProtectedRoute isAllowed={role === 'user'}>
              <Home isLoggedIn={isLoggedIn} onLogout={handleLogout} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/new-arrival"
          element={
            <NewArrival isLoggedIn={isLoggedIn} onLogout={handleLogout} />
          }
        />
        <Route path="/details/:id" element={<ShoeDetails />} />
        <Route
          path="/best-collection"
          element={
            <BestCollection isLoggedIn={isLoggedIn} onLogout={handleLogout} />
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/cart"
          element={<Cart isLoggedIn={isLoggedIn} onLogout={handleLogout} />}
        />
        <Route path="/favourites" element={<Favourite />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/address" element={<Address />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/order-history" element={<OrderHistory />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/admin/products" element={<AdminProducts />} />
        <Route path="/admin/others" element={<AdminOthers />} />

        {/* Rute login */}
        <Route
          path="/login"
          element={<Login onLogin={handleLogin} />}
        />

        {/* Rute fallback */}
        <Route
          path="*"
          element={
            role === 'admin' ? (
              <Navigate to="/admin/AdminDashboard" />
            ) : role === 'user' ? (
              <Navigate to="/" />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
