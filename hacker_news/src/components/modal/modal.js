import React from "react";
import { Button } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: "70%",
    height: "70%",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const SimpleModal = ({ media, modalBody, modalAddToCart }) => {

  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div onClick={handleOpen}>{media}</div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              {" "}
              <img src={modalBody.image} alt={modalBody.title} />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "0.25rem",
              textAlign: "center",
              marginLeft: "0.2rem",
            }}
          >
            <div id="simple-modal-title">Name : {modalBody.title}</div>
            <div id="simple-modal-title">
              Description : {modalBody.description}
            </div>

            <div id="simple-modal-title"> Price : $ {modalBody.price}</div>
            <div>
              <Button
                onClick={() => {
                  modalAddToCart(modalBody);
                  handleClose();
                }}
                variant="contained"
                color="primary"
                disableElevation
              >
                ADD TO CART
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default SimpleModal;
