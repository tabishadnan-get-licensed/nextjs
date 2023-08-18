"use client";

import { store, persistor } from "@/lib/store";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

function ReduxProvider({ children }) {
  // return <Provider store={store}>{children}</Provider>;
  return <Provider store={store}>{children}</Provider>;
}

export default ReduxProvider;
