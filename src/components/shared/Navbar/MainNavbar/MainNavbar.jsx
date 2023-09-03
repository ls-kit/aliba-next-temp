"use client";
import TopNavbar from "./TopNavbar";
import MobileNavbar from "../MobileNavbar/MobileNavbar";
import Link from "next/link";
import { useGetGeneralsQuery } from "@/redux/api/generalApi/generalApi";
import Image from "next/image";
import { base } from "@/redux/api/apiEndpoints";
import { primary_color } from "@/helpers/settings";
import SearchBox from "@/components/productsPageComponents/ProductFilter/SearchBox";

const MainNavbar = () => {
    const { data: generalsData, isLoading, isError, error } = useGetGeneralsQuery();

    if (generalsData) {
        // console.log(JSON.parse(generalsData?.data?.general));
        var parsedGeneralData = JSON.parse(generalsData?.data?.general);
    }

    const openNav = () => {
        // console.log('nav opened')
        document.getElementById("mySidenav").classList.add("open-side");
    };
    const openRightSide = () => {
        // console.log("nav opened");
        document.getElementById("main-menu").classList.add("open-side");
    };
    const closeNav = () => {
        document.getElementById("mySidenav").classList.remove("open-side");
    };
    const closeRightSide = () => {
        document.getElementById("main-menu").classList.remove("open-side");
    };
    return (
        <header style={{ backgroundColor:primary_color }} className="mb-1" >
            <div className="mobile-fix-option"  style={{backgroundColor:primary_color}}></div>
            {/* <TopNavbar /> */}
            <div className="container position-relative "  >
                <div className="row">
                    <div className="col-sm-12">
                        <div className="main-menu">
                            <div className="menu-left">
                                <div className="navbar">
                                    <a href="" onClick={openNav}>
                                        <div className="bar-style">
                                            <i
                                                className="fa fa-bars sidebar-bar"
                                                aria-hidden="true"
                                            ></i>
                                        </div>
                                    </a>
                                    <div id="mySidenav" className="sidenav">
                                        <a
                                            href="javascript:void(0)"
                                            className="sidebar-overlay"
                                            onClick={closeNav}
                                        ></a>
                                        <nav>
                                            <div onClick={closeNav}>
                                                <div className="sidebar-back text-start">
                                                    <i
                                                        className="fa fa-angle-left pe-2"
                                                        aria-hidden="true"
                                                    ></i>{" "}
                                                    Back
                                                </div>
                                            </div>
                                            <ul id="sub-menu" className="sm pixelstrap sm-vertical">
                                                
                                                <li>
                                                    {" "}
                                                    <a href="#">bags</a>
                                                    <ul>
                                                        <li>
                                                            <a href="#">shopper bags</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">laptop bags</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">clutches</a>
                                                        </li>
                                                        <li>
                                                            {" "}
                                                            <a href="#">purses</a>
                                                            <ul>
                                                                <li>
                                                                    <a href="#">purses</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">wallets</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">leathers</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">satchels</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    {" "}
                                                    <a href="#">bags</a>
                                                    <ul>
                                                        <li>
                                                            <a href="#">shopper bags</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">laptop bags</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">clutches</a>
                                                        </li>
                                                        <li>
                                                            {" "}
                                                            <a href="#">purses</a>
                                                            <ul>
                                                                <li>
                                                                    <a href="#">purses</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">wallets</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">leathers</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">satchels</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    {" "}
                                                    <a href="#">bags</a>
                                                    <ul>
                                                        <li>
                                                            <a href="#">shopper bags</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">laptop bags</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">clutches</a>
                                                        </li>
                                                        <li>
                                                            {" "}
                                                            <a href="#">purses</a>
                                                            <ul>
                                                                <li>
                                                                    <a href="#">purses</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">wallets</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">leathers</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">satchels</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    {" "}
                                                    <a href="#">footwear</a>
                                                    <ul>
                                                        <li>
                                                            <a href="#">sport shoes</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">formal shoes</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">casual shoes</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="#">watches</a>
                                                </li>
                                                
                                                <li>
                                                    <a href="#">house of design</a>
                                                </li>
                                                
                                                <li>
                                                    <a href="#">home & decor</a>
                                                </li>
                                                <li>
                                                    <a href="#">kitchen</a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <Link href={'/'}>
                                <Image
                                    width={50}
                                    height={50}
                                    priority
                                    src={
                                        !isLoading &&
                                        generalsData &&
                                        base +
                                            parsedGeneralData?.frontend_logo_menu
                                    }
                                    alt="logo"
                                    className="logo"
                                />
                                </Link>
                            </div>
                            <div className='w-50 d-none d-md-block'>
                            <SearchBox/>
                            </div>
                            <div className="menu-right pull-right">
                                
                                <MobileNavbar />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 d-block d-md-none mb-3 w-100" >
                        <SearchBox />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default MainNavbar;
