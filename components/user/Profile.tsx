import { signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";

import React from "react";

const Profile = (props: {
  userName: string | null | undefined;
  userEmail: string | null | undefined;
  userImage: any;
}) => {
  const router = useRouter();

  return (
    <>
      <div className="flex justify-center items-center mr-auto w-1/3 h-fit p-5">
        <h1 className="text-white">Profile</h1>
      </div>
      <div className="mt-10 flex justify-center items-start flex-col w-3/5 gap-10">
        <h1 className="text-white text-2xl">
          Name : <span className="ml-5 text-green-400">{props.userName}</span>
        </h1>
        <h1 className="text-white text-2xl">
          Email : <span className="ml-6 text-green-400">{props.userEmail}</span>
        </h1>
        <div className="flex items-center flex-row w-full gap-10">
          <button
            onClick={() => router.replace("/")}
            className="bg-violet-500 duration-150 ease-in-out text-white font-bold text-xl p-3 rounded-xl hover:bg-violet-700 border-2 hover:border-violet-400 shadow-md hover:shadow-violet-400"
          >
            Go Home
          </button>
          <button
            onClick={() => signOut()}
            className="bg-red-500 duration-150 ease-in-out text-white font-bold text-xl p-3 rounded-xl hover:bg-red-700 border-2 hover:border-red-500 shadow-md hover:shadow-red-400"
          >
            Sign out
          </button>
        </div>
      </div>
      {props.userImage && (
        <div className="flex justify-center items-center p-7 ml-auto h-fit">
          <Image
            src={props.userImage}
            alt="User profile"
            width={100}
            height={100}
            className="border-4 border-white shadow-md shadow-white"
            style={{ borderRadius: "50%" }}
          />
        </div>
      )}
    </>
  );
};

export default Profile;
