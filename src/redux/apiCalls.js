import { publicRequest, userRequest } from "../requestMothed";
import {
  loginStart,
  loginFailure,
  loginSuccess,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  logout,
} from "./userRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const updateUser = async (userId, user, dispatch) => {
  dispatch(updateUserStart());
  try {
    // update
    console.log("dsdsd");
    const res = await userRequest.put("/users/" + userId, user);
    dispatch(updateUserSuccess(res.data));
    console.log(res.data + "sdsd");
  } catch (err) {
    dispatch(updateUserFailure());
  }
};
export const logOut = async (dispatch) => {
  dispatch(logout());
};
