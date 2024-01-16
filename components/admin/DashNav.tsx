import { GanttChartSquare, ScreenShare, User } from "lucide-react";
import DashIcon from "./DashIcon";

const DashNav = () => {
  const NavElements = [
    {
      icon: <GanttChartSquare color="#ffffff" />,
      name: "Events",
      route: "admin/events",
    },
    {
      icon: <ScreenShare color="#ffffff" />,
      name: "Hosts",
      route: "admin/hosts",
    },
    { icon: <User color="#ffffff" />, name: "Users", route: "admin/users" },
  ];

  return (
    <div className="flex flex-col justify-center gap-8 p-5">
      {NavElements.map((element) => (
        <DashIcon
          icon={element.icon}
          name={element.name}
          route={element.route}
          key={element.name}
        />
      ))}
    </div>
  );
};

export default DashNav;
