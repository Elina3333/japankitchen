import classes from "./CartItem.module.css";

const CartItem = (props) => {
    const price = `${props.price.toFixed(2)}`;

    return (
        <li className={classes["cart-item"]}>
            <div>
                <h2>{props.name}</h2>
                <div className={classes.summary}>
                    <span className={classes.price}>{props.price+"$"}</span>
                    <span className={classes.amount}>{props.amount}х</span>
                </div>
            </div>
            <div className={classes.actions}>
                <button onClick={() => props.onDelete(props.id,props.price)}>-</button>
                <button onClick={() => props.onAdd(props.id, props.price)}>+</button>
            </div>
        </li>
    );
};

export default CartItem;
