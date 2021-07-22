import React from "react";
import Cards from "../card/card";
import { useStyles } from "./productStyle";
import { Grid } from "@material-ui/core";
import Fade from 'react-reveal/Fade'
import SimpleModal from '../modal/modal';

const Products = (props) => {
  const {product, cartLabel ,addTocardForStateFn,editCardToMain,removeCardToMain}=props;

  const handleClick = (item, index) => {
    console.log(item, index);
  };
  const classes = useStyles();

  const addToCard =(item)=>{
 
    addTocardForStateFn(item)

  }
  const imageClickModal =(item)=>{
   
  }
  const editCardToProduct =(forEditCard)=>{
    editCardToMain(forEditCard)
  }
  const removeCard = (id) =>{
    console.log(id,"remove id from card in product")
    removeCardToMain(id)
  }
  // const CardModal = (item,index)=>{
  //   return (
  //     <Cards
  //     item={item}
  //     index={index}
  //     cartLabel={cartLabel}
  //     onClick={handleClick}
  //     addToCardButton ={addToCard}
  //     imageClickModal={imageClickModal}
  //   />
  //   )
  // }

  return (
    <>
      <Fade bottom cascade>
      <Grid container>
       
        {product && product.map((item, index) => (
          <Grid item key={index} xs={4} style={{ marginBottom: 12 }}>
            <Cards
              item={item}
              index={index}
              cartLabel={cartLabel}
              onClick={handleClick}
              addToCardButton ={addToCard}
              imageClickModal={imageClickModal}
              // modalAddToCartToProduct ={addToCard}
              editCardToProduct= {editCardToProduct}
              removeCard = {removeCard}

            />
            {/* <SimpleModal media={CardModal} /> */}
          </Grid>
        ))}
      </Grid>
        </Fade>
    </>
  );
};
export default Products;
