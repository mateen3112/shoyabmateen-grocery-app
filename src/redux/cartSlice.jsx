import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addtoCart: (state, action) => {
            state.items.push(action.payload);
        }
    }
});

export const { addtoCart } = cartSlice.actions;
export default cartSlice.reducer;
