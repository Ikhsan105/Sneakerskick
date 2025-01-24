import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();

  const items = [
    {
      id: 1,
      name: 'Jordan Stay Loyal 3',
      imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/be57f4b6-8f6a-4908-8668-cc3f6326be61/JORDAN+STAY+LOYAL+3.png',
      price: 'Rp 1.488.000,00',
      originalPrice: 'Rp 1.859.000,00',
      ukuran: 41,
    },
    {
      id: 2,
      name: 'Nike Air Max 90 Premium',
      imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f2eca6a1-4ddb-48fa-90b5-60c88fe48bc6/NIKE+ZOOM+VOMERO+ROAM.png',
      price: 'Rp 1.758.000',
      ukuran: 40,
    },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
      <div style={{ width: '65%' }}>
        <h2>Keranjang</h2>
        {items.map((item) => (
          <div key={item.id} style={{ display: 'flex', marginBottom: '20px', alignItems: 'center' }}>
            <img src={item.imageUrl} alt={item.name} style={{ width: '150px', borderRadius: '10px' }} />
            <div style={{ marginLeft: '20px' }}>
              <h3>{item.name}</h3>
              <p>Men's shoes</p>
              <p>Ukuran {item.ukuran}</p>
              <p>
                <span style={{ textDecoration: 'line-through', marginRight: '10px', color: 'gray' }}>
                  {item.originalPrice}
                </span>
                <strong>{item.price}</strong>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div style={{ width: '30%', padding: '20px', border: '1px solid #ddd', borderRadius: '10px' }}>
        <h2>Summary</h2>
        <p>Subtotal: Rp 3.246.000,00</p>
        <p>Biaya Penanganan dan Ongkir: Gratis</p>
        <hr />
        <h3>Total: Rp 3.246.000,00</h3>
        <button
          onClick={() => navigate('/checkout')}
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: '#000',
            color: '#fff',
            borderRadius: '5px',
            border: 'none',
          }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
