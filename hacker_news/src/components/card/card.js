import React from "react";
import SimpleModal from "../modal/modal";
import { useStyles } from "./cardStyle";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import HighlightOffTwoToneIcon from "@material-ui/icons/HighlightOffTwoTone";
const Cards = props => {
  const {
    item,
    index,
    cartLabel,
    onClick,
    addToCardButton,
    imageClickModal,
    editCardToProduct,
    removeCard,
  } = props;

  const classes = useStyles();

  const editCard = items => {
    editCardToProduct(items);
  };
  const cardClick = () => {
    onClick(item, index);
  };
  const CardModal = item => {
    return (
      <CardMedia
        className={classes.media}
        image={item.image}
        title="Contemplative Reptile"
      />
    );
  };
  const modalAddToCart = item => {
    addToCardButton(item);
  };

  return (
    <div>
      <Card className={classes.root} onClick={cardClick}>
        <Button onClick={() => removeCard(item)} style={{ float: "right" }}>
          <HighlightOffTwoToneIcon />
        </Button>
        <CardActionArea>
          <SimpleModal
            media={CardModal(item)}
            modalBody={item}
            modalAddToCart={modalAddToCart}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {item && item.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {item && item.description}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {item && item.size}
            </Typography>
          </CardContent>
          <div className={classes.buttonStyle}>
            <Button variant="contained" className={classes.prizeStyles}>
              {`${item && item.price} $`}
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => addToCardButton(item)}
            >
              {cartLabel}
            </Button>
            <Button onClick={() => editCard(item)}>
              <BorderColorIcon />
            </Button>
          </div>
        </CardActionArea>
      </Card>
    </div>
  );
};
export default Cards;
