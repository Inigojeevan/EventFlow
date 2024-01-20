import Link from "next/link";
import NavMenu from "./NavMenu";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {

    const { push } = useRouter();

    const handleRoute = () => {
        push("/login");
    }

    const handleProfile = () => {
        push("/profile")
    }

    const {data: session} = useSession();

  return (
    <div className="shadow-md shadow-fuchsia-600 fixed w-screen h-20 bg-indigo-950 flex flex-row items-center justify-between">
      <div>
        <Link href="/" className="p-5 ml-5 text-3xl text-white font-semibold">
          Event<span className="text-fuchsia-600">Flow</span>
        </Link>
      </div>
      <div>
        <NavMenu />
      </div>
      <div>
        {session ? (
            <button onClick={handleProfile} className="bg-violet-700 duration-150 ease-in-out border-fuchsia-700 hover:border-fuchsia-600 border-2 hover:shadow-fuchsia-500 shadow-md text-white font-bold text-base rounded-xl w-20 h-10 mr-10">Profile</button>
        ): (
            <button onClick={handleRoute} className="bg-green-500 duration-150 ease-in-out border-green-300 hover:border-green-600 border-2 hover:shadow-green-500 shadow-md text-white font-bold text-base rounded-xl w-20 h-10 mr-10">Login</button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
