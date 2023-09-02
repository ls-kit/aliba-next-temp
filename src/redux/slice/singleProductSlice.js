const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    id: "",
    name: "",
    totalQuantity: 0,
    totalPrice: 0,
    totalWeight: 0,
    totalShippingCost: 0,
    chinaLocalShippingCost: 0,
    shippingCostPerKG: 0,
    deliveryDateStart: "",
    deliveryDateEnd: "",
    selectedColor:"",
    variant: [
        {
            colorName: "",
            sizeVariant: [
                
            ],
        },
    ],
};

console.log(initialState);

const singleProductSlice = createSlice({
    name: "singleProduct",
    initialState,
    reducers: {
        increaseQuantity: (state, action) => {
            const {size, productQuantity, price }=action.payload
            // state.totalQuantity= 0,
            // state.totalPrice= 0,
            // state.totalWeight= 0,
            // state.totalShippingCost= 0
            const selectedColorProp = state.variant.map(colorVariant => {
                if (colorVariant.colorName === state.selectedColor) {
                    const sizeExists = colorVariant.sizeVariant.find(
                        (item) => item.size === size
                    );
                    console.log(sizeExists)
                    if (!sizeExists) {
                        colorVariant.sizeVariant.push({
                            
                            size: size,
                            quantity: productQuantity + 1,
                            price: price,
                            totalQuantity: productQuantity * price,
                            
                        })
                    }
                    if (sizeExists) {
                        sizeExists.quantity = productQuantity + 1;
                        sizeExists.price = price;
                        sizeExists.totalQuantity = productQuantity * price;
                    }
               }
            })
            console.log()
           
        },
        decreaseQuantity: (state, action) => {},
        addColor: (state, action) => {
            state.selectedColor = action.payload.color
            console.log(state.selectedColor)
            const colorExists = state.variant.some(
                (item) => item.colorName === action.payload.color
            );

            if (colorExists) {
                
            } else {
                state.variant.push({
                    colorName: action.payload.color,
                    sizeVariant: [
                        {
                            size: "",
                            quantity: 0,
                            price: 0,
                            totalQuantity: 0,
                        },
                    ],
                });
            }
        },
        addProduct: (state, action) => {
            state.id = action.payload.Id;
            state.name = action.payload.Title;
        },
        addShippingCostPerKG: (state, action) => {
            state.shippingCostPerKG = action.payload.shippingCostPerKG;
        },
        addDeliveryDate: (state, action) => {
            state.deliveryDateStart = action.payload.deliveryDateStart;
            state.deliveryDateEnd = action.payload.deliveryDateEnd;
        },
    },
});

export const { increaseQuantity, decreaseQuantity, addColor, addProduct,addShippingCostPerKG, addDeliveryDate } =
    singleProductSlice.actions;

export default singleProductSlice.reducer;
