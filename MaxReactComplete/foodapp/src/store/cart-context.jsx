import { createContext, useReducer } from 'react';
import { cartReducer } from '../util/cartReducer.js';
//Added Reducer like the instructor did right away, instead of later like I planned.
//I also decided to outsource the reducer.

export const CartContext = createContext({
  items: [],
  total: { quantity: 0, price: 0 },
  addItem: (item) => {},
  removeItem: (itemId) => {},
});

export function CartContextProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, {
    items: [],
    total: { quantity: 0, price: 0 },
  });

  function addItem(item) {
    dispatch({ type: 'ADD_ITEM', item });
  }

  function removeItem(id) {
    dispatch({ type: 'REMOVE_ITEM', id });
  }

  const contextValue = {
    items: cart.items,
    total: cart.total,
    addItem,
    removeItem,
  };

  return <CartContext value={contextValue}>{children}</CartContext>;
}
