import ProductCards from "@/components/shared/ProductCards/ProductCards";
import React from "react";

const RelatedProducts = () => {
    return (
        <div>
            <section className="section-b-space ratio_asos">
                <div className="container">
                    <div className="row">
                        <div className="col-12 product-related">
                            <h2>related products</h2>
                        </div>
                    </div>

                    <ProductCards />
                </div>
            </section>
        </div>
    );
};

export default RelatedProducts;
