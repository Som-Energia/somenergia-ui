export const textBody1 = {
  color: "secondary.dark",
  fontSize: "16px",
}

export const buttonDark = {
  ...textBody1,
  textTransform: "none",
  borderRadius: "2rem",
  border: "1px solid transparent",
  backgroundColor: "primary.main",
  color: "primary.contrastText",
  paddingLeft: "1rem",
  paddingRight: "1rem",
  boxShadow: "none",
  "&:hover": {
    backgroundColor: "primary.dark",
    color: "primary.contrastText",
    boxShadow: "none",
    border: "1px solid transparent",
  },
  "&::first-letter": {
    textTransform: "uppercase",
  },
  width: "100%",
}

export const buttonLight = {
  ...textBody1,
  textTransform: "capitalize",
  border: "1px solid",
  borderColor: "secondary.main",
  borderRadius: "2rem",
  color: "primary.contrastText",
  paddingLeft: "1rem",
  paddingRight: "1rem",
  boxShadow: "none",
  "& .MuiButton-startIcon": {
    "& svg": { width: "0.8rem", hight: "0.8rem" },
  },
  "&.Mui-disabled": {
    "& .MuiButton-startIcon": {
      color: "lightgrey",
    },
  },
  "&:hover": {
    backgroundColor: "primary.main",
    color: "primary.contrastText",
    boxShadow: "none",
    border: "1px solid transparent",
    "& .MuiButton-startIcon": {
      "& svg": { width: "0.8rem", hight: "0.8rem" },
    },
  },
  width: "100%",
}
