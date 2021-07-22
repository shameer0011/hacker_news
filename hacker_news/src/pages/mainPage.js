import React from "react";
import Main from "../components/main/main";
import data from "../data.json";
const MainPage = () => {
  const VALID_SIZE = ["XL", "XXL", "X", "L"];
  const VALID_PRIZE = ["LOW", "MEDIUM", "HIGH"];
  const MEDIA_TYPES = ["PRODUCTS", "FOOTER"];
  const ROW_TYPES = ["1", "2", "3"];
  return (
    <div>
      <Main
        title="Product Main page"
        sidebar="Cart Items"
        data={data}
        cartLabel="Add to card"
        values={VALID_SIZE}
        formHelperText="Sizes"
        prize={VALID_PRIZE}
        formHelperTextPrize="Prizes"
        mediaTypes={MEDIA_TYPES}
        formHelperTextMedia="Display Types"
        rowTypes={ROW_TYPES}
        formHelperTextRowTypes={"Row Types"}
        csv="CSV"
      />
    </div>
  );
};
export default MainPage;
