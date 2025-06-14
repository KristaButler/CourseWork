import { use, useImperativeHandle, useRef } from 'react';

import { createPortal } from 'react-dom';
import CartItem from './CartItem';
import { CartContext } from '../store/cart-context';
import { currencyFormatter } from '../util/formatter';
import Button from './UI/Button';

export default function CartModal({ ref, sumbitAction }) {
  const dialog = useRef();

  const { items, total } = use(CartContext);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
      close() {
        dialog.current.close();
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
      <div className='cart-total'>{currencyFormatter.format(total.price)}</div>
      <p className='modal-actions'>
        <Button
          textOnly
          onClick={() => dialog.current.close()}
        >
          Close
        </Button>
        {items.length > 0 && (
          <Button onClick={sumbitAction}>Go to Checkout</Button>
        )}
      </p>
    </dialog>,
    document.getElementById('modal')
  );
}
