import { GET_PLANETS } from "./actions";

const initialState = {
  photos: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PLANETS:
      return { photos: action.photos };

    default:
      return state;
  }
};

export default reducer;
