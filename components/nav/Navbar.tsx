import Link from "next/link";
import NavMenu from "./NavMenu";
import { useRouter } from "next/router";
import { UserAuth } from "../layouts/AuthContext";

const Navbar = () => {

    const { push } = useRouter();

    const handleRoute = () => {
        push("/login");
    }

    const handleProfile = () => {
        push("/profile")
    }

    const { user } = UserAuth();

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
        {user ? (
            <button onClick={handleProfile} className="bg-red-500 text-white font-bold text-base rounded-xl w-20 h-10 mr-10">Profile</button>
        ): (
            <button onClick={handleRoute} className="bg-green-500 text-white font-bold text-base rounded-xl w-20 h-10 mr-10">Sign in</button>
        )}
        
      </div>
    </div>
  );
};

export default Navbar;
