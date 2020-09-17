import { GET_PLANETS, UPDATE_PLANETS } from "./actions";

const initialState = {
  photos: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PLANETS:
      return { ...state, photos: action.photos };
    case UPDATE_PLANETS:
      return { ...state, photos: [...state.photos, ...action.photos] };

    default:
      return state;
  }
};

export default reducer;
