import React, { useState } from "react";
import { connect } from "react-redux";
import data from "../../data.json";
import { createOrder, editOrder, removeOrder } from "../../redux";
import Cart from "../cart/cart";
import Order from "../Order/order";
import Products from "../products/product";
import Selects from "../ui/select/select";
import { useStyles } from "./mainStyle";
import product from "..\\products\\product";
import { Paper, Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
// import Grid from "@material-ui/core/Grid";
const Main = props => {
  const {
    title,
    data,
    cartLabel,
    sidebar,
    values,
    prize,
    mediaTypes,
    rowTypes,
    csv,
  } = props;
  const classes = useStyles();

  const [price, setPrice] = useState("");
  const [oderForm, setOrderForm] = useState("");
  const [editCards, setEditCards] = useState("");

  // Two way to set get item..
  // First way
  const [addToCart, setAddToCart] = useState(
    JSON.parse(localStorage.getItem("cartItems"))
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );
  // second way
  // const [addToCart, setAddToCart] = useState([]);

  // useEffect(() => {
  //   const localRepoItems = localStorage.getItem("cartItems");
  //   if (localRepoItems) {
  //     setAddToCart(JSON.parse(localRepoItems));
  //   }
  // }, []);

  const reciveData = (val, e) => {
    if (e == "None") {
      // setProduct(data.products);
    }
    if (e) {
      var newArray = data.products.slice().filter(el => {
        return el.availableSizes.indexOf(e) >= 0;
      });
      // setProduct(newArray);
    }
  };

  const clickItem = values => {
    // logic for click items
  };
  const priceData = (state, e, values) => {
    setPrice(e);
    if (price == "HIGH") {
      // comimg from slow..so create prize state
      const prize = product.sort(
        (a, b) => (a.price > b.price ? 1 : b.price > a.price ? -1 : 0)
      );
      // setProduct(prize);
    } else if (price == "MEDIUM") {
      console.log("Medium");
    } else {
      const prize = product.sort(
        (a, b) => (a.price < b.price ? 1 : b.price < a.price ? -1 : 0)
      );
      // setProduct(prize);
    }
  };

  const mediaData = (state, e, values) => {};

  const rowTypesData = (state, e, values) => {};

  const addTocardForStateFn = productItems => {
    const cartItems = addToCart.slice();
    let alreadyCartItems = false;

    cartItems.forEach(item => {
      if (item.id === productItems.id) {
        item.count++;
        alreadyCartItems = true;
      }
    });
    if (!alreadyCartItems) {
      cartItems.push({ ...productItems, count: 1 });
    }
    setAddToCart(cartItems);
    // localStorage.setItem(JSON.stringify("cartItems"), addToCart);
    // localStorage.setItem("cartItems", JSON.stringify(addToCart)); // comimg from slow..
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  const removeButton = item => {
    const cartItemRemove = addToCart.slice();
    const cartItems = cartItemRemove.filter(product => product.id !== item.id);
    setAddToCart(cartItems);
    // localStorage.setItem("cartItems", JSON.stringify(addToCart));
    localStorage.setItem(
      "cartItems",
      JSON.stringify(cartItemRemove.filter(product => product.id !== item.id))
    );
  };
  const checkoutFormToMain = formItems => {};

  //For Order Cards ADD EDIT DELETE

  const editSubmission = editItems => {
    editItems.map(items => {
      return props.dispatch(editOrder(items.id, items));
    });
  };
  const orderSubmit = products => {
    setOrderForm(products);
    products.map(addItems => props.dispatch(createOrder(addItems)));
  };
  const editCard = editItems => {
    setEditCards(editItems);
  };
  const removeCard = id => {
    props.dispatch(removeOrder({ id: id.id }));
  };

  return (
    <div>
      <Grid container>
        <Grid item xs={8}>
          <Paper>
            <div className={classes.toRow}>
              <div>{title}</div>
              {/* <div> */}
              {/* <Carousal title={titleShow} body={body}></Carousal>; */}
              {/* </div> */}
              <div>
                <Selects
                  change={reciveData}
                  sizes={values}
                  clickOneItem={clickItem}
                />
              </div>
              <div>
                <Selects
                  change={priceData}
                  sizes={prize}
                  clickOneItem={clickItem}
                />
              </div>
              <div>
                <Selects
                  change={mediaData}
                  sizes={mediaTypes}
                  clickOneItem={clickItem}
                />
              </div>
              <div>
                <Selects
                  change={rowTypesData}
                  sizes={rowTypes}
                  clickOneItem={clickItem}
                />
              </div>
              <div>
                <Button
                  className={classes.topSpacing}
                  variant="contained"
                  color="primary"
                >
                  {csv}
                </Button>
              </div>
            </div>
            <Grid item>
              <Products
                product={props.productsData}
                cartLabel={cartLabel}
                addTocardForStateFn={addTocardForStateFn}
                editCardToMain={editCard}
                removeCardToMain={removeCard}
              />
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Cart
              cartElements={addToCart}
              removeButton={removeButton}
              checkoutFormToMain={checkoutFormToMain}
            />
          </Paper>
        </Grid>
      </Grid>
      <div>
        <Order
          orderSubmit={orderSubmit}
          editCard={editCards}
          editSubmission={editSubmission}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    productsData: state.prod,
    filter: state.filt,
  };
};
export default connect(mapStateToProps)(Main);
