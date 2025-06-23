import { useContext } from 'react';
import { CartContext } from '../store/cart-context';
import { currencyFormatter } from '../util/formatter';
import Button from './UI/Button';

export default function Meal({ item }) {
  const { addItem } = useContext(CartContext);

  return (
    <li
      id={item.id}
      className='meal-item'
    >
      {/* Updated Markup to match the format used by instructor for better appearance */}
      <article>
        <img
          src={`http://localhost:3000/${item.image}`}
          alt={item.title}
        />
        <h3>{item.title}</h3>
        <div>
          <p className='meal-item-price'>
            {currencyFormatter.format(item.price)}
          </p>
          <p className='meal-item-description'>{item.description}</p>
        </div>
        <p className='meal-item-actions'>
          <Button onClick={() => addItem(item)}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
}
