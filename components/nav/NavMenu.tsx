import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const NavMenu = () => {
  const session = false;

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className="w-32">
          <NavigationMenuTrigger className="w-32 bg-violet-900 border-2 border-fuchsia-600 text-white">
            Events
          </NavigationMenuTrigger>
          <NavigationMenuContent className="w-full">
            <div className="w-32">
              <Link
                href="/events"
                className="text-base font-semibold w-32 h-12 p-1 flex justify-center items-center"
              >
                View Events
              </Link>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="w-32 bg-violet-900 border-2 border-fuchsia-600 text-white">
            Host
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-32">
              <Link
                href="/host-event"
                className="text-base font-semibold w-32 h-12 p-1 flex justify-center items-center"
              >
                Host Event
              </Link>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {session ? (
          <NavigationMenuItem>
            <NavigationMenuTrigger className="w-32 bg-violet-900 border-2 border-fuchsia-600 text-white">
              Contact
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-32">
                <Link
                  href="/contact"
                  className="text-base font-semibold w-32 h-12 p-1 flex justify-center items-center"
                >
                  Contact support
                </Link>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ) : (
          <NavigationMenuItem>
            <NavigationMenuTrigger className="w-32 bg-violet-900 border-2 border-fuchsia-600 text-white">
              Admin
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-32">
                <Link
                  href="/admin"
                  className="text-base font-semibold w-32 h-12 p-1 flex justify-center items-center"
                >
                  Admin
                </Link>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavMenu;
