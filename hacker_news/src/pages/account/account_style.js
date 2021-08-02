import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  accountHeader: {
    float: "right",
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
    backgroundColor: "#C0C0C0",
  },
  textDecorationCancel: {
    textDecoration: "none",
  },
  accountBodySetup: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#C0C0C0",
  },
}));
