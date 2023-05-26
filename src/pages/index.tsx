import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const user = useUser()
 
  
  return (
    <>
    {
      user.isSignedIn && <SignOutButton /> 
    }
    </>
  );
};

export default Home;
