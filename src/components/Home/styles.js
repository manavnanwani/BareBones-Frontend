import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    background: "#1f1f1f",
    padding: "10px",
  },
  appBarSearch: {
    borderRadius: 4,
    marginBottom: "1rem",
    display: "flex",
    padding: "16px",
    backgroundColor: "#98a0d5",
  },
  heading: {
    color: "rgba(0,183,255, 1)",
  },
  image: {
    marginLeft: "25px",
  },
  pagination: {
    backgroundColor: "#98a0d5",
    borderRadius: 4,
    marginTop: "1rem",
    padding: "16px",
  },
  [theme.breakpoints.down("sm")]: {
    mainContainer: {
      flexDirection: "column-reverse",
    },
  },
  communities: {
    border: "2px solid #303132",
    borderRadius: "5px",
    background: "#1a1a1b",
  },

  redditHome: {
    margin: "20px 0",
    background: "#1a1a1b",
    borderRadius: "5px",
    border: "2px solid #303132",
  },
  headerImage: {
    height: "40px",
    backgroundImage:
      'url("https://www.redditstatic.com/desktop2x/img/id-cards/home-banner@2x.png")',
  },
  create: {
    padding: "10px",
  },
}));
