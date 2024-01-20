import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import GoogleLogo from "@/public/images/google.svg";
import Image from "next/image";

const LoginPage = () => {

  const { data: session } = useSession();
  const router = useRouter();

  const handleLogin = async () => {
    signIn("google");
  };

  useEffect(() => {
    if (session) {
      router.replace("/profile");
    }
  }, [session]);

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <div className="mt-20 w-2/3 h-2/3 border-4 border-fuchsia-900 shadow-md shadow-fuchsia-500 bg-violet-900 rounded-2xl flex justify-center items-center flex-col">
        <h1 className="text-white text-4xl mb-auto mt-16">Login</h1>
        <button
          className="bg-black duration-150 flex justify-center items-center gap-5 ease-in-out w-1/3 mb-auto text-white hover:text-fuchsia-600 text-2xl p-4 rounded-xl font-semibold border-2 hover:border-fuchsia-600 shadow-md hover:shadow-fuchsia-500"
          onClick={handleLogin}
        >
          <Image src={GoogleLogo} alt="G" width={25} />
          <p className="text-xl mb-1">Sign in with Google</p>
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
