import React,{useState,useEffect} from 'react'
import "../CSS/home.css"
import banner_product_2 from "../images/products/banner-product-2.png"
import icon_cau_thang from '../images/categories/icon-cau-thang.png'
import icon_do_trang_tri from '../images/categories/icon-do-trang-tri.png'
import icon_phong_bep from '../images/categories/icon-phong-bep.png'
import icon_phong_khach from '../images/categories/icon-phong-khach.png'
import icon_phong_ngu from '../images/categories/icon-phong-ngu.png'
import icon_phong_tam from '../images/categories/icon-phong-tam.png'
import icon_tre_em from '../images/categories/icon-tre-em.png'
import icon_van_phong from '../images/categories/icon-van-phong.png'
import axios from "../api/apixm"
import { Link } from 'react-router-dom'
function Home() {
  const [allCategories, setAllCategories] = useState([])
    const getAllCategories = async () => {
        let respones = await axios.get("categories")
        // console.log("ListCategories:",respones);
        setAllCategories(respones.data)
    }
   useEffect(()=>{
        getAllCategories();
   },[])
   const ConvertString = (str) => {
    // Chuyển đổi chuỗi từ có dấu sang không dấu
    let convertedStr = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    // Thay thế khoảng trắng bằng dấu "-"
    convertedStr = convertedStr.toLowerCase().replace(/\s+/g, '_');
    return convertedStr;
  }
   let elementCategory = allCategories.map((item,index)=>{
        let elementimg = ""
        if (item.cimage == "icon_cau_thang"){
            elementimg = (<img className='w-50' src={icon_cau_thang}/>)
        }
        else if (item.cimage == "icon_phong_khach"){
          elementimg = (<img className='w-50' src={icon_phong_khach}/>)
        }
        else if (item.cimage == "icon_do_trang_tri"){
          elementimg = (<img className='w-50' src={icon_do_trang_tri}/>)
        }
        else if (item.cimage == "icon_phong_bep"){
          elementimg = (<img className='w-50' src={icon_phong_bep}/>)
        }
        else if (item.cimage == "icon_phong_ngu"){
          elementimg = (<img className='w-50' src={icon_phong_ngu}/>)
        }
        else if (item.cimage == "icon_phong_tam"){
          elementimg = (<img className='w-50' src={icon_phong_tam}/>)
        }
        else if (item.cimage == "icon_tre_em"){
          elementimg = (<img className='w-50' src={icon_tre_em}/>)
        }
        else if (item.cimage == "icon_van_phong"){
          elementimg = (<img className='w-50' src={icon_van_phong}/>)
        }
        let route = ConvertString(item.ctitle)
        
        return(
                <div className='col-md-3 category'>
                <Link to={`/products/${route}`}>
                    {elementimg}
                    <p className='title-category'>{item.ctitle}</p>
                </Link>
                </div>
        )
   })
  return (
    <section>
    <div className="position-relative ">
        <div className="banner-home">
        <img className="w-100" src={banner_product_2}/>
        </div>
        <div className="homeBanner_Content position-absolute">
        <h1>THẾ GIỚI NỘI THẤT SỐ 1 VIỆT NAM</h1>
        <p>
            Sứ mệnh của chúng tôi là kết hợp hài hòa giữa ý tưởng và mong muốn của
            khách hàng, đem lại những phút giây thư giãn tuyệt vời bên gia đình và
            những người thân yêu.
        </p>
        </div>
        <div className='ListCategories position-absolute'>
            <div className='container'>
                <div className='row'>
                    {elementCategory}
                </div>
            </div>
        </div>
    </div>
</section>

  )
}

export default Home