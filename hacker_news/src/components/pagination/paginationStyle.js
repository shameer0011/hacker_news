import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  pointer: {
    "&:click": {
      backgroundColor: "blue !important",
      cursor: "pointer",
      border: "1px solid",
    },
  },
  cssRoot: {
    backgroundColor: "blue !important",
  },
  active: {
    backgroundColor: "blue !important",
  },
}));
