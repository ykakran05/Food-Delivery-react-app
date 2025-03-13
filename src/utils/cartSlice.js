import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        // mutating the state here
        addItem: (state,action) => {
            state.items.push(action.payload);
        },

        removeItem: (state) => {
            state.items.pop();
        },

        clearCart: (state) => {
            // state = ["yogesh"]    ---> it won't work bcuz we are not mutating the state here but just changing the reference only directly
            state.items.length = 0;   // this is right (we are mutating the state)
        },
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;