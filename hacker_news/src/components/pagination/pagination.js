import React, { useState } from "react";
import { useStyles } from "./paginationStyle";
import { Box } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

const Pagination = () => {
  const [box, setBox] = useState([
    {
      id: 7,
      fighterName: "Lord Beerus",
      race: "God",
      specialAttack: "Hakai",
      img:
        "https://vignette.wikia.nocookie.net/dragonuniverse/images/3/30/Beerus2.png/revision/latest?cb=20170225064338",
    },
    {
      id: 8,
      fighterName: "Cell",
      race: "Android",
      specialAttack: "Kamehameha Wave",
      img:
        "https://static0.srcdn.com/wordpress/wp-content/uploads/Dragon-Ball-Z-Perfect-Cell.jpg",
    },
    {
      id: 9,
      fighterName: "Frieza",
      race: "Unknown",
      specialAttack: "Finger Blasters",
      img: "https://i.ytimg.com/vi/BkoOw_7JqKg/maxresdefault.jpg",
    },
    {
      id: 10,
      fighterName: "Black Goku",
      race: "Sayian",
      specialAttack: "Ki Blade",
      img:
        "https://pm1.narvii.com/6287/eafbdf4dc0ae1b58d3869b89be04bcd0712f7623_hq.jpg",
    },
    {
      id: 11,
      fighterName: "Red Charu",
      race: "Sayian",
      specialAttack: "Ki Blade",
      img:
        "https://pm1.narvii.com/6287/eafbdf4dc0ae1b58d3869b89be04bcd0712f7623_hq.jpg",
    },
    {
      id: 12,
      fighterName: "White Charu",
      race: "Sayian",
      specialAttack: "Ki Blade",
      img:
        "https://pm1.narvii.com/6287/eafbdf4dc0ae1b58d3869b89be04bcd0712f7623_hq.jpg",
    },
  ]);
  const [selectedItemIndex, setSelectedItemIndex] = useState("");
  const [displayBox, setDisplayBox] = useState(box.slice(0, 4));
  console.log(displayBox);
  const classes = useStyles();
  const oneBoxClick = (item, e) => {
    setSelectedItemIndex(item);
  };
  const nextForward = e => {};
  const nextBackword = e => {
    console.log(e, "next backword");
  };
  return (
    <div style={{ display: "flex" }}>
      <IconButton onClick={nextBackword}>
        {/* <FirstPageIcon /> */}
        <KeyboardArrowLeft />
      </IconButton>
      <Box display="flex" flexDirection="row">
        {displayBox.map((item, key) => {
          return (
            <Box
              className={selectedItemIndex == item.id ? classes.active : null}
              p={1}
              mr={1}
              bgcolor="grey.300"
              onClick={e => {
                oneBoxClick(item.id, e);
              }}
            >
              {item.fighterName}
            </Box>
          );
        })}
      </Box>
      <IconButton onClick={nextForward}>
        <KeyboardArrowRight />
      </IconButton>
      {/* <LastPageIcon /> */}
    </div>
  );
};

export default Pagination;
