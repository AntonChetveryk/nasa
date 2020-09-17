import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "48%",
    marginBottom: 10,
  },
  img: {
    width: "100%",
    height: "100%",
  },
});

export default function Photo(props) {
  const classes = useStyles();
  const { photo } = props;

  return (
    <div className={classes.root}>
      <img alt="img" src={photo.img_src} className={classes.img}></img>
    </div>
  );
}
