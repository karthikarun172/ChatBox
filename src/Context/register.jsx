/** @format */

import Axios from "axios";
import { AsyncStorage } from "react-native";
import ContextProvider from "./ContextProvider";

const registerReducer = (state, action) => {
  switch (action.type) {
    case "REGISTER":
      return { ...state, token: action.payload };
    default:
      return state;
  }
};

const check = () => async (phone, callback) => {
  try {
    await Axios.post("https://4d62ef9db70e.ngrok.io/check", { phone });
    if (callback) {
      callback();
    }
  } catch (er) {
    console.log(er);
  }
};

const verify = (dispatch) => async (otp) => {
  try {
    const response = await Axios.post("https://4d62ef9db70e.ngrok.io/verify", {
      otp,
    });

    console.log(response.data.token, "this refer response.data");
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "REGISTER", payload: response.data.token });
  } catch (er) {
    console.log(er);
  }
};

export const { Context, Provider } = ContextProvider(
  registerReducer,
  { check, verify },
  { token: null }
);
