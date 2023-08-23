import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// ***** authOptions *****
export const authOptions = {
  providers: [
    CredentialsProvider({
      type: "credentials",
      name: "credentials",
      credentials: {
        username: { label: "email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (credentials) {
          const user = {
            id: 1,
            name: "joe",
            email: "joe@gmail.com",
            password: "123456",
          };
          return { ...user, ...credentials };
        }
        return null;
      },
    }),
  ],
  basePath: "/qladmin",
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/qladmin/signin",
  },
};

// ***** handler *****
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
