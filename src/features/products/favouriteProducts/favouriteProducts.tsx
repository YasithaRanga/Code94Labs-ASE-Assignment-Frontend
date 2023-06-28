import { useState } from "react"
import { useAppSelector, useAppDispatch } from "../../../app/hooks"
import styles from "./favouriteProducts.module.css"
import layoutStyles from "../Layout.module.css"
import ProductSearchNav from "../../../components/productSearchNav/productSearchNav"
import { Link } from "react-router-dom"

export default function FavouriteProducts() {
  const dispatch = useAppDispatch()

  return (
    <div>
      <div className={styles.container}>
        <div className={layoutStyles.page_title}>
          <Link to="/">
            <h1>FAVOURITE PRODUCTS</h1>
          </Link>
        </div>
        <ProductSearchNav />
      </div>
    </div>
  )
}
