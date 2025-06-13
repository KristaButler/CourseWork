import logo from '../assets/logo.jpg';
import Cart from './Cart';

export default function Header() {
  return (
    <div id='main-header'>
      <div id='title'>
        <img
          src={logo}
          alt='Food Logo'
        />
        <h1 id='title'>ReactFood</h1>
      </div>
      <Cart />
    </div>
  );
}
