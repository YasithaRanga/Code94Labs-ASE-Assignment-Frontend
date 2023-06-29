import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState, AppThunk } from "../../app/store"
import axios from "axios"

export interface ProductState {
  products: any
  status: "idle" | "loading" | "failed"
  error: any
}

const initialState: ProductState = {
  products: [],
  status: "idle",
  error: "",
}

export const getAllProducts = createAsyncThunk(
  "product/getAllProducts",
  async () => {
    try {
      const response = await axios.get("http://localhost:3000/products")
      return response.data
    } catch (error) {
      throw Error("Failed to fetch products")
    }
  },
)

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (sku: any, { rejectWithValue }) => {
    try {
      await axios.delete(`http://localhost:3000/products/${sku}`)
      return sku
    } catch (error) {
      throw rejectWithValue("Failed to delete product")
    }
  },
)

export const addProduct = createAsyncThunk(
  "product/addProduct",
  async (formData: any, { rejectWithValue }) => {
    try {
      await axios.post("http://localhost:3000/products", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
    } catch (error) {
      console.error("Error uploading images:", error)
    }
  },
)

export const toggleFavouriteProduct = createAsyncThunk(
  "product/toggleFavouriteProduct",
  async (sku: any, { rejectWithValue }) => {
    try {
      const product = await axios.get(`http://localhost:3000/products/${sku}`)

      const existingProduct = product.data

      const updatedProduct = {
        ...existingProduct,
        favourite: !product.data.favourite,
      }

      const response = await axios.put(
        `http://localhost:3000/products/favourite/${sku}`,
        updatedProduct,
      )

      return response
    } catch (error) {
      throw rejectWithValue("Failed to get product")
    }
  },
)

export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async (formData: any, { rejectWithValue }) => {
    try {
      const product = await axios.get(
        `http://localhost:3000/products/${formData.get("sku")}`,
      )

      const existingProduct = product.data

      var updatedProduct

      if (formData.get("images")) {
        updatedProduct = formData
      } else {
        updatedProduct = {
          ...existingProduct,
          productName: formData.get("productName"),
          quantity: formData.get("quantity"),
          description: formData.get("description"),
          defaultImage: formData.get("defaultImage"),
        }
      }

      const response = await axios.put(
        `http://localhost:3000/products/${formData.get("sku")}`,
        updatedProduct,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      )

      return response
    } catch (error) {
      throw rejectWithValue("Failed to get product")
    }
  },
)

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.status = "loading"
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.status = "idle"
        state.products = action.payload
      })
      .addCase(getAllProducts.rejected, (state) => {
        state.status = "failed"
      })
      .addCase(deleteProduct.pending, (state) => {
        state.status = "loading"
        state.error = null
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.status = "idle"
        state.products = state.products.filter(
          (product) => product.sku !== action.payload,
        )
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.payload
      })
      .addCase(addProduct.pending, (state) => {
        state.status = "loading"
        state.error = null
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.status = "idle"
        state.products = state.products.filter(
          (product) => product.sku !== action.payload,
        )
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.payload
      })
      .addCase(toggleFavouriteProduct.pending, (state) => {
        state.status = "loading"
        state.error = null
      })
      .addCase(toggleFavouriteProduct.fulfilled, (state, action) => {
        state.status = "idle"
        state.products = state.products.filter(
          (product) => product.sku !== action.payload,
        )
      })
      .addCase(toggleFavouriteProduct.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.payload
      })
      .addCase(updateProduct.pending, (state) => {
        state.status = "loading"
        state.error = null
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.status = "idle"
        state.products = state.products.filter(
          (product) => product.sku !== action.payload,
        )
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.payload
      })
  },
})

export const {} = productSlice.actions

export default productSlice.reducer
