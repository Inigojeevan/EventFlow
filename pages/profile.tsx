import { UserAuth } from "@/components/layouts/AuthContext";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Image from "next/image";

const ProfilePage = () => {
  const router = useRouter();

  const { user, handleLogout } = UserAuth();

  const userImage = user?.photoURL;

  useEffect(() => {
    if (user === null) {
      router.push("/login");
    }
  });

  return (
    <>
      <div className="w-[100vw] h-[100vh] flex bg-black justify-center items-center">
        <div className="mt-20 flex-row w-2/3 h-2/3 border-4 border-fuchsia-900 shadow-md shadow-fuchsia-500 bg-violet-900 rounded-2xl flex justify-center">
          <div className="mr-auto w-1/3 h-full flex">
            <h1 className="p-7 ">Profile</h1>
          </div>
          <div className="w-4/5 h-full mr-auto flex items-center justify-center">
            <div className="flex justify-center items-start flex-col gap-8 mt-10">
              <p className="text-2xl font-bold">
                Name: <span className="text-green-400">{user?.displayName}</span>{" "}
              </p>
              <p className="text-2xl font-bold">
                Email: <span className="text-green-400">{user?.email}</span>{" "}
              </p>
              <div className="flex gap-4 flex-row">
                <button onClick={()=>router.replace("/")} className="bg-violet-500 border-2 border-400 hover:bg-violet-700 shadow-md hover:shadow-violet-500 rounded-xl text-white text-base font-bold p-2">Go Home</button>
                <button onClick={handleLogout} className="bg-red-500 border-2 border-400 hover:bg-red-700 shadow-md hover:shadow-red-500 rounded-xl text-white text-base font-bold p-2">Sign out</button>
              </div>
            </div>
          </div>
          <div className="w-2/5 h-full flex justify-center">
            {userImage && (
              <div className="w-2/5 h-2/5 flex justify-end items-end">
                <Image src={userImage} alt="User" width={70} height={70} className="shadow-lg shadow-white" style={{ borderRadius: "50%" }} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
