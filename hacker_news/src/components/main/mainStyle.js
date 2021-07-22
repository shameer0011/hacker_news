import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  media: {
    height: 340,
  },
  root: {
    flexGrow: 1,
  },
  buttonStyle: {
    display: "flex",
    justifyContent: "space-between",
  },
  prizeStyles: {
    color: "black",
    fontWeight: "bold",
  },
  toRow: {
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
  },
}));
