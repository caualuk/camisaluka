import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';

const mockItems = [
  { id: 1, title: 'Product 1', description: 'Description of Product 1', price: 100, pictureUrl: 'https://via.placeholder.com/100' },
  { id: 2, title: 'Product 2', description: 'Description of Product 2', price: 200, pictureUrl: 'https://via.placeholder.com/100' },
  { id: 3, title: 'Product 3', description: 'Description of Product 3', price: 300, pictureUrl: 'https://via.placeholder.com/100' },
];


const fetchItems = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockItems);
    }, 2000); 
  });
};

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true); 

  
  useEffect(() => {
    fetchItems()
      .then((data) => {
        setItems(data); 
        setLoading(false);
      })
      .catch((err) => console.error('Erro ao buscar itens:', err));
  }, []);

  return (
    <div className="item-list-container" style={{ padding: '16px', textAlign: 'center' }}>
      <h1>Product List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : items.length > 0 ? (
        <ItemList items={mockItems} />
      ) : (
        <p>Nenhum item disponível.</p>
      )}
    </div>
  );
};

export default ItemListContainer;
