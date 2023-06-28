import * as React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"
import { Button } from "@mui/material"
import { useAppDispatch } from "../../../app/hooks"
import { deleteProduct } from "../productSlice"

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "505px",
  height: "230px",
  bgcolor: "var(--custom-light-grey)",
  borderRadius: "16px",
  p: "62px",
  textAlign: "center",
}

export default function DeleteProduct({ open, handleClose, sku }) {
  const dispatch = useAppDispatch()

  const handleDelete = async () => {
    await dispatch(deleteProduct(sku))
    await handleClose()
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            component="img"
            src="/assets/entypo_cross.svg"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: "12px",
              top: "12px",
              cursor: "pointer",
            }}
          />
          <Box
            component="img"
            src="/assets/alert.svg"
            sx={{ width: "60px", height: "60px", mb: "13px" }}
          />
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{
              color: "var(--custom-dark)",
              textAlign: "center",
              fontSize: "24px",
              fontFamily: "Satoshi",
              fontWeight: 700,
              letterSpacing: "1.92px",
              mb: "13px",
            }}
          >
            ARE YOU SURE?
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{
              mt: 0,
              color: "var(--custom-dark)",
              fontSize: "19px",
              fontFamily: "Satoshi",
              fontWeight: 700,
              mb: "33px",
            }}
          >
            You will not be able to undo this action if you proceed!
          </Typography>
          <Box sx={{ gap: "25px", display: "flex", justifyContent: "center" }}>
            <Button
              onClick={handleClose}
              sx={{
                fontSize: "19px",
                fontFamily: "Satoshi",
                fontWeight: 700,
                color: "var(--custom-dark)",
                borderRadius: "4.014px",
                border: "2.408px solid var(--custom-blue)",
                padding: "12.041px 28.095px",
                width: "118px",
                height: "49px",
              }}
            >
              Cancel
            </Button>
            <Button
              sx={{
                fontSize: "19px",
                fontFamily: "Satoshi",
                fontWeight: 700,
                color: "var(--custom-white)",
                borderRadius: "4.014px",
                background: "var(--custom-blue)",
                padding: "12.041px 28.095px",
                width: "113px",
                height: "49px",
                "&:hover": {
                  color: "var(--custom-blue)",
                  border: "2.408px solid var(--custom-blue)",
                },
              }}
              onClick={handleDelete}
            >
              Delete
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}
