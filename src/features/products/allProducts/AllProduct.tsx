import { useState } from "react"
import { useAppSelector, useAppDispatch } from "../../../app/hooks"
import styles from "./AllProduct.module.css"
import layoutStyles from "../Layout.module.css"
import ProductSearchNav from "../../../components/productSearchNav/productSearchNav"

export function AllProduct() {
  const dispatch = useAppDispatch()

  return (
    <div>
      <div className={styles.container}>
        <div className={layoutStyles.page_title}>
          <h1>PRODUCTS</h1>
        </div>
        <ProductSearchNav />
      </div>
    </div>
  )
}
