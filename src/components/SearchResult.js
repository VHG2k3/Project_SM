import React, { useEffect, useState } from 'react'
import "../CSS/Search.css"
import Product from './Product'
function SearchResult({renderKey,renderListSearch,renderCategories}) {
    const [elementHeader,setElementHeader] = useState("")
    const [elementResult ,setElementResult] = useState("")
    const [sort,setSort] = useState("")
    const [list,setList] = useState([])
    const handelChange = (ev) =>{
        setSort(ev.target.value)

    }
    useEffect(()=>{
        setList(renderListSearch)
    },[renderListSearch])
    useEffect(()=>{
        // console.log("sort:",sort)
        if(sort!=""){
            if(sort=="ASC"){
                const sortList = [...list].sort((a, b) => a.psellprice - b.psellprice)
                setList(sortList)
            }
            else if(sort=="DESC"){
                const sortList = [...list].sort((a, b) => b.psellprice - a.psellprice)
                setList(sortList)
            }
            else{
                setList(renderListSearch)
            }
        }
    },[sort])
    useEffect(()=>{
        if (renderKey==="" || list.lenght === 0){
            setElementHeader( <div className='header'>
           <p>Không tìm thấy kết quả cho từ khóa "{renderKey}"</p></div>)
           setElementResult("")
       }
       else{
          
           setElementHeader(<div className='header position-relative'>
           {/* TH1 */}
           <p>Kết quả tìm kiếm cho từ khóa "{renderKey}"</p>
           <select class="form-select position-absolute" aria-label="Default select example" name="sort" value={sort} onChange={handelChange}>
               <option selected >Sắp xếp</option>
               <option  value="ASC">Giá thấp đến cao</option>
               <option value="DESC">Giá cao đến thấp</option>
           
           </select>
       </div>)
            let element = list.map((item,index)=>{
                let category = ""
                renderCategories.map((cate,index)=>{
                    if (item.categorieID === cate.id){
                        category=cate
                    }
                    return category
                })
                // console.log("renderType: ",category)
                return <Product renderProduct={item} renderType={category}/>
            })

            setElementResult(element)
       }
    },[renderKey,list])
    
  return (
    <div className='result-search'>
        <div className='result pb-5'>
            {elementHeader}
            <div className='container'>
                <div className='row'>
                    {elementResult}
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default SearchResult