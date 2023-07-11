import * as process from "process"
import {db} from "@/lib/firebaseStore"
import { FirestoreAdapter } from "@next-auth/firebase-adapter"
import { cert } from "firebase-admin/app"
import GoogleProvider from "next-auth/providers/google";
import {
    addDoc,
    collection,
    doc,
    getDocs,
    query,
    updateDoc,
    where,
} from "firebase/firestore"
import { NextAuthOptions } from "next-auth"
import NextAuth from "next-auth";
export const authOptions: NextAuthOptions = {
    // adapter: FirestoreAdapter({
    //     credential: cert({
    //         projectId: process.env.PROJECT_ID,
    //         clientEmail: process.env.CLIENT_EMAIL,
    //         privateKey: process.env.PRIVATE_KEY,
    //     }),
    // }),

    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID||"",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET||""
        })
    ],pages: {
        signIn: '/auth/signin',
    },
        callbacks: {

        jwt: async function ({ token, user }) {
            // const querySnapshot = await getDocs(
            //     query(collection(db, "users"), where("email", "==", token.email))
            // )
            // const dbUser = querySnapshot.docs[0]
            // // checking if the user is already present in the database
            // // if not present then we will add the user to the database
            // if (!dbUser.exists()) {
            //     addDoc(collection(db, "users"), {
            //         id: user.id,
            //         name: user.name,
            //         email: user.email,
            //         image: user.image,
            //         emailVerified: true,
            //     })
            //
            //     if (user) {
            //         token.id = user?.id
            //     }
            //     return token
            // }
            return token
        },
        session: async function ({ token, session }) {
            if (token && session) {
                // @ts-ignore
                session.user.id = token.id
                // @ts-ignore
                session.user.name = token.name
                // @ts-ignore
                session.user.email = token.email
                // @ts-ignore
                session.user.image = token.picture
            }
            return session
        },
        redirect: async ({ baseUrl }) => {
            return baseUrl
        },
    },
}
export default NextAuth(authOptions);
