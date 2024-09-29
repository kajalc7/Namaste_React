import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./cartSlice"


const appStore = configureStore({
    reducer:{
        cart: cartReducer,//whole big reducer of our app and this reducer contain all small reducer of our slice
    },
});

export default appStore