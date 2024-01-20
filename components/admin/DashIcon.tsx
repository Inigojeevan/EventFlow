import { useRouter } from "next/router";
import { ReactNode } from "react";

const DashIcon = (props: { icon: ReactNode; name: string; route: string }) => {
  const { push } = useRouter();

  const handleRoute = (route: string) => {
    push(`/admin/${route}`);
  };

  return (
    <div onClick={()=>handleRoute(props.route)} className="cursor-pointer flex flex-row hover:bg-opacity-15 hover:shadow-fuchsia-600 shadow-md duration-100 ease-in bg-black bg-opacity-40 border-4 border-fuchsia-700 w-56 h-24 rounded-xl justify-center items-center">
      <div className="mr-auto ml-5">{props.icon}</div>
      <div className="flex flex-col justify-center items-center w-4/5">
        <p className="text-base text-white font-semibold">Module</p>
        <p className="text-2xl text-white font-bold">{props.name}</p>
      </div>
    </div>
  );
};

export default DashIcon;
