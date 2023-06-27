import { useState } from "react"
import { useAppSelector, useAppDispatch } from "../../../app/hooks"
import styles from "./AddProduct.module.css"

export function AddProduct() {
  const dispatch = useAppDispatch()
  const [incrementAmount, setIncrementAmount] = useState("2")

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.page_title}>
          <h1>PRODUCTS</h1>
          <img src="/assets/arrow.svg" />
          <h2>Add new product</h2>
        </div>
      </div>
    </div>
  )
}
