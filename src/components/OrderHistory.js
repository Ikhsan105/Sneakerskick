import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const OrderHistory = () => {
  const [activeTab, setActiveTab] = useState('Belum Bayar');

  const tabs = [
    'Belum Bayar',
    'Dikemas',
    'Dikirim',
    'Selesai',
    'Dibatalkan',
    'Pengembalian Barang',
  ];

  const orders = [
    {
      id: 1,
      status: 'Belum Bayar',
      product: {
        name: 'Nike Dunk Low Shoes variant black and white',
        size: 40,
        quantity: 2,
        price: 3098000,
        imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/90943898/Nike_Dunk_Low.png',
      },
    },
    {
      id: 2,
      status: 'Dikemas',
      product: {
        name: 'Nike Dunk Low Shoes variant black and white',
        size: 40,
        quantity: 2,
        price: 3098000,
        imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/90943898/Nike_Dunk_Low.png',
      },
    },
    {
      id: 3,
      status: 'Dikirim',
      product: {
        name: 'Nike Dunk Low Shoes variant black and white',
        size: 40,
        quantity: 2,
        price: 3098000,
        imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/90943898/Nike_Dunk_Low.png',
        shipping: {
          courier: 'J&T EXPRESS',
          location: 'Kalimantan Timur',
        },
      },
    },
    {
      id: 4,
      status: 'Selesai',
      product: {
        name: 'Nike Dunk Low Shoes variant black and white',
        size: 40,
        quantity: 2,
        price: 3098000,
        imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/90943898/Nike_Dunk_Low.png',
      },
    },
    {
      id: 5,
      status: 'Dibatalkan',
      product: {
        name: 'Nike Dunk Low Shoes variant black and white',
        size: 40,
        quantity: 2,
        price: 3098000,
        imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/90943898/Nike_Dunk_Low.png',
      },
    },
    {
      id: 6,
      status: 'Pengembalian Barang',
      product: {
        name: 'Nike Dunk Low Shoes variant black and white',
        size: 40,
        quantity: 2,
        price: 3098000,
        imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/90943898/Nike_Dunk_Low.png',
      },
    },
  ];

  const filteredOrders = orders.filter((order) => order.status === activeTab);

  return (
    <div style={styles.container}>
      <aside style={styles.sidebar}>
        <div style={styles.userInfo}>
          <h3 style={styles.username}>Udin109</h3>
          <Link to="/edit-profile" style={styles.editProfileLink}>
            ubah profil
          </Link>
        </div>
        <nav style={styles.nav}>
          <Link to="/profile" style={styles.navLink}>
            Profil
          </Link>
          <Link to="/address" style={styles.navLink}>
            Alamat
          </Link>
          <Link to="/change-password" style={styles.navLink}>
            Ubah Password
          </Link>
          <Link to="/order-history" style={{ ...styles.navLink, ...styles.active }}>
            History Pesanan
          </Link>
        </nav>
      </aside>

      <main style={styles.mainContent}>
        <div style={styles.tabContainer}>
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                ...styles.tabButton,
                color: activeTab === tab ? 'red' : '#333',
                borderBottom: activeTab === tab ? '2px solid red' : 'none',
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        <div style={styles.orderList}>
          {filteredOrders.map((order) => (
            <div key={order.id} style={styles.orderCard}>
              <img src={order.product.imageUrl} alt={order.product.name} style={styles.productImage} />
              <div style={styles.productDetails}>
                <h3 style={styles.productName}>{order.product.name}</h3>
                <p style={styles.productInfo}>Size: {order.product.size}</p>
                <p style={styles.productInfo}>x{order.product.quantity}</p>
              </div>
              <div style={styles.orderSummary}>
                {activeTab === 'Dikirim' && (
                  <>
                    <p style={styles.statusText}>Status: Pesanan dalam proses pengiriman</p>
                    <p style={styles.shippingInfo}>
                      <strong>{order.product.shipping.courier}</strong>
                    </p>
                    <p style={styles.shippingInfo}>
                      Lokasi: <strong>{order.product.shipping.location}</strong>
                    </p>
                    <button style={styles.trackButton}>Lacak Pesanan</button>
                  </>
                )}
                {activeTab === 'Dibatalkan' && (
                  <>
                    <p style={styles.statusText}>Status: Pesanan dibatalkan oleh pelanggan</p>
                    <button style={styles.reasonButton}>Alasan Pembatalan</button>
                    <button style={styles.contactButton}>Hubungi Penjual</button>
                  </>
                )}
                {activeTab === 'Pengembalian Barang' && (
                  <>
                    <p style={styles.statusText}>Status: Menunggu konfirmasi Penjual</p>
                    <button style={styles.returnButton}>Ajukan Pengembalian</button>
                    <button style={styles.contactButton}>Hubungi Penjual</button>
                  </>
                )}
                {activeTab === 'Selesai' && (
                  <>
                    <p style={styles.statusText}>Status: Pesanan sudah diterima</p>
                    <button style={styles.buyAgainButton}>Beli lagi</button>
                    <button style={styles.contactButton}>Hubungi Penjual</button>
                  </>
                )}
                <p style={styles.totalPrice}>
                  Total Pesanan <strong>Rp{order.product.price.toLocaleString()}</strong>
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
  },
  sidebar: {
    width: '250px',
    backgroundColor: '#fff',
    padding: '20px',
    borderRight: '1px solid #ddd',
  },
  userInfo: {
    marginBottom: '20px',
  },
  username: {
    fontSize: '1.2em',
    fontWeight: 'bold',
  },
  editProfileLink: {
    fontSize: '0.9em',
    color: '#4A90E2',
    textDecoration: 'none',
  },
  nav: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  navLink: {
    fontSize: '1em',
    color: '#333',
    textDecoration: 'none',
    padding: '10px',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
  },
  active: {
    backgroundColor: '#f0f0f0',
  },
  mainContent: {
    flex: 1,
    padding: '20px',
    overflowY: 'auto',
  },
  tabContainer: {
    display: 'flex',
    gap: '15px',
    marginBottom: '20px',
    borderBottom: '1px solid #ddd',
  },
  tabButton: {
    fontSize: '1em',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '10px 0',
  },
  orderList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  orderCard: {
    display: 'flex',
    gap: '15px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    backgroundColor: '#fff',
  },
  productImage: {
    width: '120px',
    height: '120px',
    objectFit: 'cover',
    borderRadius: '5px',
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: '1em',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  productInfo: {
    fontSize: '0.9em',
    marginBottom: '5px',
  },
  orderSummary: {
    textAlign: 'right',
  },
  statusText: {
    fontSize: '1em',
    color: '#333',
    marginBottom: '10px',
  },
  totalPrice: {
    fontSize: '1em',
    marginBottom: '10px',
  },
  shippingInfo: {
    fontSize: '0.9em',
    color: '#333',
    marginBottom: '5px',
  },
  buttonGroup: {
    display: 'flex',
    gap: '10px',
    justifyContent: 'flex-end',
  },
  trackButton: {
    padding: '8px 15px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#f5f5f5',
    cursor: 'pointer',
    fontSize: '0.9em',
  },
  reasonButton: {
    padding: '8px 15px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#f5f5f5',
    cursor: 'pointer',
    fontSize: '0.9em',
  },
  returnButton: {
    padding: '8px 15px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#f5f5f5',
    cursor: 'pointer',
    fontSize: '0.9em',
  },
  contactButton: {
    padding: '8px 15px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#e0e0e0',
    cursor: 'pointer',
    fontSize: '0.9em',
  },
  buyAgainButton: {
    padding: '8px 15px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#4A90E2',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '0.9em',
  },
};

export default OrderHistory;
