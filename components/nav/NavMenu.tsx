import Link from "next/link";

const NavMenu = () => {
  const session = false;

  return (
    <div className="w-full h-10 bg-transparent border-none flex flex-row gap-2">
      <div className="w-28 h-10 rounded-xl hover:bg-violet-700 shadow-md duration-150 ease-in-out hover:shadow-fuchsia-500 bg-violet-900 border-fuchsia-600 border-2 text-white text-base flex justify-center items-center">
        <Link href="/events" className="text-base font-semibold w-full h-full flex justify-center items-center">
          <p className="text-base semibold font-semibold">Events</p>
        </Link>
      </div>
      <div className="w-28 h-10 rounded-xl hover:bg-violet-700 shadow-md duration-150 ease-in-out hover:shadow-fuchsia-500 bg-violet-900 border-fuchsia-600 border-2 text-white text-base flex justify-center items-center">
        <Link href="/host-event" className="text-base font-semibold w-full h-full flex justify-center items-center">
          <p className="text-base semibold font-semibold">Host</p>
        </Link>
      </div>
      {session ? (
        <>
          <div className="w-28 h-10 rounded-xl hover:bg-violet-700 shadow-md duration-150 ease-in-out hover:shadow-fuchsia-500 bg-violet-900 border-fuchsia-600 border-2 text-white text-base flex justify-center items-center">
            <Link href="/contact" className="text-base font-semibold w-full h-full flex justify-center items-center">
              <p className="text-base semibold font-semibold">Contact</p>
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="w-28 h-10 rounded-xl hover:bg-violet-700 shadow-md duration-150 ease-in-out hover:shadow-fuchsia-500 bg-violet-900 border-fuchsia-600 border-2 text-white text-base flex justify-center items-center">
            <Link href="/admin" className="text-base font-semibold w-full h-full flex justify-center items-center">
              <p className="text-base semibold font-semibold">Admin</p>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default NavMenu;
