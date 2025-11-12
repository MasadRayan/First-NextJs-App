import { getServerSession } from "next-auth";
import LoginButton from "./components/LoginButton";
import UserInfo from "./components/UserInfo";
import { authOptions } from "@/lib/authOptions";
import LogOutButton from "@/components/LogOutButton";


export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div className="min-h-[715px]">
      <h1 className="text-5xl font-bold">Hello world</h1>
      <div>
        {
          session?.user ? (
            <LogOutButton></LogOutButton>
          ) : (
            <LoginButton></LoginButton>
          )
        }
      </div>
      <div>
        {
          session?.user && (
            <div >
              <p className="text-3xl font-bold">From Client Side</p>
              <UserInfo></UserInfo>
              <p className="text-3xl font-bold">From the server</p>
              {JSON.stringify(session)}
            </div>
          )
        }
      </div>
    </div>
  );
}

