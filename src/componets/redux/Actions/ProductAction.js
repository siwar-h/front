import axios from "axios"
import { ADD_PRODUCT,UPDATE_CART, ADD_TO_CART, DELETE_PRODUCT, ERROR_PRODUCT, GET_PRODUCT_BY_ID, GET_PRODUCTS, LOAD_PRODUCT, UPDATE_PRODUCT, REMOVE_PRODUCT_FROM_CART } from "../ActionsTypes/ProductActionsTypes";



export const addProduct = (newProduct) => async (dispatch) => {
    dispatch({ type: LOAD_PRODUCT });
    try {
        const response = await axios.post("https://back-ysmd.onrender.com/api/products/add", newProduct);
        dispatch({
            type: ADD_PRODUCT,
            payload: response.data,
        });
        // Optionnel: Recharger la liste des produits si nécessaire
        dispatch(getProducts());
    } catch (error) {
        dispatch({
            type: ERROR_PRODUCT,
            payload: error,
        });
    }
};

export const updateProduct=(id,newPrice)=>async(dispatch)=>{
    dispatch({type:LOAD_PRODUCT});
    try{
        const response = await axios.put(`https://back-ysmd.onrender.com/api/products/edit/${id}`);
        dispatch({
            type:UPDATE_PRODUCT,
            payload:response.data
        })
    }catch(error){
        dispatch({
            type:ERROR_PRODUCT,
            payload:error
        })
    }
}

export const deleteProduct=(id)=>async(dispatch)=>{
    dispatch({type:LOAD_PRODUCT});
    try{
        const response = await axios.delete(`https://back-ysmd.onrender.com/api/products/delete/${id}`);
        dispatch({
            type:DELETE_PRODUCT,
            payload:response.data
        })
        getProducts()
    }catch(error){
        dispatch({
            type:ERROR_PRODUCT,
            payload:error
        })
    }
}

export const getProductById=(id)=>async(dispatch)=>{
    dispatch({type:LOAD_PRODUCT});
    try{
         const response = await axios.get(`https://back-ysmd.onrender.com/api/products/${id}`);
         dispatch({
             type:GET_PRODUCT_BY_ID,
            payload:response.data
        })
    }catch(error){
        dispatch({
             type:ERROR_PRODUCT,
            payload:error
        })
    }
 }

export const getProducts=(id)=>async(dispatch)=>{
    dispatch({type:LOAD_PRODUCT});
    try{
        const response = await axios.get("https://back-ysmd.onrender.com/api/products/all");
        dispatch({
            type:GET_PRODUCTS,
            payload:response.data
        })
    }catch(error){
        dispatch({
            type:ERROR_PRODUCT,
            payload:error
        })
    }
}
// export const updateCart = (productId, quantity) => {
//     return {
//         type: UPDATE_CART,
//         payload: { productId, quantity }, // Passer l'ID et la nouvelle quantité
//     };
// };

// // Exemple d'action addToCart dans Redux
// export const addToCart = (products)=>async(dispatch) => {
//     dispatch({type:LOAD_PRODUCT});
//     try{
//         dispatch({
//             type:ADD_TO_CART,
//             payload:products
//         })
//     }catch(error){
//         dispatch({
//             type:ERROR_PRODUCT,
//             payload:error
//         })
//     }
// };
// export const removeProductFromCart = (productId) => {
//     return {
//         type: REMOVE_PRODUCT_FROM_CART,
//         payload: productId, // L'ID du produit à supprimer
//     };
// };