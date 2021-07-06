import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  tags: {
    color: "grey",
  },
  paper: {
    background: "#1a1a1b",
    border: "1px solid #303132",
    color: "white",
    padding: "20px",
    borderRadius: "15px",
  },
  media: {
    borderRadius: "20px",
    objectFit: "cover",
    width: "100%",
    maxHeight: "600px",
  },
  card: {
    display: "flex",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
      flexDirection: "column",
    },
  },
  section: {
    borderRadius: "20px",
    margin: "10px",
    flex: 0.5,
  },
  imageSection: {
    flex: 0.5,
    marginLeft: "20px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
  recommendedPosts: {
    background: "#131313",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "20px",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  loadingPaper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    borderRadius: "15px",
    height: "39vh",
    background: "#1a1a1b",
    color: "white",
  },
  divider: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
}));
