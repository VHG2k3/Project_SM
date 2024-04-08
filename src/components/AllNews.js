import React, { useState, useEffect } from 'react'
import "../CSS/News.css"
import axios from "../api/apixm"
import news1 from "../images/news/news1.jpg"
import news2 from "../images/news/news2.jpg"
import news3 from "../images/news/news3.jpg"
import news4 from "../images/news/news4.jpg"
import { Link } from 'react-router-dom'

function AllNews() {
    const [ListNews, setListNews] = useState([])
    const getAllNews = async () => {
        let respones = await axios.get("news")
        setListNews(respones.data)
    }
    useEffect(() => {
        getAllNews();
    }, [])
    console.log("NewsAll:",ListNews)
    const getElementimg = (image)=>{
        let elementimg = ""
        if (image == "news1") {
            return elementimg = <img src={news1} className='w-100' />
        }
        else if (image == "news2") {
            return elementimg = <img src={news2} className='w-100' />
        }
        else if (image == "news3") {
            return elementimg = <img src={news3} className='w-100' />
        }
        else if (image == "news4") {
            return elementimg = <img src={news4} className='w-100' />
        }
    }
    const ConvertString = (str) => {
        // Chuyển đổi chuỗi từ có dấu sang không dấu
        let convertedStr = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        // Thay thế khoảng trắng bằng dấu "-"
        convertedStr = convertedStr.toLowerCase().replace(/\s+/g, '_');
        return convertedStr;
      }
    let elementmain = ListNews.map((item, index) => {
        let elementimg = getElementimg(item.nimage)
        let routeNews = ConvertString(item.ntitle);
        if (index == 0) {
            return <div className="col-7">
                <div className="news-left">
                    <p className="title-news-left">
                        {item.ntitle}
                    </p>
                    <p className="content-news-left">
                        {item.ndesc}
                    </p>
                    <Link to={`/news/${routeNews}`}>
                            {elementimg}
                    </Link>
                </div>
            </div>
        }
    })

    let elementright = ListNews.map((item, index) => {
        let elementimg = getElementimg(item.nimage)
        let routeNews = ConvertString(item.ntitle);
        if (index != 0) {
            return <div className="news-right d-flex">
                <div className="news-right-image">
                         {elementimg}
                </div>
                <div>
                    <div className="title-news-right">
                        <Link to={`/news/${routeNews}`}>{item.ntitle}</Link>
                    </div>
                    <div>
                        <i className="fa-regular fa-clock" />
                        <span
                            style={{
                                fontFamily: '"Gotham-Medium"',
                                paddingLeft: "0.5rem",
                                fontSize: "0.9rem"
                            }}
                        >
                            {item.ndate}
                        </span>
                    </div>
                </div>
            </div>
        }
    })


    return (
        <section>
            <div className="List-news bg-white">
                <div className="container">
                    <div className="row">
                        {elementmain}
                        <div className="col-5 ps-4">
                            <p
                                style={{
                                    fontSize: "1rem",
                                    fontFamily: '"Gotham-Medium"',
                                    textTransform: "uppercase",
                                    color: "#2c2e53"
                                }}
                            >
                                Bài viết mới
                            </p>
                            <hr
                                style={{
                                    width: "6.5rem",
                                    height: 3,
                                    marginTop: "-1rem",
                                    backgroundColor: "#bd945f",
                                    opacity: 1
                                }}
                            />
                           {elementright}
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default AllNews