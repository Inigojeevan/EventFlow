import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Image from "next/image";
import Profile from "@/components/user/Profile";

const ProfilePage = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const userName = session?.user?.name;
  const userEmail = session?.user?.email;
  const userImage = session?.user?.image;

  useEffect(() => {
    if (!session) {
      router.replace("/login");
    }
  }, [session]);

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <div className="mt-20 w-2/3 h-2/3 border-4 border-fuchsia-900 shadow-md shadow-fuchsia-500 bg-violet-900 rounded-2xl flex justify-center">
        <Profile userName={userName} userEmail={userEmail} userImage={userImage} />
      </div>
    </div>
  );
};

export default ProfilePage;
