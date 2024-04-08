import React, { useEffect, useState } from 'react'
import "../CSS/layout.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from "../api/apixm"

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
import { Navigate } from "react-router-dom";
//Trẻ em
function Header({renderCategories,onSearch}) {
    const [listProduct, setListProduct] = useState([])
    const getAllProduct = async () => {
        let respones = await axios.get("products")
        setListProduct(respones.data)
    }
    useEffect(() => {
        getAllProduct();
    }, [])

    const [keyword, setKeyword] = useState("")
    const handelChange = (ev) => {
        setKeyword(ev.target.value)
    }

    const ConvertString = (str) => {
        // Chuyển đổi chuỗi từ có dấu sang không dấu
        let convertedStr = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        // Thay thế khoảng trắng bằng dấu "-"
        convertedStr = convertedStr.toLowerCase().replace(/\s+/g, '_');
        return convertedStr;
      }
    const Search = (key) => {
        let listSearch = []
        if (!(key === null || key === "" || key === undefined)) {
            listSearch = listProduct.filter(x => x.ptitle.toLowerCase().includes(key.toLowerCase()));
        }
        else {
            listSearch = []
        }
        return listSearch
    }
    const [elementSearch, setElementSearch] = useState("")
    useEffect(() => {
        let result = Search(keyword)
        console.log("keyword:", keyword)
        console.log("result :", result)
        if (!(result === null || result.length === 0)) {
            let list = result.map((item, index) => {
                let elementimg = ""
                if (item.pimage==="ke_do"){
                     elementimg = (<img className="w-img" src={ke_do} />);
                }
                else if (item.pimage == "Ban_uong_nuoc"){
                    elementimg = (<img className="w-img" src={Ban_uong_nuoc} />);
                }
                else if (item.pimage == "ban_uong_nuoc_2"){
                    elementimg = (<img className="w-img" src={ban_uong_nuoc_2} />);
                }
                else if (item.pimage == "ke_tv"){
                    elementimg = (<img className="w-img" src={ke_tv} />);
                }
                else if (item.pimage == "sofa"){
                    elementimg = (<img className="w-img" src={sofa} />);
                }
                else if (item.pimage == "gia_do"){
                    elementimg = (<img className="w-img" src={gia_do} />);
                }
                else if (item.pimage == "ban_an"){
                    elementimg = (<img className="w-img" src={ban_an} />);
                }
                else if (item.pimage == "ban_tra"){
                    elementimg = (<img className="w-img" src={ban_tra} />);
                }
                else if (item.pimage == "giuong_chau_au"){
                    elementimg = (<img className="w-img" src={giuong_chau_au} />);
                }
                else if (item.pimage == "giuong_go"){
                    elementimg = (<img className="w-img" src={giuong_go} />);
                }
                else if (item.pimage == "tu_quan_ao"){
                    elementimg = (<img className="w-img" src={tu_quan_ao} />);
                }
                else if (item.pimage == "den_chum"){
                    elementimg = (<img className="w-img" src={den_chum} />);
                }
                else if (item.pimage == "cau_thang"){
                    elementimg = (<img className="w-img" src={cau_thang} />);
                }
                else if (item.pimage == "Bon_rua_mat"){
                    elementimg = (<img className="w-img" src={Bon_rua_mat} />);
                }
                else if (item.pimage == "Bon_rua_2"){
                    elementimg = (<img className="w-img" src={Bon_rua_2} />);
                }
                else if (item.pimage == "Bon_rua_tay"){
                    elementimg = (<img className="w-img" src={Bon_rua_tay} />);
                }
                else if (item.pimage == "Tu_am_tuong"){
                    elementimg = (<img className="w-img" src={Tu_am_tuong} />);
                }

                let TitleCategory = ""
                renderCategories.map((category,index)=>{
                        if (item.categorieID === category.id){
                            TitleCategory = category.ctitle
                        }
                })
                // console.log("TitleCategory",TitleCategory)
                let routeCategory = ConvertString(TitleCategory)
                let routeProduct = ConvertString(item.ptitle)
                return <div className='col-12 mb-3 reSearch'>
                        <Link to={`/products/${routeCategory}/${routeProduct}`}>
                            {elementimg}
                            <span
                                style={{
                                    marginLeft: '2rem', fontFamily: "Gotham-Medium",
                                    fontSize: "0.9rem",
                                    color: "#bd945f"
                                }}
                            >
                                {item.ptitle}
                            </span>

                            <span style={{
                                marginLeft: '2rem', fontFamily: "Gotham-Medium",
                                fontSize: "0.9rem",
                                color: "#bd945f"
                            }}> {'>'} </span>
                        </Link>
                </div>

            })
            let element = (<div className='List_reSearch'>
                <div className='container'>
                    <div className='row mt-3 ml-3 '>
                        {list}

                    </div>
                </div>
            </div>)
            setElementSearch(element)
        }
        else {
            let element = ""
            setElementSearch(element)
        }
    }, [keyword])

    const navigate = useNavigate()
    // Bắt sự kiện cho button Search
    const handleSearch = (ev)=>{
        ev.preventDefault();
        let listSearch = Search(keyword)
        onSearch(keyword,listSearch)
        setElementSearch("")
        navigate("/tim-kiem")
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        GTL
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li>
                                <Link to="/" className="nav-link nav-item">
                                    TRANG CHỦ
                                </Link>
                            </li>
                            <li>
                                <Link to="/products" className="nav-link nav-item">
                                    SẢN PHẨM
                                </Link>
                            </li>
                            <li>
                                <Link to="/news" className="nav-link nav-item">
                                    TIN TỨC
                                </Link>
                            </li>
                            <li>
                                <Link to="/introduce" className="nav-link nav-item me-30">
                                    {" "}
                                    GIỚI THIỆU{" "}
                                </Link>
                            </li>
                            <form className="d-flex">
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                    name="keyword"
                                    value={keyword}
                                    onChange={handelChange}
                                />
                                <button className="btn btn-outline-success" type="submit" onClick={handleSearch}>
                                    Search
                                </button>
                            </form>
                        </ul>
                    </div>
                </div>
            </nav>
            {elementSearch}

        </>

    )
}

export default Header