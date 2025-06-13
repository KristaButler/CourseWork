import { createContext, useState } from 'react';

export const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (itemId) => {},
});

export function CartContextProvider({ children }) {
  const [items, setItems] = useState([]);

  function addItem(item) {
    console.log('Adding Item to Cart');
    let qty = 1;

    if (prevItems.includes(item.id)) {
      qty = prevItems[item.id].qty + 1;
    }

    setItems((prevItems) => [...prevItems, { ...item, qty }]);
  }

  function removeItem(itemId) {
    console.log('Removing Item to Cart');
    let qty = 0;

    if (prevItems.includes(itemId)) {
      qty = prevItems[itemId].qty - 1;
    }

    if (qty === 0) {
      setItems((prevItems) => prevItems.filter((item) => item.id === item.id));
      return;
    }

    setItems((prevItems) => [...prevItems, { ...item, qty }]);
  }

  const contextValue = {
    items,
    addItem,
    removeItem,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}
