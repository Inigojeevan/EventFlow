import { ReactNode } from "react";
import DashNav from "../admin/DashNav";

const DashboardLayout = (props: { children: ReactNode }) => {
  const date = new Date();
  const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
  const currentDate = date.toLocaleString('en-US', options);

  return (
    <div className="w-screen h-[90vh] flex flex-col">
      <div className="mt-3 p-5 flex flex-row">
        <p className="text-white text-3xl font-semibold ml-14">Overview</p>
        <p className="text-white text-2xl font-semibold ml-auto mr-10">{currentDate}</p>
      </div>
      <div className="flex flex-row pr-5">
        <div className="pl-5 mr-5">
          <DashNav />
        </div>
        <div className="ml-auto rounded-xl w-[80vw] h-[64vh] pr-9">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
