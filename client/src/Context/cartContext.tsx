import React, {createContext, useEffect, useState} from "react";

export const CartContext = createContext(null);

export const useCart = () => {
    const context = React.useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};

CartContext.displayName = "CartContext";

const CartProvider: React.FC = ({ children }) => {
    const [cartItems, setCartItems] = React.useState([]);
    const [favorites, setFavorites] = useState([]);


    const value = {
        cartItems,
        setCartItems,
        favorites,
        setFavorites
    };

    useEffect(() => {
        console.log('Карточки', cartItems)
        console.log('Избранное', favorites)
    },[cartItems,favorites])

    return (
        <CartContext.Provider
            value={value}
            >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;