import { useGetProductDescriptionQuery } from '@/redux/api/productDescriptionApi/productDescriptionApi';
import React from 'react';

const ProductDescription = ({id}) => {

    const {data:productDescription, isLoading, isError, error} = useGetProductDescriptionQuery(id)
    // console.log(data)
    const richText = productDescription?.data?.description;
    return (
        <div className='container p-3 p-md-5 lh-lg border w-100'  dangerouslySetInnerHTML={{ __html: richText }}>
            
        </div>
    );
};

export default ProductDescription;