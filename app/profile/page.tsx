"use client";
import React, { FunctionComponent, useEffect, useState } from "react";
import { db } from "@/lib/firebaseStore";
import { query, where, collection, getDocs } from "firebase/firestore";
import { useSession } from "next-auth/react";

interface OwnProps {}

type Props = OwnProps;
type User = {
  email: string;
  name: string;
  paymentId: string;
  emailVerified: boolean | null;
  imageUrl: string;
};

const Page: FunctionComponent<Props> = (props) => {
  const [user, setUser] = useState<User | null>(null);
  const { data: session } = useSession();
  useEffect(() => {
    const fetcher = async () => {
      const q = query(
        collection(db, "users"),
        where("email", "==", session?.user?.email)
      );
      const querySnapshot = await getDocs(q);
      // @ts-ignore
      setUser(querySnapshot.docs[0].data());
    };
    fetcher();
  }, [session]);

  return (
    <div className={"flex flex-col justify-center items-center h-screen"}>
      <h1>Profile</h1>
      <p>{user?.name}</p>
      <p>{user?.email}</p>
      <p>{user?.paymentId}</p>
    </div>
  );
};

export default Page;
