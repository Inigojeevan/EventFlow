const LoginPage = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex bg-black justify-center items-center">
    <div className="mt-20 w-2/3 h-2/3 border-4 border-fuchsia-900 shadow-md shadow-fuchsia-500 bg-violet-900 rounded-2xl flex justify-center">
         <div className="flex justify-center items-center flex-col gap-4">
            <h1 className="text-3xl text-white font-bold">Login</h1>
            <p className="text-white text-xl font-semibold mt-10 rounded-2xl bg-fuchsia-700 h-20 flex justify-center items-center w-60">Sign in with Next-Auth</p>
         </div>
    </div>
  </div>
  );
};

export default LoginPage;
