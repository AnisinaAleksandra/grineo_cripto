import React from "react";
import cls from "./ModalCall.module.scss";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  textAlign: "center",
  transform: "translate(-50%, -50%)",
  width: "100%",
  backgroundColor: "#1e1e1f",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

type ModalTypes = {
  title: string;
};

export const ModalCall = ({ title }: ModalTypes) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className={cls.modal_container}>
      <Button onClick={handleOpen}>{title}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Download Link for IOS{" "}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            modal component in development{" "}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
