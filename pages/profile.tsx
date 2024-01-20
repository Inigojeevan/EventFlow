import Profile from "@/components/users/Profile";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const ProfilePage = () => {

    const router = useRouter();
    const {data :session} = useSession();

    useEffect(()=>{
        if(!session){
            router.replace("/login")
        }
    }, [session])

    const userName = session?.user?.name || "";
    const userEmail = session?.user?.email || "";
    const userImage = session?.user?.image;

  return (
    <div className="w-[100vw] h-[100vh] flex bg-black justify-center items-center">
      <div className="mt-20 flex-row w-2/3 h-2/3 border-4 border-fuchsia-900 shadow-md shadow-fuchsia-500 bg-violet-900 rounded-2xl flex justify-center">
            <Profile userEmail={userEmail} userName={userName} userImage={userImage} goHome={()=>router.replace("/")} signOut={()=>signOut()}/>
      </div>
    </div>
  );
};

export default ProfilePage;
