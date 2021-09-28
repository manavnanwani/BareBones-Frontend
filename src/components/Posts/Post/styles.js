import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: "56.25%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "darken",
  },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  mainContainer: {
    display: "flex",
    flexDirection: "row",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "7px",
    height: "100%",
    position: "relative",
    background: "#1a1a1b",
    border: "2px solid #303132",
    color: "white",
  },
  overlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "white",
  },
  overlay2: {
    position: "absolute",
    top: "20px",
    right: "20px",
    color: "white",
  },
  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
    color: "white",
  },
  title: {
    margin: "5px 0",
    padding: "0 6px",
  },
  cardActions: {
    // textAlign: "center",
    padding: "0px",
    display: "flex",
    flexDirection: "column",

    justifyContent: "space-between",
  },
  button: {
    color: "rgba(0,183,255, 1)",
  },
  button1: {
    color: "rgba(255, 255, 255, 0.55) !important",
  },
  paragraph: {
    color: "#a09b9b",
  },
  buttonIcons: {
    marginRight: "5px",
    marginLeft: "2px",
  },
  cardAction: {
    display: "block",
    textAlign: "initial",
    minWidth: "100%",
  },
  votes: {
    backgroundColor: "#151516",
    display: "flex",
    justifyContent: "center",
    paddingRight: "0px",
  },
  firstpart: {
    marginLeft: "10px",
    color: "grey",
    display: "flex",
    alignItems: "center",
  },
  [theme.breakpoints.down("sm")]: {
    mainContainer: {
      flexDirection: "column",
    },
    cardActions: {
      flexDirection: "row",
    },
    updown: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    postAbove: {
      flexDirection: "column",
    },
    paragraphParent: {
      paddingBottom: "60px !important",
    },
  },
  userActions: {
    marginLeft: "0px !important",
    display: "flex",
    flexDirection: "column ",
    justifyContent: "center",
    alignItems: "center",
  },
}));
