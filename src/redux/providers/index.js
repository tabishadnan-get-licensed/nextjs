// ***** Use Client *****
"use client";

import { Provider } from "react-redux";
import { store } from "../store";

// ***** ReduxProvider Component *****
const ReduxProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
