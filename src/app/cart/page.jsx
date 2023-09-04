"use client";

import Cart from "@/components/CartPageComponents/Cart";
import Checkout from "@/components/CartPageComponents/Checkout";
import PrivateRoute from "@/helpers/PrivateRoute";
import useFirebase from "@/hooks/useFirebase";
import { useRouter } from "next/navigation";




const CartPage = () => {
    const { user, loading } = useFirebase()
    const router = useRouter()
    console.log(user)
    if (!loading && user.auth) {
        
        return (
        
    
    
            <div>
            <section className="section-b-space">
                <div className="container">
                    <div className="checkout-page">
                        <div className="checkout-form">
                            <form>
                                <div className="row">
                                    <Cart />
                                    <Checkout />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            </div>
    
        
            );
    }
    if (!loading && !user.auth) {
        router.push('/login')
    }
};

export default CartPage;
