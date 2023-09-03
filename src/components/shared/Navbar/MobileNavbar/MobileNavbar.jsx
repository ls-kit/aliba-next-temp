import { fb_page_id, primary_color, secondary_color } from "@/helpers/settings";
import useFirebase from "@/hooks/useFirebase";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Card } from "react-bootstrap";

const MobileNavbar = () => {
    const { user } = useFirebase()
    console.log(user)
    return (
        <div className="icon-nav" >
            
                
                <ul className="d-flex flex-row justify-content-around align-items-center"  style={{backgroundColor:primary_color}} >
                    <li className="onhover-div mobile-wishlist">
                        <Link href={"/products"}>
                            <i
                                className="fa-solid fa-heart text-white"
                                // onclick="openSearch()"
                            ></i>
                        </Link>
                    </li>
                    <li className="onhover-div mobile-cart">
                        <Link href={"/cart"}>
                            <i className="fa-solid fa-cart-flatbed text-white"></i>
                        </Link>
                        <span className="cart_qty_cls" style={{backgroundColor:secondary_color}}>2</span>
                    </li>
                    <li className="onhover-div mobile-home">
                        <Link href={"/"}>
                            <i className="fa-solid fa-home text-white"></i>
                        </Link>
                    </li>
                <li className="onhover-div mobile-setting">
                    {
                        user?.email && user?.photoURL &&
                        <Link href={"/profile"}>

                        <Image src={user?.photoURL} alt="user-img" width={30} height={30} className="rounded-circle" />
                        </Link>
                        
                    }
                    {
                        user?.email && !user?.photoURL && 
                        <Link href={"/profile"}>

                        <i className="fa-solid fa-user text-white"></i>
                        </Link>
                    
                    }
                    {
                        !user?.email && <Link href={"/login"}>
                        <i class="fa-solid fa-right-to-bracket text-white"></i>
                    </Link>
                    }
                    </li>
                    <li className="onhover-div mobile-messenger">
                        <a href={`https://m.me/${fb_page_id}`}>
                        <i class="fa-brands fa-facebook-messenger text-white"></i>
                        </a>
                    </li>
                </ul>
            
        </div>
    );
};

export default MobileNavbar;
