
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import AllProducts from './components/AllProducts';
import AllNews from './components/AllNews';
import { useEffect, useState } from 'react';
import axios from "./api/apixm"
import GroupAllProducts from './components/GroupAllProducts';
import ProductDetail from './components/ProductDetail';
import NewsDetail from './components/NewsDetail';
import SearchResult from './components/SearchResult';
function App() {
  const [allCategories, setAllCategories] = useState([])
    const getAllCategories = async () => {
        let respones = await axios.get("categories")
        // console.log("ListCategories:",respones);
        setAllCategories(respones.data)
    }
    const [allProducts, setAllProducts] = useState([])
    const getAllProducts = async () => {
        let respones = await axios.get("products")
        // console.log("ListProduct:",respones);
        setAllProducts(respones.data)

    }
    const [ListNews, setListNews] = useState([])
    const getAllNews = async () => {
        let respones = await axios.get("news")
        setListNews(respones.data)
    }
   useEffect(()=>{
        getAllCategories();
        getAllProducts();
        getAllNews();
   },[])
   const ConvertString = (str) => {
    // Chuyển đổi chuỗi từ có dấu sang không dấu
    let convertedStr = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    // Thay thế khoảng trắng bằng dấu "-"
    convertedStr = convertedStr.toLowerCase().replace(/\s+/g, '_');
    return convertedStr;
  }
   let elementRouterCategory = allCategories.map((item,index)=>{
        let route = ConvertString(item.ctitle)
        return <Route path={`/products/${route}`} element={<GroupAllProducts renderGroup={item} renderSP={allProducts}/>}></Route>
   })
   let elementRouterProduct = allCategories.map((item, index) => {
    let routeCategory = ConvertString(item.ctitle);
    return allProducts.map((product, idx) => {
      if (product.categorieID === item.id) {
        let routeProduct = ConvertString(product.ptitle);
        // Trả về một Route component với key duy nhất và element tương ứng
        return (
          <Route key={`${index}-${idx}`} path={`/products/${routeCategory}/${routeProduct}`} element={<ProductDetail renderProduct={product}/>} />
        );
      }
      return null; // Trả về null nếu không tìm thấy sản phẩm nào thuộc danh mục này
    });
  });

  let elementRouteNews = ListNews.map((item,index)=>{
      let routeNews = ConvertString(item.ntitle);
      return <Route path={`/news/${routeNews}`} element={<NewsDetail renderNews={item}/>}></Route>
  })
  const [key, setKey] = useState("")
  const [listSearch, setListSearch] = useState([])
  const handleSearch =(keyword, listSearch)=>{
        setKey(keyword);
        setListSearch(listSearch)
  }
  return (
    <div className="App">
        <BrowserRouter>
            <Header renderCategories= {allCategories} onSearch={handleSearch}/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/products" element={<AllProducts></AllProducts>}></Route>
                <Route path="/news" element={<AllNews/>}></Route>
                <Route path="/tim-kiem" element={<SearchResult renderKey={key} renderListSearch={listSearch} renderCategories={allCategories}/>}></Route>
                {elementRouterCategory}
                {elementRouterProduct}
                {elementRouteNews}
            </Routes>
            <Footer/>  
        </BrowserRouter>
    </div>
  );
}

export default App;
