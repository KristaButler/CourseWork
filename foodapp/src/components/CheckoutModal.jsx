import { use, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
import { CartContext } from '../store/cart-context';
import { currencyFormatter } from '../util/formatter';
import Button from './UI/Button';
import Input from './UI/Input';

export default function CheckoutModal({ ref }) {
  const dialog = useRef();

  const { total } = use(CartContext);

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
      className='modal'
    >
      <h2>Checkout</h2>
      <p>Total Amount: {currencyFormatter.format(total.price)}</p>
      <form>
        <Input
          label='Full Name'
          name='full-name'
          type='text'
          required
        />
        <Input
          label='E-Mail Address'
          name='email'
          type='email'
          required
        />
        <Input
          label='Street'
          name='street'
          type='text'
          required
        />
        <div className='control-row'>
          <Input
            label='Postal Code'
            name='postal-code'
            type='text'
            required
            pattern='\d{5}(-\d{4})?'
          />
          <Input
            label='City'
            name='city'
            type='text'
            required
          />
        </div>
        <p className='modal-actions'>
          <Button
            textOnly
            onClick={() => dialog.current.close()}
          >
            Close
          </Button>
          <Button>Submit Order</Button>
        </p>
      </form>
    </dialog>,
    document.getElementById('modal')
  );
}
