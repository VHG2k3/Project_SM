import React from 'react'
import "../CSS/ProductDetail.css"
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

//Trẻ em
function ProductDetail({renderProduct}) {
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
    function formatMoney(amount) {
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      }
    return (
        <section>
            <div className="product-detail bg-white">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="product-image">
                                {elementimg}
                            </div>
                        </div>
                        <div className="col-6 mt-5 ps-5">
                            <p className="title">{product.ptitle}</p>
                            <span style={{
                                        color: "#2c2e53",
                                        fontFamily: '"Gotham-Medium"',
                                        fontSize: "1rem",
                                        paddingRight:"2rem"
                                    }}> Giá gốc:      
                            </span>
                            <span style={{fontSize: "0.8rem",
                                                    color: "#888888",
                                                    textDecoration: "line-through",
                                                    fontFamily: "Gotham-Medium",
                                                    paddingTop: "0rem"}}>    {formatMoney(product.pprice)} VND</span>
                            <br></br>
                            <span style={{
                                        color: "#2c2e53",
                                        fontFamily: '"Gotham-Medium"',
                                        fontSize: "1rem",
                                        paddingRight:"2rem"
                                    }}> Giá bán: 
                        
                            </span>
                            <span style={{ fontSize: "0.8rem",
                                                        color: "rgb(230 14 14)",
                                                        fontFamily: "Gotham-Medium"}}>{formatMoney(product.psellprice)} VND
                            </span>
                           
                            <p className="pmaterial">
                                <span
                                    style={{
                                        color: "#2c2e53",
                                        fontFamily: '"Gotham-Medium"',
                                        fontSize: "1rem",
                                        paddingRight:"2rem"
                                    }}
                                >
                                    Chất liệu:
                                </span>
                                <span>{product.material}</span>
                            </p>
                            <p className="psize">
                                <span
                                    style={{
                                        color: "#2c2e53",
                                        fontFamily: '"Gotham-Medium"',
                                        fontSize: "1rem",
                                        paddingRight:"2rem"
                                    }}
                                >    Kích thước: 
                                </span>
                               <span> {product.size} </span> 
                            </p>
                            <p className="pdesc">
                                <span
                                    style={{
                                        color: "#2c2e53",
                                        fontFamily: '"Gotham-Medium"',
                                        fontSize: "1rem",
                                        paddingRight:"2rem"
                                    }}
                                >
                                    Mô tả: 
                                </span>
                                <span>{product.pdesc}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ProductDetail