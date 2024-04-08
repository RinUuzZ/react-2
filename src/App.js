import React from 'react';

const ColorList = () => {
  const colors = ['red', 'blue', 'green', 'orange', 'brown'];

  return (
    <div>
      <h1>Color List</h1>
      <ul>
        {colors.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ul>
    </div>
  );
};

export default ColorList;
