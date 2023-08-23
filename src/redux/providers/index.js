// ***** Use Client *****
"use client";

import { Provider } from "react-redux";
import { store } from "../store";
import { SessionProvider } from "next-auth/react";

// ***** ReduxProvider Component *****
const ReduxProvider = ({ children, session }) => {
  return (
    <SessionProvider session={session} basePath="/qladmin/api/auth">
      <Provider store={store}>{children}</Provider>
    </SessionProvider>
  );
};

export default ReduxProvider;
