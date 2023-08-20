"use client";
import TopNavbar from "./TopNavbar";
import MobileNavbar from "../MobileNavbar/MobileNavbar";

const MainNavbar = () => {
    const openNav = () => {
        // console.log('nav opened')
        document.getElementById("mySidenav").classList.add("open-side");
    };
    const openRightSide = () => {
        console.log('nav opened')
        document.getElementById("main-menu").classList.add("open-side");
    };
    const closeNav =() => {
        document.getElementById("mySidenav").classList.remove('open-side');
    }
    const closeRightSide =() => {
        document.getElementById("main-menu").classList.remove('open-side');
    }
    return (
        <header>
            {/* <div className="mobile-fix-option"></div> */}
            <TopNavbar />
            <div className="container position-relative">
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
                                                    <a href="#">clothing</a>
                                                    <ul className="mega-menu clothing-menu">
                                                        <li>
                                                            <div className="row m-0">
                                                                <div className="col-xl-4">
                                                                    <div className="link-section">
                                                                        <h5>womens fashion</h5>
                                                                        <ul>
                                                                            <li>
                                                                                <a href="#">
                                                                                    dresses
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#">
                                                                                    skirts
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#">
                                                                                    westarn wear
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#">
                                                                                    ethic wear
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#">
                                                                                    sport wear
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                        <h5>mens fashion</h5>
                                                                        <ul>
                                                                            <li>
                                                                                <a href="#">
                                                                                    sports wear
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#">
                                                                                    western wear
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#">
                                                                                    ethic wear
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xl-4">
                                                                    <div className="link-section">
                                                                        <h5>accessories</h5>
                                                                        <ul>
                                                                            <li>
                                                                                <a href="#">
                                                                                    fashion
                                                                                    jewellery
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#">
                                                                                    caps and hats
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#">
                                                                                    precious
                                                                                    jewellery
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#">
                                                                                    necklaces
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#">
                                                                                    earrings
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#">
                                                                                    wrist wear
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#">ties</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#">
                                                                                    cufflinks
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#">
                                                                                    pockets squares
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xl-4">
                                                                    <a
                                                                        href="#"
                                                                        className="mega-menu-banner"
                                                                    >
                                                                        <img
                                                                            src="../assets/images/mega-menu/fashion.jpg"
                                                                            alt=""
                                                                            className="img-fluid blur-up lazyload"
                                                                        />
                                                                    </a>
                                                                </div>
                                                            </div>
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
                                                    {" "}
                                                    <a href="#">Accessories</a>
                                                    <ul>
                                                        <li>
                                                            <a href="#">fashion jewellery</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">caps and hats</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">precious jewellery</a>
                                                        </li>
                                                        <li>
                                                            {" "}
                                                            <a href="#">more..</a>
                                                            <ul>
                                                                <li>
                                                                    <a href="#">necklaces</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">earrings</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">wrist wear</a>
                                                                </li>
                                                                <li>
                                                                    {" "}
                                                                    <a href="#">accessories</a>
                                                                    <ul>
                                                                        <li>
                                                                            <a href="#">ties</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">
                                                                                cufflinks
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">
                                                                                pockets squares
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">helmets</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">scarves</a>
                                                                        </li>
                                                                        <li>
                                                                            {" "}
                                                                            <a href="#">more...</a>
                                                                            <ul>
                                                                                <li>
                                                                                    <a href="#">
                                                                                        accessory
                                                                                        gift sets
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#">
                                                                                        travel
                                                                                        accessories
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#">
                                                                                        phone cases
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                                <li>
                                                                    <a href="#">belts & more</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">wearable</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="#">house of design</a>
                                                </li>
                                                <li>
                                                    {" "}
                                                    <a href="#">beauty & personal care</a>
                                                    <ul>
                                                        <li>
                                                            <a href="#">makeup</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">skincare</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">premium beaty</a>
                                                        </li>
                                                        <li>
                                                            {" "}
                                                            <a href="#">more</a>
                                                            <ul>
                                                                <li>
                                                                    <a href="#">fragrances</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">luxury beauty</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">hair care</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">tools & brushes</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
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
                                <div className="brand-logo">
                                    <a href="index.html">
                                        <img
                                            src={
                                                "https://themes.pixelstrap.com/multikart/assets/images/icon/logo.png"
                                            }
                                            className="img-fluid"
                                            alt=""
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="menu-right pull-right">
                                <div>
                                    <nav id="main-nav">
                                        <div className="toggle-nav" onClick={openRightSide}>
                                            <i className="fa fa-bars sidebar-bar"></i>
                                        </div>
                                        <ul id="main-menu" className="sm pixelstrap sm-horizontal rightsidenav">
                                            <li>
                                                <div 
                                                onClick={closeRightSide}
                                                className="mobile-back text-end">
                                                    Back
                                                    <i
                                                        className="fa fa-angle-right ps-2"
                                                        aria-hidden="true"
                                                    ></i>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="index.html">Home</a>
                                            </li>
                                            <li className="mega" id="hover-cls">
                                                <a href="#">feature</a>
                                            </li>
                                            <li>
                                                <a href="#">shop</a>
                                            </li>
                                            <li>
                                                <a href="#">product</a>
                                            </li>
                                            <li>
                                                <a href="#">pages</a>
                                            </li>
                                            <li>
                                                <a href="#">blog</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                <MobileNavbar />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default MainNavbar;
