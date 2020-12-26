import { AUTH_FAIL, LOGIN_OUT, LOADING, LOGIN_SUCCESS } from "../type";
import _ from "lodash";
const INITIAL_STATE = {
  loading: false,
  user: null,
  error: undefined,
};

const adminReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        user: action.payload,
      };
    case AUTH_FAIL:
      return {
        ...state,
        loading: false,
        error: !_.isEmpty(action.payload) ? action.payload : "unable to load",
      };
    case LOGIN_OUT:
      return {
        ...state,
        user: {},
        error: undefined,
      };
    default:
      return state;
  }
};
export default adminReducer;
