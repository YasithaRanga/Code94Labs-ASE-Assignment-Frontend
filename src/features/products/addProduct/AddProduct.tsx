import { useState } from "react"
import { useAppSelector, useAppDispatch } from "../../../app/hooks"
import styles from "./AddProduct.module.css"
import layoutStyles from "../Layout.module.css"
import { Link } from "react-router-dom"
import { Box } from "@mui/material"

export default function AddProduct() {
  const dispatch = useAppDispatch()
  const [incrementAmount, setIncrementAmount] = useState("2")

  return (
    <div>
      <div className={styles.container}>
        <div className={layoutStyles.page_title}>
          <Link to="/">
            <h1>PRODUCTS</h1>
          </Link>
          <Box
            component="img"
            src="/assets/arrow.svg"
            sx={{
              mx: "15px",
              width: "37px",
              height: "37px",
            }}
          />
          <h2>Add new product</h2>
        </div>
      </div>
    </div>
  )
}
