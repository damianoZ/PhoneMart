import { createSlice } from '@reduxjs/toolkit';

const products = { allProducts: [], selectedProducts: [], cart: [], totalProd: 0, port: "http://localhost:8080/phones/public"};

const productSlice = createSlice({
    name: "products",
    initialState: products,
    reducers: {
        search(state, action){
            state.allProducts = action.payload;
        },
        select(state, action){
            state.selectedProducts = action.payload;
        },
        addToCart(state, action){ 
        state.totalProd++;
        state.cart.some(x => x.id == action.payload.id) ?
        state.cart.map(x => { x.id == action.payload.id && x.quantity++}) : state.cart.push(action.payload);
        },
        increment(state,action){
            state.totalProd++;
            state.cart.some(x=> x.id == action.payload) &&
            state.cart.map(x=>{ x.id == action.payload && x.quantity++});
        },
        decrement(state, action){ 
            if(state.cart.some(x=> x.id == action.payload)){
                state.cart.map(x=>{
                    if(x.id == action.payload){
                        if(x.quantity <= 1){
                            state.cart = state.cart.filter(x=> x.id !== action.payload);
                        } x.quantity--; state.totalProd--;
                    } return
                })
            } return;
        }
    }
});

export const productAction = productSlice.actions;

export default productSlice.reducer;