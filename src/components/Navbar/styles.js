import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  appBar: {
    // borderRadius: 15,
    marginBottom: "30px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#1a1a1b",
    padding: "2px 10px",
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
    "& .MuiInputBase-root": {
      color: "rgba(255, 255, 255, 0.7)",
    },
    "& .MuiInputBase-root:hover": {
      color: "rgba(255, 255, 255, 0.7)",
    },
    "& .MuiFormLabel-root": {
      color: "rgba(255, 255, 255, 0.7)",
    },
    "& .MuiFormLabel-root:hover": {
      color: "rgba(255, 255, 255, 0.7)",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgba(255, 255, 255, 0.2)",
    },
    "& .MuiInputBase-input:focus": {
      borderColor: "rgba(255, 255, 255, 0.2)",
    },
    "& .MuiTextField-root:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#3f51b5",
    },
  },
  searchButton: {
    background: "#272729",
  },
  heading: {
    color: "rgba(255,255,255, 1)",
    textDecoration: "none",
  },
  svg: {
    marginLeft: "10px",
    maxHeight: "22px",
  },
  image: {
    maxHeight: "36px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "400px",
  },
  profile: {
    display: "flex",
    justifyContent: "space-around",
    width: "400px",
  },
  userName: {
    display: "flex",
    alignItems: "center",
    color: "white",
    marginLeft: "10px",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  userInfo: {
    display: "flex",
  },
  button: {
    backgroundColor: "d7dadc",
  },
  logo: {
    color: "white",
    textDecoration: "none",
    marginLeft: "10px",
  },
  [theme.breakpoints.down("sm")]: {
    logo: {
      display: "none",
    },
    logoImage: {
      width: "34px !important",
    },
    searchButton: {
      width: "150px",
      minWidth: "150px !important",
      // marginLeft: "50px",
    },
  },
}));
