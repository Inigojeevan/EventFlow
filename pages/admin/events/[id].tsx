import DashboardLayout from "@/components/layouts/DashboardLayout";

const AdminEventPage = () => {
  return (
    <div className="flex justify-center">
      <div className="mt-20 flex items-center">
        <DashboardLayout>
          <div className="flex justify-center w-full h-full bg-black opacity-55 rounded-xl border-fuchsia-600 border-4 shadow-md shadow-fuchsia-500"></div>
        </DashboardLayout>
      </div>
    </div>
  );
};

export default AdminEventPage;

