// AdminEventsPage.tsx
import DashTable from "@/components/admin/DashTable";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { useRouter } from "next/router";

const AdminEventsPage = () => {
  const { push } = useRouter();

  const handleRoute = (id: number) => {
    push(`/admin/events/${id}`);
  };

  const handleEditClick = (rowData: { Id: number }) => {
    console.log("Edit clicked for row:", rowData);
    handleRoute(rowData.Id);
  };

  const handleDeleteClick = (rowData: string) => {
    console.log("Delete clicked for row:", rowData);
  };

  const columns = ["Id", "Name", "Ticket Types", "Tickets Sold", "Attendees"];

  const tableData = [
    {
      Id: 1,
      Name: "Event 1",
      "Ticket Types": "VIP",
      "Tickets Sold": 100,
      Attendees: 80,
    },
    {
      Id: 2,
      Name: "Event 2",
      "Ticket Types": "General",
      "Tickets Sold": 200,
      Attendees: 180,
    },
    {
      Id: 3,
      Name: "Event 3",
      "Ticket Types": "Premium",
      "Tickets Sold": 150,
      Attendees: 120,
    },
  ];

  return (
    <div className="flex justify-center">
      <div className="mt-20 flex items-center">
        <DashboardLayout>
          <div className="border-fuchsia-600 border-4 w-full h-full rounded-xl shadow-md shadow-fuchsia-600">
            <div className="flex justify-center w-full h-full bg-black opacity-55 rounded-xl">
              <DashTable
                columns={columns}
                data={tableData}
                onEditClick={handleEditClick}
                onDeleteClick={handleDeleteClick}
              />
            </div>
          </div>
        </DashboardLayout>
      </div>
    </div>
  );
};

export default AdminEventsPage;
