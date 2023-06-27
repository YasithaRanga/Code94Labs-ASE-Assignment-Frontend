import { useState } from "react"
import { useAppSelector, useAppDispatch } from "../../../app/hooks"
import styles from "./AllProduct.module.css"

export function AllProduct() {
  const dispatch = useAppDispatch()

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.page_title}>
          <h1>PRODUCTS</h1>
        </div>
      </div>
    </div>
  )
}
