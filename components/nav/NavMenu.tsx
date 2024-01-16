import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";

const NavMenu = () => {
  const session = false;

  return (
    <Menubar className="w-full h-10 bg-transparent border-none">
      <MenubarMenu>
        <MenubarTrigger className="w-20 h-10 rounded-xl p-1 bg-violet-900 border-fuchsia-600 border-2 text-white text-base flex justify-center">Events</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <div className="w-32">
              <Link
                href="/events"
                className="text-base font-semibold w-24 h-12 p-1 flex justify-center items-center"
              >
                View Events
              </Link>
            </div>
          </MenubarItem>
        </MenubarContent>
        <MenubarMenu>
          <MenubarTrigger className="w-20 h-10 rounded-xl p-1 bg-violet-900 border-fuchsia-600 border-2 text-white text-base flex justify-center">Hosts</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <div className="w-32">
                <Link
                  href="/host-event"
                  className="text-base font-semibold w-24 h-12 p-1 flex justify-center items-center"
                >
                  Host Event
                </Link>
              </div>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        {session ? (
          <>
            <MenubarMenu>
              <MenubarTrigger className="w-20 h-10 rounded-xl p-1 bg-violet-900 border-fuchsia-600 border-2 text-white text-base flex justify-center">Contact</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  <div className="w-32">
                    <Link
                      href="/contact"
                      className="text-base font-semibold w-24 h-12 p-1 flex justify-center items-center"
                    >
                      Contact Support
                    </Link>
                  </div>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </>
        ) : (
          <>
            <MenubarMenu>
              <MenubarTrigger className="w-20 h-10 rounded-xl p-1 bg-violet-900 border-fuchsia-600 border-2 text-white text-base flex justify-center">Admin</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  <div className="w-32">
                    <Link
                      href="/admin"
                      className="text-base font-semibold w-24 h-12 p-1 flex justify-center items-center"
                    >
                      Admin
                    </Link>
                  </div>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </>
        )}
      </MenubarMenu>
    </Menubar>
  );
};

export default NavMenu;
