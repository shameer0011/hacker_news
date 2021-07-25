import React from "react";
import SimpleModal from "../modal/modal";
import { useStyles } from "./cardStyle";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import HighlightOffTwoToneIcon from "@material-ui/icons/HighlightOffTwoTone";
const Cards = props => {
  const {
    item,
    index,
    buttonLabel,
    onClick,
    addMovieListButton,
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
        component="img"
        alt="Contemplative Reptile"
        height="140"
        image={`https://image.tmdb.org/t/p/w185/${item?.poster_path}`}
        title="Contemplative Reptile"
      />
    );
  };
  const modalAddToCart = item => {
    // addToCardButton(item);
  };

  return (
    <div>
      <Card
        className={classes.root}
        onClick={cardClick}
        style={{ height: "90%", width: "300px" }}
      >
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
              {item && item.original_title}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              style={{
                width: "100%",
                overflow: "hidden",
                textOverflow: "ellipsis",
                height: "100px",
              }}
            >
              {item && item.overview}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {item && item.popularity}
            </Typography>
          </CardContent>
          <div className={classes.buttonStyle}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => addMovieListButton(item)}
            >
              {buttonLabel}
            </Button>
          </div>
        </CardActionArea>
      </Card>
    </div>
  );
};
export default Cards;
