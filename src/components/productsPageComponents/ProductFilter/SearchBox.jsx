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
        <div>
            <div className="row height d-flex justify-content-center align-items-center">
                <div className="col-md-12">
                    <div className="form">
                        <i className="fa-solid fa-camera " style={{ cursor:'pointer' }}></i>
                        <input
                            type="text"
                            className="form-control form-input"
                            placeholder="Search anything..."
                            ref={searchRef}
                        />
                        <span className="left-pan" onClick={searchHandler} style={{ cursor:'pointer' }} >
                            <i className="fa-solid fa-search"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchBox;
