import { ReactNode } from "react";
import DashNav from "../admin/DashNav";

const DashboardLayout = (props: { children: ReactNode }) => {
  const date = new Date();
  const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
  const currentDate = date.toLocaleString('en-US', options);

  return (
    <div className="w-screen h-[90vh] flex flex-col">
      <div className="mt-3 p-5 flex flex-row">
        <p className="text-white text-3xl font-semibold ml-16">Overview</p>
        <p className="text-white text-2xl font-semibold ml-auto mr-10">{currentDate}</p>
      </div>
      <div className="flex flex-row p-5">
        <div>
          <DashNav />
        </div>
        <div className="ml-auto bg-white rounded-xl w-[80vw] h-[65vh]">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
