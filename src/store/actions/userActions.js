import { toast } from "react-toastify";
import { AxiosInstance, renewAxiosInstance } from "../../api/api";

export const SET_USER_LOGIN_SUCCESS = "SET_USER_LOGIN_SUCCESS";
export const SET_USER_LOGIN_FAILURE = "SET_USER_LOGIN_FAILURE";
export const SET_USER_LOGGED_OUT = "SET_USER_LOGGED_OUT";
export const TOKEN_VERIFY = "TOKEN_VERIFY";

export const setUserSuccess = (user) => ({
  type: SET_USER_LOGIN_SUCCESS,
  payload: user,
});

export const setUserFailure = (error) => ({
  type: SET_USER_LOGIN_FAILURE,
  payload: error,
});
export const removeUser = () => ({
  type: SET_USER_LOGGED_OUT,
});

export const userLogin =
  (formData, history, setToken, setName) => (dispatch) => {
    AxiosInstance.post("/login", formData)
      .then((res) => {
        console.log("Login post:", res.data);
        dispatch(setUserSuccess(res.data));
        setToken(res.data.token);
        setName(res.data.name);
        toast.success("Successfull login!");
        setTimeout(() => {
          history.push("/");
        }, 2000);
        renewAxiosInstance();
      })
      .catch((err) => {
        console.error("Login error:", "Error occurred");
        dispatch(setUserFailure(err));
        toast.error(err.error);
      });
  };

export const tokenVerify = (token) => {
  return { type: TOKEN_VERIFY, payload: token };
};
