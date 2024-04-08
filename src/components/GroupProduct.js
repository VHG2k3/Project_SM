import React from 'react'
import "../CSS/Products.css"
import Product from './Product'
import { Link } from 'react-router-dom'
function GroupProduct({renderCategory,renderProducts}) {
    console.log("renderProduct:",renderProducts)
    let elementProduct = renderProducts.map((item,index)=>{
        if (index <= 3){
            return <Product renderProduct={item} renderType={renderCategory}/>
        }       
    })
    const ConvertString = (str) => {
        // Chuyển đổi chuỗi từ có dấu sang không dấu
        let convertedStr = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        // Thay thế khoảng trắng bằng dấu "-"
        convertedStr = convertedStr.toLowerCase().replace(/\s+/g, '_');
        return convertedStr;
      }
      let route = ConvertString(renderCategory.ctitle)
    return (
        <div className="group-product bg-white">
            <div className="title-group d-flex">
                <p className="Categories">{renderCategory.ctitle}</p>
                <Link to={`/products/${route}`}>Xem tất cả</Link>
            </div>
            <div className="container">
                <div className="row">

                {elementProduct}

                </div>
            </div>
        </div>
    )
}

export default GroupProduct