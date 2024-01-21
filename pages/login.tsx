import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const LoginPage = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const handleLogin = () => {
    signIn("google");
  };

  useEffect(() => {
    if (session) {
      router.replace("/profile");
    }
  });

  return (
    <div className="w-[100vw] h-[100vh] flex bg-black justify-center items-center">
      <div className="mt-20 w-2/3 h-2/3 border-4 border-fuchsia-900 shadow-md shadow-fuchsia-500 bg-violet-900 rounded-2xl flex justify-center">
        <div className="flex justify-center items-center flex-col gap-4">
          <h1 className="text-3xl text-white font-bold">Login</h1>
          <p
            onClick={handleLogin}
            className="text-white hover:text-fuchsia-400 text-xl font-semibold mt-10 rounded-2xl bg-violet-950 bg-opacity-20 border-2 hover:border-fuchsia-600 shadow-md hover:shadow-fuchsia-500 duration-150 ease-in-out cursor-pointer h-20 flex justify-center items-center w-60"
          >
            Sign in with Google
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
