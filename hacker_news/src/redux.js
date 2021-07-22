import uuid from "react-uuid";
import { combineReducers, createStore } from "redux";
// CREATE REDUCER
//...............

const filtersReducerDefaultValue = {
  availableSizes: "",
  price: "",
};
const filtersReducers = (state = filtersReducerDefaultValue, action) => {
  switch (action.type) {
    case "SET-PRICE-ORDER":
      return { ...state, price: action.price };
      break;
    case "SET-SORT-BY-SIZE":
      return { ...state, availableSizes: action.availableSizes };
      break;
    default:
      return state;
      break;
  }
};
const createOrderReducerDefaultValue = [];

const createOrderReducers = (
  state = createOrderReducerDefaultValue,
  action
) => {
  switch (action.type) {
    case "ADD-ORDER":
      return [...state, action.products];
      break;
    case "EDIT-ORDER":
      return state.map(product => {
        if (product.id === action.id) {
          //1.one way
          // expence.description = action.description,
          //     expence.note = action.note
          return {
            //2.two way
            ...product,
            description: action.description,
            title: action.title,
            image: action.image,
            price: action.price,
            availableSizes: action.availableSizes,
          };
        } else {
          return product;
        }
      });
    case "REMOVE-ORDER":
      if (action.id) {
        return state.filter(item => item.id !== action.id);
      }
      break;

    default:
      return state;
      break;
  }
};

// REDUCER STORE
//...............

export const store = createStore(
  combineReducers({
    prod: createOrderReducers,
    filt: filtersReducers,
  })
);

// GET REDUX STORE
store.subscribe(() => {
  const state = store.getState();
  console.log(state);
});

// CALL ACTIONS
//...............

export const createOrder = products => {
  return {
    type: "ADD-ORDER",
    products: {
      id: uuid(),
      title: products.title,
      description: products.description,
      image: products.image,
      price: products.price,
      availableSizes: products.size,
    },
  };
};

export const editOrder = (
  id = "",
  { description = "", title = "", image = "", price = "", size = "" } = {}
) => {
  return {
    type: "EDIT-ORDER",
    id: id,
    description: description,
    title: title,
    image: image,
    price: price,
    availableSizes: size,
  };
};
export const removeOrder = ({ id }) => {
  return {
    type: "REMOVE-ORDER",
    id: id,
  };
};

const setPriceOrder = price => {
  return {
    type: "SET-PRICE-ORDER",
    //describe code actions
    price: price,
  };
};

const setSortBySize = availableSizes => {
  return {
    type: "SET-SORT-BY-SIZE",
    //describe code actions
    availableSizes: availableSizes,
  };
};

// CALL ACTION FUNCTION
//...............
// store.dispatch(setPriceOrder(availableSizes));
// store.dispatch(setSortBySize(price));

// store.dispatch(createOrder(products));
