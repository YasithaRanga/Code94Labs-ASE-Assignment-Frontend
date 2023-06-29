import { useEffect, useState } from "react"
import { useAppSelector, useAppDispatch } from "../../../app/hooks"
import styles from "./favouriteProducts.module.css"
import layoutStyles from "../Layout.module.css"
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material"
import ProductSearchNav from "../../../components/productSearchNav/productSearchNav"
import { Link } from "react-router-dom"
import { getAllProducts, toggleFavouriteProduct } from "../productSlice"
import React from "react"
import DeleteProduct from "../deleteProduct/deleteProduct"

export default function FavouriteProducts() {
  const dispatch = useAppDispatch()
  const [open, setOpen] = React.useState(false)
  const [deleteSKU, setDeleteSKU] = React.useState()
  const handleOpen = (sku) => {
    setOpen(true)
    setDeleteSKU(sku)
  }
  const handleClose = () => setOpen(false)

  const { products } = useAppSelector((state) => state.product)

  const toggleFavourite = async (sku) => {
    await dispatch(toggleFavouriteProduct(sku))
    await dispatch(getAllProducts())
  }

  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch, toggleFavourite])

  return (
    <div>
      <div className={styles.container}>
        <DeleteProduct open={open} handleClose={handleClose} sku={deleteSKU} />
        <div className={layoutStyles.page_title}>
          <Link to="/">
            <h1>FAVOURITE PRODUCTS</h1>
          </Link>
        </div>
        <ProductSearchNav />
        <Box sx={{ mt: "58px" }}>
          <TableContainer
            sx={{
              maxWidth: "1198px",
              mx: "auto",
              boxShadow: "none",
              backgroundColor: "transparent",
            }}
            component={Paper}
          >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead
                sx={{
                  ".MuiTableCell-root": {
                    fontFamily: "Satoshi",
                    fontSize: "19px",
                    fontWeight: 700,
                    color: "var(--custom-blue)",
                    pt: 0,
                    borderBottom: "none",
                  },
                }}
              >
                <TableRow>
                  <TableCell sx={{ width: "10%" }} align="left">
                    SKU
                  </TableCell>
                  <TableCell sx={{ width: "15%" }} align="center">
                    IMAGE
                  </TableCell>
                  <TableCell sx={{ width: "30%" }} align="left">
                    PRODUCT NAME
                  </TableCell>
                  <TableCell sx={{ width: "20%" }} align="left">
                    QUANTITY
                  </TableCell>
                  <TableCell sx={{ width: "20%" }} align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((product) => {
                  return product.favourite ? (
                    <TableRow
                      key={product.sku}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                        ".MuiTableCell-root": {
                          color: "var(--custom-dark)",
                          fontSize: "19px",
                          fontFamily: "Satoshi",
                          fontWeight: 500,
                        },
                      }}
                    >
                      <TableCell
                        component="th"
                        align="left"
                        scope="row"
                        sx={{
                          opacity: 0.5,
                        }}
                      >
                        {product.sku}
                      </TableCell>
                      <TableCell align="center">
                        <Box
                          sx={{
                            width: "66px",
                            height: "66px",
                            borderRadius: "6px",
                          }}
                          component="img"
                          src={
                            product.defaultImage
                              ? "http://localhost:3000/" + product.defaultImage
                              : "http://localhost:3000/" + product.images[0]
                          }
                        />
                      </TableCell>
                      <TableCell align="left">{product.productName}</TableCell>
                      <TableCell align="left">{product.quantity}</TableCell>
                      <TableCell align="right">
                        <Box
                          onClick={() => handleOpen(product.sku)}
                          component="img"
                          sx={{ mr: "14px", cursor: "pointer" }}
                          src="/assets/delete-icon.svg"
                        />
                        <Link to={"/edit?sku=" + product.sku}>
                          <Box
                            component="img"
                            sx={{ mr: "10px", cursor: "pointer" }}
                            src="/assets/edit-icon.svg"
                          />
                        </Link>
                        <Box
                          onClick={() => toggleFavourite(product.sku)}
                          component="img"
                          sx={{ cursor: "pointer" }}
                          src={
                            product.favourite
                              ? "/assets/starred.svg"
                              : "/assets/star.svg"
                          }
                        />
                      </TableCell>
                    </TableRow>
                  ) : (
                    ""
                  )
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </div>
    </div>
  )
}
