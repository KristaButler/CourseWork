import { use, useImperativeHandle, useRef } from 'react';

import { createPortal } from 'react-dom';
import CartItem from './CartItem';

const items = [
  {
    id: 'm1',
    name: 'Mac & Cheese',
    price: '8.99',
    description:
      'Creamy cheddar cheese mixed with perfectly cooked macaroni, topped with crispy breadcrumbs. A classic comfort food.',
    image: 'images/mac-and-cheese.jpg',
    qty: 1,
  },
  {
    id: 'm2',
    name: 'Margherita Pizza',
    price: '12.99',
    description:
      'A classic pizza with fresh mozzarella, tomatoes, and basil on a thin and crispy crust.',
    image: 'images/margherita-pizza.jpg',
    qty: 1,
  },
  {
    id: 'm3',
    name: 'Caesar Salad',
    price: '7.99',
    description:
      'Romaine lettuce tossed in Caesar dressing, topped with croutons and parmesan shavings.',
    image: 'images/caesar-salad.jpg',
    qty: 1,
  },
];

export default function CartModal({ ref }) {
  const dialog = useRef();

  //const { items, addItem, removeItem } = use(CartContext);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialog}
      className='cart modal'
    >
      <h2>Your Cart</h2>
      {items.length <= 0 && (
        <p className='center'>Hmm... this cart looks empty.</p>
      )}
      {items.length > 0 && (
        <ul>
          {items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
            />
          ))}
        </ul>
      )}
      <div className='cart-total'>TODO: TOTAL</div>
      <div className='modal-actions'>
        <form>
          <button className='text-button'>Close</button>
          {items.length > 0 && (
            <button
              className='button'
              disabled={items.length <= 0}
            >
              Go to Checkout
            </button>
          )}
        </form>
      </div>
    </dialog>,
    document.getElementById('modal')
  );
}
