import React from "react";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  TextField,
  Button,
  Grid,
} from "@material-ui/core";
import { useStyles } from "./style";

export default function Layout(props) {
  const { rover, camera, sol, onChange, onClick } = props;
  const classes = useStyles();
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>select options</h2>
      <form>
        <FormControl className={classes.formControl}>
          <InputLabel id="rover">Choose the rover</InputLabel>
          <Select
            labelId="rover"
            id="rover"
            name="rover"
            value={rover}
            onChange={onChange}
          >
            <MenuItem value="curiosity">Curiosity</MenuItem>
            <MenuItem value="opportunity">Opportunity</MenuItem>
            <MenuItem value="spirit">Spirit</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id="camera">Choose the camera</InputLabel>
          <Select
            labelId="camera"
            id="camera"
            name="camera"
            value={camera}
            onChange={onChange}
          >
            <MenuItem value="fhaz">Front</MenuItem>
            <MenuItem value="rhaz">Rear</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="sol"
          label="Sol"
          name="sol"
          value={sol}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          className={classes.sol}
          onChange={onChange}
          error={sol < 1}
          helperText="not less than 1"
        />
        <Grid direction="row" justify="center" container>
          <Button variant="contained" onClick={onClick}>
            Show photos
          </Button>
        </Grid>
      </form>
    </div>
  );
}
