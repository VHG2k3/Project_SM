import React from 'react'
import "../CSS/Products.css"
// phòng khách
import ke_do from '../images/products/Phong-Khach/ke_do.jpg'
import ke_tv from '../images/products/Phong-Khach/ke_tv.jpg'
import sofa from '../images/products/Phong-Khach/sofa.jpg'
import gia_do from '../images/products/Phong-Khach/gia_do.jpg'
import Ban_uong_nuoc from '../images/products/Phong-Khach/Ban_uong_nuoc.jpg'
import ban_uong_nuoc_2 from '../images/products/Phong-Khach/ban_uong_nuoc_2.jpg'
// phòng bếp
import ban_an from '../images/products/Phong-bep/ban_an.jpg'
import ban_tra from '../images/products/Phong-bep/ban_tra.jpg'
//Phòng ngủ
import giuong_chau_au from '../images/products/Phong_ngu/giuong_chau_au.jpg'
import giuong_go from '../images/products/Phong_ngu/giuong_go.jpg'
import tu_quan_ao from '../images/products/Phong_ngu/tu_quan_ao.jpg'
//Đồ trang trí
import den_chum from '../images/products/Do-trang-tri/den_chum.jpg'
//Cầu thang
import cau_thang from '../images/products/Cau-thang/cau_thang.jpg'
//Phòng tắm
import Bon_rua_2 from '../images/products/Phong-tam/Bon_rua_2.jpg'
import Bon_rua_mat from '../images/products/Phong-tam/Bon_rua_mat.jpg'
import Bon_rua_tay from '../images/products/Phong-tam/Bon_rua_tay.jpg'
import Tu_am_tuong from '../images/products/Phong-tam/Tu_am_tuong.jpg'
import { Link } from 'react-router-dom'
//Trẻ em

function Product({renderProduct,renderType}) {
    let product = renderProduct
    let elementimg = ""
    if (product.pimage==="ke_do"){
         elementimg = (<img className="product-image" src={ke_do} />);
    }
    else if (product.pimage == "Ban_uong_nuoc"){
        elementimg = (<img className="product-image" src={Ban_uong_nuoc} />);
    }
    else if (product.pimage == "ban_uong_nuoc_2"){
        elementimg = (<img className="product-image" src={ban_uong_nuoc_2} />);
    }
    else if (product.pimage == "ke_tv"){
        elementimg = (<img className="product-image" src={ke_tv} />);
    }
    else if (product.pimage == "sofa"){
        elementimg = (<img className="product-image" src={sofa} />);
    }
    else if (product.pimage == "gia_do"){
        elementimg = (<img className="product-image" src={gia_do} />);
    }
    else if (product.pimage == "ban_an"){
        elementimg = (<img className="product-image" src={ban_an} />);
    }
    else if (product.pimage == "ban_tra"){
        elementimg = (<img className="product-image" src={ban_tra} />);
    }
    else if (product.pimage == "giuong_chau_au"){
        elementimg = (<img className="product-image" src={giuong_chau_au} />);
    }
    else if (product.pimage == "giuong_go"){
        elementimg = (<img className="product-image" src={giuong_go} />);
    }
    else if (product.pimage == "tu_quan_ao"){
        elementimg = (<img className="product-image" src={tu_quan_ao} />);
    }
    else if (product.pimage == "den_chum"){
        elementimg = (<img className="product-image" src={den_chum} />);
    }
    else if (product.pimage == "cau_thang"){
        elementimg = (<img className="product-image" src={cau_thang} />);
    }
    else if (product.pimage == "Bon_rua_mat"){
        elementimg = (<img className="product-image" src={Bon_rua_mat} />);
    }
    else if (product.pimage == "Bon_rua_2"){
        elementimg = (<img className="product-image" src={Bon_rua_2} />);
    }
    else if (product.pimage == "Bon_rua_tay"){
        elementimg = (<img className="product-image" src={Bon_rua_tay} />);
    }
    else if (product.pimage == "Tu_am_tuong"){
        elementimg = (<img className="product-image" src={Tu_am_tuong} />);
    }
    const ConvertString = (str) => {
        // Chuyển đổi chuỗi từ có dấu sang không dấu
        let convertedStr = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        // Thay thế khoảng trắng bằng dấu "-"
        convertedStr = convertedStr.toLowerCase().replace(/\s+/g, '_');
        return convertedStr;
      }
    let routeCategory = ConvertString(renderType.ctitle)
    let routeProduct = ConvertString(renderProduct.ptitle)
    function formatMoney(amount) {
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      }
    return (
        <div className="col-md-3 mt-5">
            <Link
                to={`/products/${routeCategory}/${routeProduct}`}
                style={{ textDecoration: "none" }}
            >
                <div className="product ms-2">
                    {elementimg}
                    <p className="title">{product.ptitle}</p>
                    <p className="price">{formatMoney(product.pprice)} VND</p>
                    <p className="sellprice">{formatMoney(product.psellprice)} VND</p>
                </div>
            </Link>
        </div>
    )
}

export default Product