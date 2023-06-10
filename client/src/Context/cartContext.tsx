import React, {createContext} from "react";

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
    const [gender, setGender] = React.useState('');


    const value = {
        cartItems,
        setCartItems,
        gender,
        setGender
    };

    return (
        <CartContext.Provider
            value={value}
            >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;