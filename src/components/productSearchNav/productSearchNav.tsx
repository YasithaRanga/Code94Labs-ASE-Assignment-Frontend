import {
  Autocomplete,
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material"
import styles from "./productSearchNav.module.css"
import { Link } from "react-router-dom"
import { Search } from "@mui/icons-material"
import { useState } from "react"
import { AddProduct } from "../../features/products/addProduct/AddProduct"

interface Option {
  label: string
  value: string
}

export default function ProductSearchNav() {
  const [searchQuery, setSearchQuery] = useState("")
  const [options, setOptions] = useState<Option[]>([])

  const handleSearch = () => {
    // Perform search operation using the searchQuery state
    console.log("Search Query:", searchQuery)
  }

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string,
  ) => {
    setSearchQuery(value)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Simulate API call to get autocomplete suggestions
    const query = event.target.value
    const newOptions: Option[] = []

    // Add your logic to fetch autocomplete suggestions from an API or local data source
    // Here, we simulate by generating options based on the query
    for (let i = 0; i < 5; i++) {
      newOptions.push({
        label: `${query} ${i}`,
        value: `${query}-${i}`,
      })
    }

    setOptions(newOptions)
  }

  return (
    <div>
      <div className={styles.row}>
        <div className={styles.nav}>
          <Autocomplete
            options={options}
            getOptionLabel={(option) => option.label}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Search"
                value={searchQuery}
                onChange={handleChange}
                variant="outlined"
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleSearch}>
                        <Search />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            )}
            onInputChange={handleInputChange}
          />
          <Box>
            <Link to="add">
              <Button
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
                }}
              >
                New Product
              </Button>
            </Link>
            <Link to="favorites">
              <Button
                className={styles.fav_products_btn}
                sx={{
                  width: "72px",
                  height: "54px",
                  border: "1px solid var(--custom-blue)",
                  borderRadius: "10px",
                }}
              >
                <Box
                  component="img"
                  sx={{
                    height: 35,
                    width: 35,
                  }}
                  src="/assets/starred.svg"
                />
              </Button>
            </Link>
          </Box>
        </div>
      </div>
    </div>
  )
}
