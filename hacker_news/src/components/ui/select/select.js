import React, { useState } from "react";
import { Select, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  select: { width: 150 },
  menuItem: { fontSize: 16, color: "red" },
  menuPaper: {
    marginTop: theme.spacing(5),
  },
}));

function Selects(props) {
  const classes = useStyles();
  const { change, sizes, clickOneItem } = props;
  const [menus, setMenus] = useState("Display All");

  const handlechange = e => {
    setMenus(e.target.value);
    change(menus, e.target.value, sizes);
  };

  return (
    <div>
      <Select
        className={classes.select}
        onChange={handlechange}
        value={menus}
        MenuProps={{ classes: { paper: classes.menuPaper } }}
      >
        <MenuItem className={classes.menuItem} value="Display All">
          Display All
        </MenuItem>
        {sizes &&
          sizes.map(validNote => (
            <MenuItem value={validNote} onClick={clickOneItem(validNote)}>
              {validNote}
            </MenuItem>
          ))}
      </Select>
    </div>
  );
}

export default Selects;

// import clsx from "clsx";
// import React from "react";
// import { useStyles } from "./selectStyle";
// import FormControl from "@material-ui/core/FormControl";
// import MenuItem from "@material-ui/core/MenuItem";
// import Select from "@material-ui/core/Select";

// const SelectBox = ({ values, change }) => {
//   // console.log(changee, "in select box");

//   const classes = useStyles();
//   const [age, setAge] = React.useState("None");

//   // const changeHandler = (val, e) => {
//   //   setAge(e.target.value);
//   //   console.log(val, e.target.value, age, "selected component");
//   //   changeValues(age, e.target.value, val);
//   // };
//   const changeHandler = e => {
//     console.log(e.target.value, "select field");
//     change(e.target.value);
//   };
//   return (
//     <div>
//       <FormControl className={classes.formControl}>
//         <Select
//           value={age}
//           onChange={changeHandler}
//           displayEmpty
//           className={clsx(classes.selectEmpty, classes.dropdownStyle)}
//           inputProps={{ "aria-label": "Without label" }}
//           MenuProps={{ classes: { paper: classes.menuPaper } }}
//         >
//           <MenuItem value="Display All">
//             <em>Display All</em>
//           </MenuItem>
//           {values.map(validNote => (
//             <MenuItem value={validNote}>{validNote}</MenuItem>
//           ))}
//         </Select>
//       </FormControl>
//     </div>
//   );
// };
// export default SelectBox;
