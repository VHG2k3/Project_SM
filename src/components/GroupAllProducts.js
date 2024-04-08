import React from 'react'
import "../CSS/Products.css"
import Product from './Product'
import banner_product_2 from "../images/products/banner-product-2.png"
import banner_product_1 from "../images/products/banner-product-1.jpg"
function GroupAllProducts({renderGroup,renderSP}) {
    let elementProduct = renderSP.map((item,index)=>{
        if (item.categorieID == renderGroup.id){
            return <Product renderProduct={item} renderType={renderGroup}/>
        }       
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
            <div className="group-product bg-white">
            <div className="title-group d-flex">
                <p className="Categories">{renderGroup.ctitle}</p>
            </div>
            <div className="container">
                <div className="row">
                {elementProduct}

                </div>
            </div>
        </div>
        </section>
   
  )
}

export default GroupAllProducts