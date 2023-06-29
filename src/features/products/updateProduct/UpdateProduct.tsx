import { useEffect, useState } from "react"
import { useAppSelector, useAppDispatch } from "../../../app/hooks"
import styles from "./UpdateProduct.module.css"
import layoutStyles from "../Layout.module.css"
import { Link, useSearchParams } from "react-router-dom"
import { Box, Button, TextField, Typography } from "@mui/material"
import { addProduct, getAllProducts, updateProduct } from "../productSlice"

export default function UpdateProduct() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [currentProduct, setCurrentProduct] = useState({
    sku: "",
    productName: "",
    quantity: 0,
    description: "",
    images: [],
  })
  const [defaultImage, setDefaultImage] = useState("")

  const sku = searchParams.get("sku")

  const { products } = useAppSelector((state) => state.product)

  const dispatch = useAppDispatch()
  const [selectedImages, setSelectedImages] = useState([])

  const handleFileChange = (event) => {
    event.preventDefault()
    const files = Array.from(event.target.files)
    setSelectedImages(files)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const formData = new FormData()

    formData.append("sku", event.target.sku.value)
    formData.append("quantity", event.target.quantity.value)
    formData.append("productName", event.target.name.value)
    formData.append("description", event.target.description.value)

    if (defaultImage) {
      formData.append("defaultImage", defaultImage)
    }

    if (selectedImages.length !== 0) {
      selectedImages.forEach((image) => {
        formData.append("images", image)
      })
    }

    dispatch(updateProduct(formData))
  }

  useEffect(() => {
    products.forEach((product) => {
      if (product.sku === sku) {
        setCurrentProduct(product)
      }
    })
  }, [])

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
          <h2>Edit product</h2>
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
              key={currentProduct.sku}
              disabled
              required
              id="sku"
              name="sku"
              variant="outlined"
              defaultValue={currentProduct.sku}
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
                key={currentProduct.productName}
                required
                id="name"
                name="name"
                variant="outlined"
                defaultValue={currentProduct.productName}
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
                key={currentProduct.quantity}
                defaultValue={currentProduct.quantity}
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
              key={currentProduct.description}
              required
              multiline
              minRows={4}
              id="description"
              name="description"
              variant="outlined"
              defaultValue={currentProduct.description}
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
            <Box sx={{ display: "flex" }}>
              <Box
                sx={{
                  mr: "23px",
                  height: "89px",
                  display: "flex",
                  gap: "10px",
                }}
              >
                {currentProduct.images.map((image) => (
                  <Box
                    key={image}
                    onClick={() => setDefaultImage(image)}
                    sx={{
                      position: "relative",
                      width: "85px",
                      height: "85px",
                      borderRadius: "10px",
                      ":hover::after": {
                        content: '"Set as default"',
                        fontSize: "14px",
                        position: "absolute",
                        fontFamily: "Satoshi",
                        left: 0,
                        bottom: "-25px",
                        color: "var(--custom-blue)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: "85px",
                        height: "85px",
                        borderRadius: "10px",
                        ...(defaultImage === image && {
                          border: "2px solid var(--custom-blue)",
                        }),
                        ":hover": {
                          cursor: "pointer",
                          border: "2px solid var(--custom-blue)",
                        },
                      }}
                      component="img"
                      src={"http://localhost:3000/" + image}
                    />
                  </Box>
                ))}
              </Box>
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
                Edit Images
                <input
                  type="file"
                  hidden
                  multiple
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
              Save changes
            </Button>
          </Box>
        </Box>
      </div>
    </div>
  )
}
