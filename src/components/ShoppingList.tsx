import React from 'react';

interface ShoppingListProps {
  items: string[];
}

const ShoppingList: React.FC<ShoppingListProps> = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default ShoppingList;
