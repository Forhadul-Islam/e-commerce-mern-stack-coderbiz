import API from "../../util/API";
import { LOAD_PRODUCTS, LOAD_SINGLE_PRODUCT } from "../types";


const options ={header : {'Content-Type': 'application/json'}};
export const  loadProducts = () => async (dispatch) =>{
    try {
        const url = "/products"
        const res = await API.get(url, options);
        const products = res.data;
        dispatch({type: LOAD_PRODUCTS, payload: products });
    } catch (err) {
        
    }
}

export const loadSingleProduct = (id) => async (dispatch) =>{
    try {
        const url = `/products/${id}`;
        const product = await API.get(url, options);
        const payload = product.data;
        dispatch({type: LOAD_SINGLE_PRODUCT, payload})
    } catch (err) {
        console.log(err)
    }
}


export const uploadProduct = (body, products, setNotification) => async (dispatch)  => {
    try {
        const url = '/products';
        const res = await API.post(url, body, options)
        const newProducts = await [...products, res.data]
        dispatch({type: LOAD_PRODUCTS, payload: newProducts });
       await setNotification()
        
    } catch (err) {
        console.log(err)
    }
}

export const deleteProduct = (id, products) =>async (dispatch) =>{
    try {
        const productId = id
        const url = `/products/${productId}`;
        const res = await API.delete(url, options);
        if(res.status === 200){
            const remainingProducts = products.filter(el => el._id !== id);
            dispatch({type:LOAD_PRODUCTS, payload: remainingProducts})
        }
    } catch (err) {
        console.log(err)
    }
}


export const updateSingleProduct = (id, updatedProduct, allProducts, setNotification, handleClose) => async (dispatch) =>{
    try {
        const url = `/products/${id}`;
        const product = await API.put(url, updatedProduct, options);
         if(product){
            handleClose()
            setNotification()
            // const productsExceptUpdated = products.filter(pd=> pd._id !== id);
            // const payload = await [...productsExceptUpdated, product]
            // await dispatch({type: LOAD_PRODUCTS, payload})
            dispatch(loadProducts())
         }
    } catch (err) {
        console.log(err)
    }
}