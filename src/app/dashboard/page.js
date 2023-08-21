import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

// ***** Dashboard Page Component *****
const Dashboard = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect("/signin");
  }

  return (
    <div>
      <h1>Welcome To Dashboard</h1>
    </div>
  );
};

export default Dashboard;
