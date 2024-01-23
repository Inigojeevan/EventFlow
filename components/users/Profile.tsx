import Image from "next/image";

const Profile = (props: { userName: any; userEmail: any; goHome: ()=>void, signOut: ()=>void }) => {
    return (
    <>
      <div className="w-1/3 mr-auto h-fit p-7">
        <p className="text-3xl text-white font-bold ml-10">Profile</p>
      </div>
      <div className="w-full flex flex-col justify-center mt-10">
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-2xl text-white font-semibold mr-24">
            Name: <span className="ml-8 text-green-400">{props.userName}</span>
          </p>
          <p className="text-2xl text-white font-semibold">
            Email: <span className="text-green-400 ml-8">{props.userEmail}</span>
          </p>
        </div>
        <div className="flex-row flex justify-center gap-3 mt-10">
          <button onClick={props.goHome} className="bg-red-500 p-2 font-semibold text-xl rounded-xl duration-150 ease-in-out border-2 shadow-md hover:border-red-400 hover:shadow-red-500 hover:bg-red-700">Go Home</button>
          <button onClick={props.signOut} className="bg-red-500 p-2 font-semibold text-xl rounded-xl duration-150 ease-in-out border-2 shadow-md hover:border-red-400 hover:shadow-red-500 hover:bg-red-700">Sign out</button>
        </div>
      </div>
    </>
  );
};

export default Profile;
