import logo from "./logo.svg"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import Layout from "./features/products/Layout"
import AddProduct from "./features/products/addProduct/AddProduct"
import AllProducts from "./features/products/allProducts/AllProducts"
import FavouriteProducts from "./features/products/favouriteProducts/favouriteProducts"
import UpdateProduct from "./features/products/updateProduct/UpdateProduct"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AllProducts />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/favourites" element={<FavouriteProducts />} />
          <Route path="/edit" element={<UpdateProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
