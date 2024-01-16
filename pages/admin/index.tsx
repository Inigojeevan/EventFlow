import DashboardLayout from "@/components/layouts/DashboardLayout";

const AdminPage = () => {
  const adminName = "Admin";

  return (
    <div className="flex justify-center">
      <div className="mt-20 flex items-center">
        <DashboardLayout>
          <div className="flex justify-center w-full h-full bg-black opacity-55 rounded-xl border-violet-700 border-4 shadow-md shadow-violet-500">
            <div className="flex justify-center items-center flex-col gap-3">
              <p className="text-white text-3xl font-bold mb-10">Admin</p>
              <div className="mb-10">
                <p className="text-white text-2xl font-semibold">
                  Currently logged in as:
                  <span className="text-fuchsia-600"> {adminName}</span>
                </p>
                <p className="text-white text-xl mt-3 font-semibold">
                  Manage different module sections
                </p>
              </div>
            </div>
          </div>
        </DashboardLayout>
      </div>
    </div>
  );
};

export default AdminPage;
