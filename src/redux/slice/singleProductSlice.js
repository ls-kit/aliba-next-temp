const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    id: "",
    name: "",
    chinaLocalShippingCost: 0,
    shippingCostPerKG: 0,
    totalQuantity: 0,
    totalPrice: 0,
    totalWeight: 0,
    // totalShippingCost: 0,
    deliveryDateStart: "",
    deliveryDateEnd: "",
    selectedColor:"",
    variant: [
        {
            colorName: "",
            sizeVariant: [
                {
                    size: '',
                    quantity: 0,
                    price: 0,
                    totalQuantity: 0,
                }
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
            const { size, productQuantity, price } = action.payload;

            // Find the selected color variant
            const selectedColorProp = state.variant.find(
                (colorVariant) => colorVariant.colorName === state.selectedColor
            );

            if (selectedColorProp) {
                const sizeExists = selectedColorProp.sizeVariant.find(
                    (item) => item.size === size
                );

                if (!sizeExists) {
                    selectedColorProp.sizeVariant.push({
                        size: size,
                        quantity: productQuantity + 1,
                        price: price,
                        totalQuantity: (productQuantity + 1) * price,
                    });
                } else {
                    sizeExists.quantity = productQuantity + 1;
                    sizeExists.price = price;
                    sizeExists.totalQuantity = (productQuantity + 1) * price;
                }
            }

            // Recalculate totals for all products in variant array
            state.totalQuantity = state.variant.reduce(
                (total, colorVariant) =>
                    total +
                    colorVariant.sizeVariant.reduce(
                        (colorTotal, sizeVariant) =>
                            colorTotal + sizeVariant.quantity,
                        0
                    ),
                0
            );
            state.totalPrice = state.variant.reduce(
                (total, colorVariant) =>
                    total +
                    colorVariant.sizeVariant.reduce(
                        (colorTotal, sizeVariant) =>
                            colorTotal + sizeVariant.totalQuantity,
                        0
                    ),
                0
            );
            state.totalWeight = state.variant.reduce(
                (total, colorVariant) =>
                    total +
                    colorVariant.sizeVariant.reduce(
                        (colorTotal, sizeVariant) =>
                            colorTotal + sizeVariant.quantity * 1,
                        0
                    ),
                0
            );
            // state.totalShippingCost =
            //     state.totalWeight * state.shippingCostPerKG;
        },
        decreaseQuantity: (state, action) => {
            const { size, productQuantity, price } = action.payload;
        
            // Find the selected color variant
            const selectedColorProp = state.variant.find(
                (colorVariant) => colorVariant.colorName === state.selectedColor
            );
        
            if (selectedColorProp) {
                const sizeExists = selectedColorProp.sizeVariant.find(
                    (item) => item.size === size
                );
        
                if (sizeExists && sizeExists.quantity > 0) {
                    sizeExists.quantity = Math.max(sizeExists.quantity - 1, 0);
                    sizeExists.price = price;
                    sizeExists.totalQuantity = sizeExists.quantity * price;
                }
            }
        
            // Recalculate totals for all products in variant array
            state.totalQuantity = state.variant.reduce(
                (total, colorVariant) =>
                    total +
                    colorVariant.sizeVariant.reduce(
                        (colorTotal, sizeVariant) =>
                            colorTotal + sizeVariant.quantity,
                        0
                    ),
                0
            );
            state.totalPrice = state.variant.reduce(
                (total, colorVariant) =>
                    total +
                    colorVariant.sizeVariant.reduce(
                        (colorTotal, sizeVariant) =>
                            colorTotal + sizeVariant.totalQuantity,
                        0
                    ),
                0
            );
            state.totalWeight = state.variant.reduce(
                (total, colorVariant) =>
                    total +
                    colorVariant.sizeVariant.reduce(
                        (colorTotal, sizeVariant) =>
                            colorTotal + sizeVariant.quantity * 1,
                        0
                    ),
                0
            );
            // state.totalShippingCost =
            //     state.totalWeight * state.shippingCostPerKG;
        },
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
            console.log(action.payload.shippingCostPerKG)
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
