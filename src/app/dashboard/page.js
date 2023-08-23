// ***** Use Client *****
"use client";

import { signOut } from "next-auth/react";

// ***** Dashboard Page Component *****
const Dashboard = () => {
  return (
    <div>
      <h1>Welcome To Dashboard</h1>
      <button
        onClick={() =>
          signOut({ callbackUrl: "http://localhost:3000/qladmin/signin" })
        }
      >
        Sign Out
      </button>
    </div>
  );
};

export default Dashboard;
