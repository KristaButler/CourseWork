import { useContext } from 'react';
import { CartContext } from '../store/cart-context';

export default function Meal({ item }) {
  const { addItem } = useContext(CartContext);

  return (
    <li
      id={item.id}
      className='meal-item'
    >
      <article>
        <img
          src={`http://localhost:3000/${item.image}`}
          alt={item.title}
        />
        <h3>{item.title}</h3>
        <div>
          <span className='meal-item-price'>{item.price}</span>
        </div>
        <div className='meal-item-description'>{item.description}</div>
        <div className='meal-item-actions'>
          <button
            className='button'
            onClick={() => {
              addItem(item);
            }}
          >
            Add to Cart
          </button>
        </div>
      </article>
    </li>
  );
}
