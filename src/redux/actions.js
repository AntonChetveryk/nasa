export const GET_PLANETS = "GET_PLANETS";
export const UPDATE_PLANETS = "UPDATE_PLANETS";

export function planetsFetchDataSuccess(photos) {
  return {
    type: GET_PLANETS,
    photos,
  };
}

export function planetsFetchData({ rover, camera, sol, page }) {
  return (dispatch) => {
    const KEY = "cQzJd3198WmBLRaaR7I6wKsGIESoJwfyNpvnJfsh";
    const BaseURL = "https://api.nasa.gov/mars-photos/api/v1/rovers";
    fetch(
      `${BaseURL}/${rover}/photos?sol=${sol}&camera=${camera}&page=${page}}&api_key=${KEY}`
    )
      .then((res) => {
        if (res.status < 400) {
          return res.json();
        } else {
          throw Error("Error");
        }
      })
      .then((data) => {
        dispatch(planetsFetchDataSuccess(data.photos));
      })
      .catch((err) => console.log(err));
  };
}

export function updatePlanetsSuccess(photos) {
  return {
    type: UPDATE_PLANETS,
    photos,
  };
}

export function updatePlanets({ rover, camera, sol, page }) {
  return (dispatch) => {
    const KEY = "cQzJd3198WmBLRaaR7I6wKsGIESoJwfyNpvnJfsh";
    const BaseURL = "https://api.nasa.gov/mars-photos/api/v1/rovers";
    fetch(
      `${BaseURL}/${rover}/photos?sol=${sol}&camera=${camera}&page=${page}}&api_key=${KEY}`
    )
      .then((res) => {
        if (res.status < 400) {
          return res.json();
        } else {
          throw Error("Error");
        }
      })
      .then((data) => {
        dispatch(updatePlanetsSuccess(data.photos));
      })
      .catch((err) => console.log(err));
  };
}
