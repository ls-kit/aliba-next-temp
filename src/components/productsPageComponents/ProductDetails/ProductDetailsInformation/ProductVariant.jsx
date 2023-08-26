import Image from "next/image";
import React,{useState,useEffect} from "react";

const ProductVariant = ({Attributes}) => {
    const [selectColor, setSelectColor] = useState()

    const colorImageHandler = (value) => {
        setSelectColor(value)
    }

    console.log(selectColor)
    
    return (
        <div className="w-100 flex flex-col justify-content-center align-items-center">
            <div className="flex flex-row justify-content-center align-items-center">
                <h4>COLOR: {selectColor}  </h4>
                {
                    Attributes?.filter(attribute=>attribute.PropertyName==="Color")?.map(attr => {
                        const {MiniImageUrl,Value, Vid } = attr;
                        return <Image
                            id="color-img"
                             key={Vid}
                             width={50}
                             height={50}
                             src={MiniImageUrl}
                             alt=""
                             className={`m-1 rounded ${selectColor === Value ? 'border border-danger' : 'border'}`}
                            onClick={() => colorImageHandler(Value)}
                            
                         />
                    })
                }
            </div>
            <div>
            <table class="table table-bordered table-striped">
  <tr>
      <th>Product ID</th>
      <th>Product Name</th>
      <th>Product Quality</th>
      <th>Product Quantity</th>
  </tr>
  <tr>
      <td>1</td>
      <td>Wheat</td>
      <td>Good</td>
      <td>200 Bags</td>
  </tr>
  <tr>
      <td>2</td>
      <td>Rice</td>
      <td>Good</td>
      <td>250 Bags</td>
                    </tr>
                    <tr>
      <td>3</td>
      <td>Sugar</td>
      <td>Good</td>
      <td>200 Bags</td>
  </tr>  
</table>
            </div>
        </div>
    );
};

export default ProductVariant;
