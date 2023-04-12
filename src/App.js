import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { createContext } from 'react';

import Header from './components/Header';
import Main from './components/Main';
// import Basket from './components/Basket';

// import { useBasket } from './hooks/useBasket';
import { useItems } from './hooks/useItems';

export const ShopContext = createContext()

function App() {

  // const [openBasket, displayBasket] = useBasket()
  const [items, addToBasket, itemNumber, basketItems, itemAdded, basketIncrement, basketDecrement, maxQty, total] = useItems()

  return (
    <ShopContext.Provider value={{ items, addToBasket, itemNumber, basketItems, itemAdded, basketIncrement, basketDecrement, maxQty, total }}>
      <div className="App">
        <Header />
        <Main />
      </div>
    </ShopContext.Provider>
  );
}

export default App;
