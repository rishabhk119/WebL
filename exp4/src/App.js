import React, { useEffect, useState } from 'react';
import Item from './Item';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.log('Error fetching data:', error));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Items List</h1>
      {items.map((item) => (
        <Item key={item.id} title={item.title} body={item.body} />
      ))}
    </div>
  );
}

export default App;