import Image from "next/image";
import React from "react";

const Benefits = () => {
    return (
        <div className="container">
            <section className="service border-section small-section">
                <div className="row">
                    <div className=" col-6 col-md-3 service-block">
                        <div className="media">
                            <Image
                                src="https://www.chinashipbd.com/_next/static/media/products.3b9c544b.svg"
                                alt=""
                                width={100}
                                height={100}
                            />
                            <div className="media-body my-3">
                                <h4>free shipping</h4>
                                <p>free shipping world wide</p>
                            </div>
                        </div>
                    </div>
                    <div className=" col-6 col-md-3 service-block">
                        <div className="media">
                            <Image
                                src="https://www.chinashipbd.com/_next/static/media/products.3b9c544b.svg"
                                alt=""
                                width={100}
                                height={100}
                            />
                            <div className="media-body my-3">
                                <h4>free shipping</h4>
                                <p>free shipping world wide</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-3 service-block">
                        <div className="media">
                            <Image
                                src="https://www.chinashipbd.com/_next/static/media/products.3b9c544b.svg"
                                alt=""
                                width={100}
                                height={100}
                            />
                            <div className="media-body my-3">
                                <h4>free shipping</h4>
                                <p>free shipping world wide</p>
                            </div>
                        </div>
                    </div>
                    <div className=" col-6 col-md-3 service-block">
                        <div className="media">
                            <Image
                                src="https://www.chinashipbd.com/_next/static/media/products.3b9c544b.svg"
                                alt=""
                                width={100}
                                height={100}
                            />
                            <div className="media-body my-3">
                                <h4>free shipping</h4>
                                <p>free shipping world wide</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Benefits;
