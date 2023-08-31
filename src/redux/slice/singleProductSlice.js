const { createSlice } = require("@reduxjs/toolkit")



const initialState = {
    item: {
        
    },
    totalQuantity: 0,
    totalPrice: 0,
    totalWeight: 0,
    shippingCost: 0,
    chinaLocalShippingCost: 0,
    shippingCostPerKG: 0,
    deliveryDate: '',
    variant: [
        {
            colorName: '',
            price: 0,
            size: 0,
            quantity: 0,
        }
    ]

}

const singleProductSlice = createSlice({
    name: "singleProduct",
    initialState,
    reducers: {
        increaseQuantity: (state, action) => {
            
        },
        decreaseQuantity: (state, action) => {
            
        },
        addColor: (state, action) => {
            
        }
    }
})

export const { increaseQuantity, decreaseQuantity,addColor } = singleProductSlice.actions;

export default singleProductSlice.reducer;