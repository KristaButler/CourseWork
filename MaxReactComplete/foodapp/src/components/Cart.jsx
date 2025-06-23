import { use, useRef } from 'react';
import { CartContext } from '../store/cart-context.jsx';
import CartModal from './CartModal';
import Button from './UI/Button.jsx';
import CheckoutModal from './CheckoutModal.jsx';

export default function Cart() {
  const cart = useRef();
  const checkout = useRef();

  const { total } = use(CartContext);

  function openCartModal() {
    cart.current.open();
  }

  function handleGotToCheckout() {
    cart.current.close();
    checkout.current.open();
  }

  return (
    <>
      <CartModal
        ref={cart}
        sumbitAction={handleGotToCheckout}
      />
      <CheckoutModal ref={checkout} />

      <Button
        onClick={openCartModal}
        textOnly
      >
        Cart ({total.quantity})
      </Button>
    </>
  );
}
