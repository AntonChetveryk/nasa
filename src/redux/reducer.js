import { GET_PLANETS } from "./actions";

const initialState = {
  photos: [],
  page: 1,
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
