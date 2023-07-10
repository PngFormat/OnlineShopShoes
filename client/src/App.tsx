// @ts-nocheck
import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter, useHistory} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/Navbar";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./http/userApi";
import {Row, Spinner} from "react-bootstrap";
import Basket from "./pages/Basket";
import {useCart} from "./Context/cartContext";

const App = observer(() => {

    // const [cartItems, setCartItems] = useState([])
    const {cartItems, setCartItems} = useCart();


    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    const [isOpen, setIsOpen] = useState(false);




    useEffect(() => {
        check().then(data => {
            user.setUser(true)
            user.setIsAuth(true)
        }).finally(() => setLoading(false))
    }, [])

    if (loading) {
        return <Spinner animation={"grow"}/>
    }

    const onRemoveItem = (id) => {
        setCartItems((prev) => prev.filter(item => item.id !== id))
    }

    return (
        <BrowserRouter>
            {isOpen ? <Basket onRemove={onRemoveItem} items={cartItems} onClickClose={() => setIsOpen(false)}></Basket> : null}
            <NavBar onClickCart={() => setIsOpen(true)} />

            <AppRouter />



        </BrowserRouter>
    );
});

export default App;
