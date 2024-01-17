const ErrorPage = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex bg-black justify-center items-center">
      <div className="mt-20 w-2/3 h-2/3 border-4 border-fuchsia-900 shadow-md shadow-fuchsia-500 bg-violet-900 rounded-2xl flex justify-center items-center">
        <div className="flex justify-center items-center flex-col gap-3">
          <h1 className="text-3xl text-white font-bold">404</h1>
          <p className="text-white text-2xl font-semibold">Oops! Page not found!</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
