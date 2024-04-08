import React from 'react'
import "../CSS/NewsDetail.css"
import news1 from "../images/news/news1.jpg"
import news2 from "../images/news/news2.jpg"
import news3 from "../images/news/news3.jpg"
import news4 from "../images/news/news4.jpg"

function NewsDetail({renderNews}) {
    let news = renderNews
    let elementimg = ""
    if (news.nimage == "news1"){
        elementimg = <img src={news1} style={{ height: "100%" }} className='w-100'/>
    }
    else if (news.nimage == "news2"){
        elementimg = <img src={news2} style={{ height: "100%" }} className='w-100'/>
    }
    else if (news.nimage == "news3"){
        elementimg = <img src={news3} style={{ height: "100%" }} className='w-100'/>
    }
    else if (news.nimage == "news4"){
        elementimg = <img src={news4} style={{ height: "100%" }} className='w-100'/>
    }
    return (
        <section align="center">
            <div className="news-detail bg-white">
                <div className="title-news">{news.ntitle}</div>
                <div className="news-image">
                    {elementimg}
                </div>
                <div className="news-content">
                   {news.ndesc}
                </div>
            </div>
        </section>

    )
}

export default NewsDetail