import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import "server-only";

const withSession = (Component, isAuth = false) => {
  const WrappedComponent = async (props) => {
    // Your server-side logic here
    const session = await getServerSession(authOptions);

    if (session && isAuth) redirect("/dashboard");

    return <Component {...props} session={session} />;
  };
  WrappedComponent.displayName = `withSession(${Component.displayName})`;
  return WrappedComponent;
};

export default withSession;