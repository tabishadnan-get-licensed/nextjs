import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import rootReducer from "../reducers";

// ***** Create No Storage *****
const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  };
};

// ***** Initailize Config Of Store *****
let configuredStore = {
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
};

// ***** Create Store *****
const makeStore = ({ isServer }) => {
  if (isServer) {
    return configureStore(configuredStore);
  } else {
    // ***** Create Storage *****
    const storage =
      typeof window !== "undefined"
        ? createWebStorage("local")
        : createNoopStorage();

    // ***** Persist Config *****
    const persistConfig = {
      key: "glqualhub",
      storage,
      blacklist: [],
    };

    // ***** Persist Reducer *****
    const persistedReducer = persistReducer(persistConfig, rootReducer);

    // ***** Update Configure Store Object Based On Persist *****
    configuredStore = {
      ...configuredStore,
      reducer: persistedReducer,
    };

    // ***** Store *****
    const store = configureStore(configuredStore);

    store.__persistor = persistStore(store);

    return store;
  }
};

// ***** Creation Store *****
const store = makeStore(typeof window === "undefined" ? true : false);

// ***** Creation Wrapper *****
const wrapper = createWrapper(makeStore, { debug: false });

export { store, wrapper };
