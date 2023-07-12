import { NextAuthOptions } from "next-auth";
import { FirestoreAdapter } from "@next-auth/firebase-adapter";
import admin from "firebase-admin";
import process from "process";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  // @ts.ignore
  adapter: FirestoreAdapter({
    credential: admin.credential.cert({
      projectId: process.env.PROJECT_ID,
      clientEmail: process.env.CLIENT_EMAIL,
      privateKey: process.env.PRIVATE_KEY,
    }),
  }),
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
