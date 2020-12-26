import api from "../../api/foculties";
import _ from "lodash";
import { toast } from "react-toastify";
export const createFoculty = (title) => async (dispatch) => {
  return await api.foculty
    .createFoculty(title)
    .then((res) => {
      console.log(res);
      //   dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      //   setTimeout(() => {
      //     if (!_.isEmpty(admin)) {
      //       if (lastLocation) {
      //         return history.push(lastLocation.pathname);
      //       } else {
      //         return history.push("/");
      //       }
      //     }
      //   }, 500);
    })
    .catch((err) => {
      toast.error(err.response.data.error, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 4000,
      });
      //   dispatch({ type: AUTH_FAIL, payload: err.response.data });
    });
};
