import React from "react";
import { connect } from "react-redux";
import Photo from "../Photo";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  list: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingTop: 20,
  },
  btn: {
    marginBottom: 20,
  },
});

function Photos(props) {
  const classes = useStyles();
  const { photos } = props;

  const LooadingPhoto = (e) => {
    console.log("click");
  };

  if (photos.length) {
    return (
      <>
        <ol className={classes.list}>
          {photos.map((photo) => (
            <Photo key={photo.id} />
          ))}
        </ol>
        <Grid
          direction="row"
          justify="center"
          container
          className={classes.btn}
        >
          <Button variant="outlined" onClick={LooadingPhoto}>
            Load more…
          </Button>
        </Grid>
      </>
    );
  } else {
    return <h3>No photos</h3>;
  }
}

const mapStateToProps = (state) => ({
  photos: state.photos,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Photos);
