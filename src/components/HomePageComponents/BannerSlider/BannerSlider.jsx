"use client";

import { useState, useEffect } from "react";
import { Card, Carousel } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useGetBannersQuery } from "@/redux/api/bannerApi/bannerApi";
import BannerSkeleton from "@/components/shared/Loader/BannerSkeleton";
import Image from "next/image";
import { base } from "@/redux/api/apiEndpoints";

const BannerSlider = () => {
    const { data: bannersData, isLoading, isError, endpointName, error } = useGetBannersQuery();

    // console.log(bannersData);

    const [imageHeight, setImageHeight] = useState(400);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setImageHeight(200);
            } else {
                setImageHeight(300);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Initial setup

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    if (isLoading) {
        return <BannerSkeleton />;
    }

    // console.log(process.env.NEXT_PUBLIC_BASE_URL);

    if (bannersData) {
        return (
            <section className="container py-0 mt-1">
                <div>
                    <Swiper
                        spaceBetween={5}
                        slidesPerView={1}
                        onSlideChange={() => console.log("slide change")}
                        onSwiper={(swiper) => console.log(swiper)}
                        breakpoints={{
                            // when window width is >= 768px
                            768: {
                                // width: 700,
                                slidesPerView: 2,
                            },
                            1024: {
                                // width: 980,
                                slidesPerView: 2,
                            },
                        }}
                    >
                        {bannersData?.data?.banners?.map((bannerData) => {
                            // console.log(bannerData);
                            return (
                                <SwiperSlide key={bannerData.id}>
                                    {" "}
                                    <Card
                                        style={{
                                            height: `${imageHeight}px`,
                                        }}
                                    >
                                        <Image
                                            variant="top"
                                            src={base + bannerData.post_thumb}
                                            alt="banner-image"
                                            fill
                                            priority={true}
                                        />
                                    </Card>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </section>
        );
    }
};

export default BannerSlider;
