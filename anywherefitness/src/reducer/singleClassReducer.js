import { FETCH_SINGLE_CLASS } from "../actions";

const initialState = {
  class: []
};

const singleClassReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SINGLE_CLASS:
      return {
        ...state,
        class: action.payload
      };
    default:
      return state;
  }
};

export default singleClassReducer;
