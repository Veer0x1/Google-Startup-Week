import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { base } from "next/dist/build/webpack/config/blocks/base";

const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  callbacks: {
    signIn: async ({ user, account, profile }) => {
      console.log(user, account, profile);
      return true;
    },
    redirect: async ({ url, baseUrl }) => {
      console.log("url", url);
      console.log("baseUrl", baseUrl);
      return baseUrl;
    },
    session: async ({ session, token, user }) => {
      console.log("session", session);
      console.log("token", token);
      console.log("user", user);
      return session;
    },
  },
};

const handler = NextAuth(options);

export { handler as GET, handler as POST };
