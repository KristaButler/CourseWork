import { use, useActionState } from 'react';
import { CartContext } from '../store/cart-context';
import { currencyFormatter } from '../util/formatter';

export default function CartItem({ item }) {
  const { addItem, removeItem } = use(CartContext);

  function addItemAction() {
    addItem(item);
  }

  function removeItemAction() {
    removeItem(item.id);
  }

  const [addFormState, addFormAction, addPending] =
    useActionState(addItemAction);
  const [removeFormState, removeFormAction, removePending] =
    useActionState(removeItemAction);

  return (
    <li
      id={item.id}
      className='cart-item'
    >
      <p>
        {item.name} - {item.quantity} x {currencyFormatter.format(item.price)}
      </p>
      <form className='cart-item-actions'>
        <button formAction={removeItemAction}>-</button>
        {item.quantity}
        <button formAction={addItemAction}>+</button>
      </form>
    </li>
  );
}
