"use client";
import BannerSlider from "@/components/HomePageComponents/BannerSlider/BannerSlider";
import Benefits from "@/components/HomePageComponents/Benefits/Benefits";
import TopProducts from "@/components/HomePageComponents/TopProducts/TopProducts";

export default function Home() {
    return (
        <div>
            <BannerSlider />
            <Benefits />
            <TopProducts />
        </div>
    );
}
