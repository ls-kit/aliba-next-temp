'use client'
import { useRef } from "react";
import { useRouter } from 'next/navigation'

const SearchBox = () => {

    const router = useRouter();

    const searchRef = useRef()

    const searchHandler = () => {
        const searchValue = searchRef.current.value;
        if (searchValue) {
            console.log(searchValue)
            router.push(`/search/${searchValue}`)
        }
    }


    return (

            <div className="row  d-flex justify-content-center align-items-center">
                <div className="col-md-12">
                    <div className="form">
                        <i className="fa-solid fa-camera " style={{ cursor:'pointer' }}></i>
                        <input
                            type="text"
                            className="form-control form-input rounded-pill "
                            placeholder="Search anything..."
                        ref={searchRef}
                        style={{ height: "40px" }}
                        />
                        <span className="left-pan rounded-pill" onClick={searchHandler} style={{ cursor:'pointer' }} >
                            <i className="fa-solid fa-search"></i>
                        </span>
                    </div>
                </div>
            </div>

    );
};

export default SearchBox;
