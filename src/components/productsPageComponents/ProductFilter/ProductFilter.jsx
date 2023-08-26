import PrizeRange from "./PrizeRange";
import SearchBox from "./SearchBox";

const ProductFilter = () => {
    return (
        <div className="collection-product-wrapper">
            <div className="product-top-filter">
                <div className="d-flex flex-column flex-md-row align-items-center justify-content-center container mx-auto py-5">
                    <div className=" w-100 py-3 py-m-5">
                        <PrizeRange />
                    </div>
                    <div className="w-100">
                        <SearchBox />
                    </div>
                    {/* <div className="collection-grid-view">
                                <ul>
                                    <li>
                                        <img
                                            src="../assets/images/icon/2.png"
                                            alt=""
                                            className="product-2-layout-view"
                                        />
                                    </li>
                                    <li>
                                        <img
                                            src="../assets/images/icon/3.png"
                                            alt=""
                                            className="product-3-layout-view"
                                        />
                                    </li>
                                    <li>
                                        <img
                                            src="../assets/images/icon/4.png"
                                            alt=""
                                            className="product-4-layout-view"
                                        />
                                    </li>
                                    <li>
                                        <img
                                            src="../assets/images/icon/6.png"
                                            alt=""
                                            className="product-6-layout-view"
                                        />
                                    </li>
                                </ul>
                            </div> */}
                    {/* <div className="product-page-per-view w-100 container">
                                <select>
                                    <option value="High to low">24 Products Par Page</option>
                                    <option value="Low to High">50 Products Par Page</option>
                                    <option value="Low to High">100 Products Par Page</option>
                                </select>
                            </div>
                            <div className="product-page-filter container w-100">
                                <select>
                                    <option value="High to low">Sorting items</option>
                                    <option value="Low to High">50 Products</option>
                                    <option value="Low to High">100 Products</option>
                                </select>
                            </div> */}
                </div>
            </div>
        </div>
    );
};

export default ProductFilter;
