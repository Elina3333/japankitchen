import React, {useContext} from 'react';
import styles from './Cart.module.css'
import Modal from "../../UI/Modal/Modal";
import CartContext from "../../../store/cart-context";
import CartItem from "./CartItem/CartItem";

const Cart = (props) => {

    const cartContext = useContext(CartContext)
    const totalAmount = `${cartContext.totalAmount.toFixed(2)}$`
    const hasItems=cartContext.items.length>0;

    const addItemHandler=(id,price)=>
    {
        cartContext.addItem({
            id:id,
            price:price,
            amount:1
        })
    }

    const deleteItemHandler = (id,price)=>
    {
        cartContext.removeItem({
            id:id,
            price: price,
            amount:-1
        })
    }

    const cartItems = (
        <ul className={styles['cart-items']}>
            {cartContext.items.map((item) => (<CartItem key={item.id} id={item.id} name={item.name} amount={item.amount} price={item.price} onAdd={addItemHandler} onDelete={deleteItemHandler} ></CartItem>))}
        </ul>
    )

    return (
        <Modal onCloseCart={props.onCloseCart}>
            {cartItems}
            <div>
                <span>Итого: </span>
                <span>{totalAmount}</span>
            </div>
            <div className={styles.actions}>
                <button onClick={props.onCloseCart} className={styles['button--alt']}>Закрыть</button>
                {hasItems && <button className={styles.button}>Заказать</button>}
            </div>
        </Modal>
    );
};

export default Cart;