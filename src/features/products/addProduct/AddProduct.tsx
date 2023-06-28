import { useState } from "react"
import { useAppSelector, useAppDispatch } from "../../../app/hooks"
import styles from "./AddProduct.module.css"
import layoutStyles from "../Layout.module.css"
import { Link } from "react-router-dom"
import { Box, Button, TextField, Typography } from "@mui/material"
import { addProduct } from "../productSlice"

export default function AddProduct() {
  const dispatch = useAppDispatch()
  const [selectedImages, setSelectedImages] = useState([])

  const handleFileChange = (event) => {
    event.preventDefault()
    const files = Array.from(event.target.files)
    setSelectedImages(files)
  }

  const handleSubmit = async (event) => {
    const formData = new FormData()

    formData.append("sku", event.target.sku.value)
    formData.append("quantity", event.target.quantity.value)
    formData.append("productName", event.target.name.value)
    formData.append("description", event.target.description.value)

    selectedImages.forEach((image) => {
      formData.append("images", image)
    })

    dispatch(addProduct(formData))
  }

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
        <Box sx={{ mt: "40px" }} component="form" onSubmit={handleSubmit}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "44px",
              mb: "56px",
            }}
          >
            <Typography
              sx={{
                fontSize: "19px",
                fontFamily: "Satoshi",
                fontWeight: 500,
                color: "var(--custom-dark)",
              }}
            >
              SKU
            </Typography>
            <TextField
              required
              id="sku"
              name="sku"
              variant="outlined"
              sx={{
                maxWidth: "400px",
                width: "100%",
                height: "45px",
                border: "none",
                ".MuiInputBase-input": {
                  height: "19px",
                  p: "13px 26px",
                  backgroundColor: "var(--custom-light-grey)",
                  borderRadius: "5px",
                  fontSize: "14px",
                  fontFamily: "Satoshi",
                  fontWeight: 500,
                  color: "var(--custom-dark)",
                },
                ".MuiOutlinedInput-notchedOutline": { border: "none" },
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "116px",
              mb: "56px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "44px",
                width: "50%",
              }}
            >
              <Typography
                sx={{
                  fontSize: "19px",
                  fontFamily: "Satoshi",
                  fontWeight: 500,
                  color: "var(--custom-dark)",
                }}
              >
                Name
              </Typography>
              <TextField
                required
                id="name"
                name="name"
                variant="outlined"
                sx={{
                  maxWidth: "400px",
                  width: "100%",
                  height: "45px",
                  border: "none",
                  ".MuiInputBase-input": {
                    height: "19px",
                    p: "13px 26px",
                    backgroundColor: "var(--custom-light-grey)",
                    borderRadius: "5px",
                    fontSize: "14px",
                    fontFamily: "Satoshi",
                    fontWeight: 500,
                    color: "var(--custom-dark)",
                  },
                  ".MuiOutlinedInput-notchedOutline": { border: "none" },
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "44px",
                width: "50%",
              }}
            >
              <Typography
                sx={{
                  fontSize: "19px",
                  fontFamily: "Satoshi",
                  fontWeight: 500,
                  color: "var(--custom-dark)",
                }}
              >
                QTY
              </Typography>
              <TextField
                type="number"
                required
                id="quantity"
                name="quantity"
                variant="outlined"
                sx={{
                  maxWidth: "400px",
                  width: "100%",
                  height: "45px",
                  border: "none",
                  ".MuiInputBase-input": {
                    height: "19px",
                    p: "13px 26px",
                    backgroundColor: "var(--custom-light-grey)",
                    borderRadius: "5px",
                    fontSize: "14px",
                    fontFamily: "Satoshi",
                    fontWeight: 500,
                    color: "var(--custom-dark)",
                  },
                  ".MuiOutlinedInput-notchedOutline": { border: "none" },
                }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              mb: "56px",
            }}
          >
            <Typography
              sx={{
                fontSize: "19px",
                fontFamily: "Satoshi",
                fontWeight: 500,
                color: "var(--custom-dark)",
                mb: "10px",
              }}
            >
              Product Description
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontFamily: "Satoshi",
                fontWeight: 500,
                color: "var(--custom-dark)",
                opacity: 0.5,
                mb: "17px",
              }}
            >
              A small description about the product
            </Typography>
            <TextField
              required
              multiline
              minRows={4}
              id="description"
              name="description"
              variant="outlined"
              sx={{
                width: "100%",
                border: "none",
                ".MuiInputBase-input": {
                  height: "19px",
                  p: "13px 26px",
                  backgroundColor: "var(--custom-light-grey)",
                  borderRadius: "5px",
                  fontSize: "14px",
                  fontFamily: "Satoshi",
                  fontWeight: 500,
                  color: "var(--custom-dark)",
                },
                ".MuiInputBase-root": {
                  p: 0,
                },
                ".MuiOutlinedInput-notchedOutline": { border: "none" },
              }}
            />
          </Box>
          <Box sx={{ display: "flex", gap: "67px", mb: "91px" }}>
            <Box>
              <Typography
                sx={{
                  fontSize: "19px",
                  fontFamily: "Satoshi",
                  fontWeight: 500,
                  color: "var(--custom-dark)",
                  mb: "15px",
                }}
              >
                Product Images
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontFamily: "Satoshi",
                  fontWeight: 500,
                  color: "var(--custom-dark)",
                  opacity: 0.5,
                  width: "166px",
                }}
              >
                JPEG, PNG, SVG or GIF (Maximum file size 50MB)
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: "19px",
                  fontFamily: "Satoshi",
                  fontWeight: 500,
                  color: "var(--custom-blue)",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
                component="label"
              >
                Add Images
                <input
                  type="file"
                  hidden
                  multiple
                  required
                  accept=".jpg, .png, .jpeg, .svg, .gif"
                  onChange={handleFileChange}
                />
              </Typography>
            </Box>
          </Box>
          <Box sx={{ textAlign: "right" }}>
            <Button
              type="submit"
              className={styles.new_product_btn}
              sx={{
                backgroundColor: "var(--custom-blue)",
                fontFamily: "Satoshi",
                color: "var(--custom-light-grey)",
                boxShadow: "4px 4px 30px 0px rgba(93, 169, 185, 0.20)",
                width: "249px",
                height: "56px",
                textTransform: "none",
                px: "45px",
                py: "15px",
                fontSize: "19px",
                fontWeight: 700,
                borderRadius: "10px",
                "&:hover": {
                  color: "var(--custom-blue)",
                  border: "1px solid var(--custom-blue)",
                },
              }}
            >
              Add Product
            </Button>
          </Box>
        </Box>
      </div>
    </div>
  )
}
