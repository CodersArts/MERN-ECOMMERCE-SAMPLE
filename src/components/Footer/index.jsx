import React from "react";
import { Typography, Link as MuiLink, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  footer: {
    color: "white",
    width: "100%",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Typography
      className={classes.footer}
      variant="body2"
      color="textSecondary"
      align="center"
    >
      {"Copyright © "}
      <MuiLink
        component={Link}
        color="inherit"
        to="https://www.codersarts.com/"
      >
        CodersArts
      </MuiLink>{" "}
      a Product by Sofstack Technology Solutions Pvt. Ltd. | 2017-2019
      {"."}
    </Typography>
  );
};

export default Footer;
