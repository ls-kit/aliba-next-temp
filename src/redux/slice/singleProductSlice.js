const { createSlice } = require("@reduxjs/toolkit")



const initialState = {

    id:'',
    name:'',
    totalQuantity: 0,
    totalPrice: 0,
    totalWeight: 0,
    shippingCost: 0,
    chinaLocalShippingCost: 0,
    shippingCostPerKG: 0,
    deliveryDateStart: '',
    deliveryDateEnd: '',
    variant: [
        
    ]

}

console.log(initialState)

const singleProductSlice = createSlice({
    name: "singleProduct",
    initialState,
    reducers: {
        increaseQuantity: (state, action) => {
            
        },
        decreaseQuantity: (state, action) => {
            
        },
        addColor: (state, action) => {
            state?.variant?.map(colorVariant=>{
                if(colorVariant.colorName !== action.payload.color){
                    state?.variant?.push({
                        colorName: action.payload.color,
                        sizeVariant:[
                            {
                                size:"",
                                quantity: 0,
                                price:0,
                                totalPrice: 0,
                            }
                        ]
                    })
                }
            })
        },
        addProduct: (state, action) => {
            state.id = action.payload.Id
            state.name = action.payload.Title
        }
    }
})

export const { increaseQuantity, decreaseQuantity,addColor,addProduct } = singleProductSlice.actions;

export default singleProductSlice.reducer;