"use client";

import Image from "next/image";
import Link from "next/link";
import Rating from "react-rating";

const SingleProductCard = ({ data }) => {
    // console.log(data);
    const { img, name, rating, sale_price, product_code, total_sold } = data;
    return (
        <Link href={`/product/${product_code}`} className="col-12 col-md-3">
            <div className="collection-product-wrapper">
                <div className="product-wrapper-grid">
                    <div className="product-box border">
                        <Image
                            src={img}
                            // className=""
                            alt="product-image"
                            className="w-100 mx-auto"
                            width={260}
                            height={260}
                        />

                        <div className="cart-info cart-wrap bottom-50">
                            <button
                                data-bs-toggle="modal"
                                data-bs-target="#addtocart"
                                title="Add to cart"
                            >
                                <i className="fa-solid fa-cart-shopping"></i>
                            </button>{" "}
                            <a href="javascript:void(0)" title="Add to Wishlist">
                                <i className="fa-solid fa-heart" aria-hidden="true"></i>
                            </a>{" "}
                            <a
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#quick-view"
                                title="Quick View"
                            >
                                <i className="fa-solid fa-search" aria-hidden="true"></i>
                            </a>{" "}
                            <a href="compare.html" title="Compare">
                                <i className="fa-solid fa-arrows-rotate"></i>
                            </a>
                        </div>

                        <div className="product-detail p-3">
                            <div>
                                <h6>SOLD:{total_sold}</h6>
                            </div>
                            <div className="rating">
                                <Rating
                                    initialRating={Number(rating)}
                                    readonly
                                    emptySymbol="fa fa-star-o text-black"
                                    fullSymbol="fa fa-star text-warning"
                                />
                            </div>
                            <div>
                                <h6>{name}</h6>
                            </div>

                            <h4>৳{sale_price}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default SingleProductCard;