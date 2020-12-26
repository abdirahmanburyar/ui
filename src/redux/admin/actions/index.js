import api from "../../api/admin";
import { toast } from "react-toastify";
import _ from "lodash";
import { AUTH_FAIL, LOGIN_OUT, LOGIN_SUCCESS, LOADING } from "../type";
export const login = (data, history, lastLocation, admin) => async (
  dispatch
) => {
  dispatch({ type: LOADING });
  return await api.admin
    .login(data)
    .then((res) => {
      console.log(res);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      setTimeout(() => {
        if (!_.isEmpty(admin)) {
          if (lastLocation) {
            return history.push(lastLocation.pathname);
          } else {
            return history.push("/");
          }
        }
      }, 500);
    })
    .catch((err) => {
      toast.error(err.response.data.error, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 4000,
      });
      dispatch({ type: AUTH_FAIL, payload: err.response.data });
    });
};

export const logout = () => async (dispatch) => {
  dispatch({ type: LOADING });
  return await api.admin
    .logout()
    .then((res) => {
      toast.info("Loggin out....", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 4000,
      });
      setTimeout(() => {
        dispatch({ type: LOGIN_OUT });
      }, 3000);
      return res;
    })
    .catch((err) => {
      toast.error(err.response.data.error, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 4000,
      });
      dispatch({ type: AUTH_FAIL, payload: err.response.data });
    });
};
