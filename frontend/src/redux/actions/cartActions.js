import { UPDATE_CART } from "../types";

const getTotal = (cart) =>{
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const cartItem = cart[i];
        if(cartItem.sale) total += cartItem.price - cartItem.price * cartItem.sale;
        else total += cartItem.price;
        
    }
    return total;
}

export const addToCartAction = (cart, item) => dispatch =>{
    const previousCart = [...cart];
    const isExists = previousCart.find(el => el.id === item.id)
    if(!isExists){
        const newCart = [...cart, item];
        const newTotal =Math.floor(getTotal(newCart));
    
        const payload ={
            cart: newCart,
            total: newTotal
        }
        localStorage.setItem('cartPayload', JSON.stringify(payload))
        dispatch({type: UPDATE_CART, payload})
    }


    
}


export const removeFromCart = (cart, item)=> dispatch =>{
    const previousCart = [...cart];
    const newCart = previousCart.filter(el => el.id !== item.id);
    // const idx = previousCart.indexOf(item.id)
    // if(idx > -1){
    //     const newCart = previousCart.splice(idx, 1);
        const newTotal = Math.floor(getTotal(newCart))
        const payload = {
            cart: newCart,
            total: newTotal
        }
        localStorage.setItem('cartPayload', JSON.stringify(payload))
        dispatch({type: UPDATE_CART, payload })
    // }

}