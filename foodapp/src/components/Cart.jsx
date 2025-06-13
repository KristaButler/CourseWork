import { use, useRef } from 'react';
import { CartContext } from '../store/cart-context.jsx';
import CartModal from './CartModal';

export default function Cart() {
  const dialog = useRef();
  const { items } = use(CartContext);

  function openCartModal() {
    dialog.current.open();
  }

  return (
    <>
      <CartModal ref={dialog} />

      <button
        className='text-button'
        onClick={openCartModal}
      >
        Cart ({items ? items.length : 0})
      </button>
    </>
  );
}
