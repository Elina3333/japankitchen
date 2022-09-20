import Header from "./Components/Layout/Header/Header";
import React, { useState} from "react";
import Meals from "./Components/Meals/Meals/Meals";
import Cart from "./Components/Layout/Cart/Cart";
import CartContextProvider from "./store/CartContextProvider";

function App() {

    const [cartModal, setCartModal] = useState(false)

    const showCartHandler = () => {
        setCartModal(true)
    }

    const hideCartHandler = () => {
        setCartModal(false)
    }

    return (
        <CartContextProvider>
            {cartModal && <Cart onCloseCart={hideCartHandler}/>}
            <Header onShowCart={showCartHandler}/>
            <main>
                <Meals/>
            </main>
        </CartContextProvider>
    );
}

export default App;
