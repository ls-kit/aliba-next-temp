import React, { useRef, useState } from "react";

const ProductVariantRow = () => {

    const [productQuantity, setProductQuantity] = useState(0)
    const quantityRef = useRef()


    const increaseQuantity = () => {
        setProductQuantity(quantity=> quantity + 1) 
    }
    const decreaseQuantity = () => {
        setProductQuantity(quantity=> quantity - 1) 
    }


    return (
        <tr>
            <td className="p-2 text-center">Wheat</td>
            <td className="p-2 text-center">Good</td>
            <td className="p-2 text-center">
                {/* <button className="btn btn-solid btn-sm">Add to cart</button> */}
                <div className="d-flex mb-4 justify-content-center align-items-center">
                    <button className="btn btn-solid btn-sm btn-xs"
                    onClick={decreaseQuantity}
                    >
                                    <i className="fas fa-minus"></i>
                                </button>

                                <form>
                                    <input type="number" className="px-1 w-100 border-0 text-center"
                                    defaultValue={productQuantity}
                                    />
                                </form>

                    <button className="btn btn-solid btn-sm btn-xs"
                    onClick={increaseQuantity}
                    >
                                    <i className="fas fa-plus"></i>
                                </button>
                            </div>
            </td>
        </tr>
    );
};

export default ProductVariantRow;
