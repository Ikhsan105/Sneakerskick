import React from 'react';

const Checkout = () => {
  const userInfo = {
    name: 'Udin109',
    address: 'Jl. Anggrek No. 5, Jakarta, Indonesia',
    phone: '+62 812 3456 7890',
  };

  const items = [
    {
      id: 1,
      name: 'Jordan Stay Loyal 3',
      price: 'Rp 1.488.000,00',
      quantity: 1,
    },
    {
      id: 2,
      name: 'Nike Air Max 90 Premium',
      price: 'Rp 1.758.000',
      quantity: 1,
    },
  ];

  const total = 'Rp 3.246.000,00';

  return (
    <div style={styles.container}>
      <h2>Checkout</h2>

      {/* Informasi Pengguna */}
      <div style={styles.section}>
        <h3>Informasi Pengguna</h3>
        <p>Nama: {userInfo.name}</p>
        <p>Alamat: {userInfo.address}</p>
        <p>Telepon: {userInfo.phone}</p>
      </div>

      {/* Rincian Pesanan */}
      <div style={styles.section}>
        <h3>Rincian Pesanan</h3>
        {items.map((item) => (
          <div key={item.id} style={styles.item}>
            <p>{item.name}</p>
            <p>{item.price}</p>
          </div>
        ))}
      </div>

      {/* Total */}
      <div style={styles.section}>
        <h3>Total</h3>
        <p>{total}</p>
        <button style={styles.placeOrderButton}>Place Order</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  section: {
    marginBottom: '20px',
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
  },
  placeOrderButton: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#4A90E2',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Checkout;
