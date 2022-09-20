import React, {useContext} from 'react';
import CartIcon from "../../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
import CartContext from "../../../../store/cart-context";


const HeaderCartButton = (props) => {

    const cartContext = useContext(CartContext)
    const cartItemsCount = cartContext.items.length;

    return (
       <button onClick={props.onShowCart} className={styles.button}>
           <span className={styles.icon}><CartIcon/></span>
           <span>Корзина</span>
           <span className={styles.badge}>{cartItemsCount}</span>
       </button>
    );
};

export default HeaderCartButton;