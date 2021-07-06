import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
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
      borderColor: "rgba(255, 255, 255, 0.7)",
    },
    "& .MuiTextField-root:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#3f51b5",
    },
    "& .MuiFormControl-root:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#3f51b5",
    },
    "& .MuiSelect-icon": {
      color: "white",
    },
    "& .MuiFormControl-root": {
      margin: "8px",
    },
  },
  paper: {
    padding: theme.spacing(2),
    background: "#1a1a1b",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },
  buttonSubmit: {
    marginBottom: 10,
    marginLeft: 30,
  },
  textField: {
    color: "white",
  },
}));
