import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
  dropdownStyle: {
    border: "1px solid black",
    borderRadius: "5%",
    backgroundColor: "lightgrey",
  },
  menuPaper: {
    marginTop: theme.spacing(5),
  },
}));
