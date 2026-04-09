import React, { useState } from 'react';

function Item({ title, body }) {
  const [liked, setLiked] = useState(false);

  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '15px',
      marginBottom: '10px'
    }}>
      <h3>{title}</h3>
      <p>{body}</p>
      <button onClick={() => setLiked(!liked)}>
        {liked ? 'Liked' : 'Like'}
      </button>
    </div>
  );
}

export default Item;