import Header from './components/Header';
import Meals from './components/Meals';
import { CartContextProvider } from './store/cart-context';

function App() {
  return (
    <CartContextProvider>
      <div id='modal' />
      <Header />
      <Meals />
    </CartContextProvider>
  );
}

export default App;
