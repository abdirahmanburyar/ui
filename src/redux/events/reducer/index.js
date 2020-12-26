import { MODAL_OPEN } from "../types";

const INITIAL_STATE = {
  open: false,
};

const eventReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MODAL_OPEN:
      return {
        ...state,
        open: !state.open,
      };
    default:
      return state;
  }
};
export default eventReducer;
