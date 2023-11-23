import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    items : []
}
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addtoCart: (state,action) => {
            state.items.push(action.payload)
        },
        removefromCart: (state,action) =>{
            const newarray = state.items.filter((items) => items.id != action.payload.id)
            state.items = newarray
        }
    }
})

