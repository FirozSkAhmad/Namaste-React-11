import { createSlice } from '@reduxjs/toolkit'


const cartSilce = createSlice({
    name: 'cartSlice',
    initialState: {
        items: []
    },
    reducers: {
        addItems: (state, action) => {
            state.items.push(action.payload)
        },
        clearItems: (state, action) => {
            state.items = []
        },
        removeItem: (state, action) => {
            const id = action.payload
            state.items = state.items.filter((item) => item.item.id !== id)
        }
    }
})


export const { addItems, clearItems, removeItem } = cartSilce.actions

export default cartSilce.reducer