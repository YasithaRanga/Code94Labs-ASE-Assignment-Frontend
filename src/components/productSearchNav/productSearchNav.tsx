import {
  Autocomplete,
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material"
import styles from "./productSearchNav.module.css"
import { Link } from "react-router-dom"
import { Search } from "@mui/icons-material"
import { useState } from "react"

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
            sx={{
              maxWidth: "767px",
              width: "100%",
              borderRadius: "50px",
              backgroundColor: "var(--custom-light-grey)",
              height: "64px",
              border: "none",
              ".MuiInputBase-root": {
                p: "10px",
                pr: "16px !important",
                pl: "29px",
                height: "64px",
              },
              ".MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
            }}
            getOptionLabel={(option) => option.label}
            renderInput={(params) => (
              <TextField
                sx={{
                  ".MuiInputBase-input": {
                    fontFamily: "Satoshi",
                    fontSize: "19px",
                    fontWeight: 500,
                    color: "var(--custom-dark)",
                  },
                  ".MuiOutlinedInput-input::-webkit-input-placeholder": {
                    fontFamily: "Satoshi",
                    fontSize: "19px",
                    fontWeight: 500,
                    color: "var(--custom-dark-grey)",
                  },
                }}
                {...params}
                placeholder="Search for products"
                value={searchQuery}
                onChange={handleChange}
                variant="outlined"
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        sx={{
                          backgroundColor: "var(--custom-blue)",
                          color: "var(--custom-white)",
                          fontSize: "19px",
                          fontWeight: 700,
                          fontFamily: "Satoshi",
                          width: "180px",
                          height: "45px",
                          borderRadius: "80px",
                          p: 0,
                          "&:hover": {
                            color: "var(--custom-blue)",
                            border: "1px solid var(--custom-blue)",
                            ".search-icon": {
                              backgroundColor: "var(--custom-blue)",
                            },
                          },
                        }}
                        onClick={handleSearch}
                      >
                        <Box
                          className="search-icon"
                          sx={{
                            width: "20px",
                            height: "20px",
                            mr: "10px",
                            mask: "url(/assets/akar-icons_search.svg)",
                            backgroundColor: "var(--custom-white)",
                          }}
                        ></Box>
                        Search
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            )}
            onInputChange={handleInputChange}
          />
          <Box>
            <Link to="/add">
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
                  "&:hover": {
                    color: "var(--custom-blue)",
                    border: "1px solid var(--custom-blue)",
                  },
                }}
              >
                New Product
              </Button>
            </Link>
            <Link to="/favourites">
              <Button
                className={styles.fav_products_btn}
                sx={{
                  width: "72px",
                  height: "54px",
                  marginLeft: "12px",
                  border: "1px solid var(--custom-blue)",
                  borderRadius: "10px",
                }}
              >
                <Box
                  component="img"
                  sx={{
                    height: "35px",
                    width: "35px",
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
