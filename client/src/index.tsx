import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import deviceStore from './store/deviceStore';
import userStore from './store/userStore';
import CartProvider, {CartContext} from "./Context/cartContext";
import SearchProvider from "./Context/searchContext";
import MainPage from "./pages/MainPage";



export const Context = React.createContext<any>(null)

ReactDOM.render(
    <SearchProvider>
    <CartProvider>

    <Context.Provider value={{
    user: userStore,
    device: deviceStore,
  }}>
    <App />
    </Context.Provider>
    </CartProvider>,
    </SearchProvider>,

    document.getElementById('root')
);


