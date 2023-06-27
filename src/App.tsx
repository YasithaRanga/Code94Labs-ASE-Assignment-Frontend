import logo from "./logo.svg"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import Layout from "./features/products/Layout"
import { AddProduct } from "./features/products/addProduct/AddProduct"
import { AllProduct } from "./features/products/allProducts/AllProduct"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AllProduct />} />
          <Route path="add" element={<AddProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
