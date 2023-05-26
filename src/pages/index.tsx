import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import { type NextPage } from "next";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const user = useUser()
 
  const {data} = api.posts.getAll.useQuery()
  console.log(data);
  
  return (
    <>
    {
      user.isSignedIn && <SignOutButton /> 
    }
    <div>
      {data?.map(e => {
        return <div key={e.id}> {e.content}</div>
      })}
    </div>
    </>
  );
};

export default Home;
