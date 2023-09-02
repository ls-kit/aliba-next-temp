import { increaseQuantity } from "@/redux/slice/singleProductSlice";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";

const ProductVariantRow = ({ variant }) => {

    const dispatch = useDispatch()
    // console.log(variant);
    const { Value } = variant?.size;
    const { Price, Quantity } = variant?.element;

    const [productQuantity, setProductQuantity] = useState(0);
    const quantityRef = useRef();

    const increaseQuantityHandler = () => {
        setProductQuantity((quantity) => Math.min(quantity + 1, Quantity));
        console.log(productQuantity)
        dispatch(increaseQuantity({size:Value, productQuantity:productQuantity, price:Price.MarginPrice,}))        
    };
    const decreaseQuantityHandler = () => {
        setProductQuantity((quantity) => Math.max(0, quantity - 1)); // Prevent negative values
    };
    
    const handleQuantityChange = (event) => {
        const newQuantity = parseInt(event.target.value);
        if (!isNaN(newQuantity)) {
            setProductQuantity(Math.min(Math.max(newQuantity, 0), Quantity));
        }
    };

    return (
        <tr>
            <td className="p-2 text-center">{Value}</td>
            <td className="p-2 text-center">{Price?.MarginPrice}</td>
            <td className="p-2 text-center">
                <div className="d-flex mb-4 justify-content-center align-items-center">
                    <button className="btn btn-solid btn-sm btn-xs" onClick={decreaseQuantityHandler}>
                        <i className="fas fa-minus"></i>
                    </button>

                    <form>
                        <input
                            type="number"
                            className="px-1 w-100 border-0 text-center"
                            value={productQuantity}
                            onChange={handleQuantityChange}
                        />
                    </form>

                    <button className="btn btn-solid btn-sm btn-xs" onClick={increaseQuantityHandler}>
                        <i className="fas fa-plus"></i>
                    </button>
                </div>
                <div>
                    <p>{Quantity}</p>
                </div>
            </td>
        </tr>
    );
};

export default ProductVariantRow;
