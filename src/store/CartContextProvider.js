import {useReducer} from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0,
}

const cartReducer = (state, action) => {
    if (action.type === "ADD_ITEM") {
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        const existingItem = state.items.findIndex(x => x.id === action.item.id);
        let updatedItem=null;
        let updatedItems=state.items;

        if(existingItem > -1)
        {
            updatedItem = state.items[existingItem];
            updatedItem.amount+=action.item.amount;
            updatedItems[existingItem]=updatedItem;
        }
        else
        {
            updatedItems=[...updatedItems,action.item];
        }
        return {
            items:updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    if (action.type === "REMOVE_ITEM") {
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        const existingItem = state.items.findIndex(x => x.id === action.item.id);
        let updatedItem=null;
        let updatedItems=state.items;

        if(existingItem > -1)
        {
            updatedItem = state.items[existingItem];
            updatedItem.amount += action.item.amount;
            if(updatedItem.amount === 0)
            {
                updatedItems.splice(existingItem,1);
            }
            else{
                updatedItems[existingItem]=updatedItem;
            }
        }
        else
        {
            updatedItems=[...updatedItems,action.item];
        }
        return {
            items:updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    return defaultCartState;
}

const CartContextProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
    const addItemHandler = item => {
        dispatchCartAction({
            type: 'ADD_ITEM',
            item: item
        });
    }

    const removeItemHandler = (item) => {
        dispatchCartAction({
            type: 'REMOVE_ITEM',
            item: item
        });
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartContextProvider;