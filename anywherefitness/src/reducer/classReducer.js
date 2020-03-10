import {
  FETCH_CLASSES,
  FETCH_UPDATE_CLASS,
  FETCH_RESERVED_CLASSES
} from "../actions";

const initialState = {
  classes: [],
  reservedClasses: []
};

const classReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CLASSES:
      return {
        ...state,
        classes: action.payload
      };
    case FETCH_UPDATE_CLASS:
      return {
        ...state,
        classes: action.payload.project
      };
    case FETCH_RESERVED_CLASSES:
      return {
        ...state,
        reservedClasses: action.payload
      };
    default:
      return state;
  }
};

export default classReducer;
