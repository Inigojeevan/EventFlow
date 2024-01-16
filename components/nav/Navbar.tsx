import Link from "next/link";
import NavMenu from "./NavMenu";
import { useRouter } from "next/router";

const Navbar = () => {

    const { push } = useRouter();

    const handleRoute = () => {
        push("/login");
    }

    const handleSignOut = () => {
        console.log("Sign out user")
    }

    const session = false;

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
            <button onClick={handleSignOut} className="bg-red-500 text-white font-bold text-base rounded-xl w-20 h-10 mr-6">Sign out</button>
        ): (
            <button onClick={handleRoute} className="bg-green-500 text-white font-bold text-base rounded-xl w-20 h-10 mr-6">Sign in</button>
        )}
        
      </div>
    </div>
  );
};

export default Navbar;
