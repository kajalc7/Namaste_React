import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items:[]
    },
    reducers:{
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop(action.payload);//in remove and clear we dont needc action that why we removed it
        },
        clearCart: (state) => {
            state.items.length = 0;
        }
    }
});
//createSlice funtion  will return object in cartSlice and cartSlice will lokk like this
// {
//     actions : {
//         addItem
//     },
//     reducer
// }

//here we will export our reducer and our action
export const {addItem, removeItem, clearCart} = cartSlice.actions;//exporting action

export default cartSlice.reducer;//exporting reducer