import React, { useEffect, useState } from 'react'
import "../CSS/Products.css"
import banner_product_2 from "../images/products/banner-product-2.png"
import banner_product_1 from "../images/products/banner-product-1.jpg"
import axios from "../api/apixm"
import GroupProduct from './GroupProduct';
function AllProducts() {
    const [allProducts, setAllProducts] = useState([])
    const getAllProducts = async () => {
        let respones = await axios.get("products")
        console.log("ListProduct:",respones);
        setAllProducts(respones.data)

    }
    const [allCategories, setAllCategories] = useState([])
    const getAllCategories = async () => {
        let respones = await axios.get("categories")
        // console.log("ListCategories:",respones);
        setAllCategories(respones.data)
    }
   useEffect(()=>{
        getAllProducts();
        getAllCategories();
   },[])
   
   let elementGroupProduct = allCategories.map((item,index)=>{
        let groupProduct = allProducts.filter(p => p.categorieID === item.id);
        return <GroupProduct renderCategory={item} renderProducts={groupProduct}/>
    })
    return (
        <section className="bg-f3 ">
            <div
                id="carouselExampleCaptions"
                className="carousel slide"
                data-bs-ride="carousel"
            >
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to={0}
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    />
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to={1}
                        aria-label="Slide 2"
                    />
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to={2}
                        aria-label="Slide 3"
                    />
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active mt-5">
                        <img
                            src={banner_product_1}
                            className="d-block w-100"
                            alt="..."
                        />
                    </div>
                    <div className="carousel-item mt-5">
                        <img
                            src={banner_product_2}
                            className="d-block w-100 h-banner"
                            alt="..."
                        />
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            {elementGroupProduct}
        </section>

    )
}

export default AllProducts