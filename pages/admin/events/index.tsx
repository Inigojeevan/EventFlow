import DashTable from "@/components/admin/DashTable";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { useRouter } from "next/router";

const AdminEventsPage = ({events}: {events: AdminEvent[]}) => {
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
    console.log(events)
  };

  const columns = ["Id", "Title","Genre", "Host", "Event_Date", "Event_Time", "Ticket_Price","Tickets_Sold", "Attendees"];

  return (
    <div className="flex justify-center">
      <div className="mt-20 flex items-center">
        <DashboardLayout>
          <div className="border-fuchsia-600 border-4 rounded-xl h-full w-full shadow-md shadow-fuchsia-600">
            <div className="bg-black bg-opacity-55 w-full h-full rounded-xl">
              <div className="flex justify-center w-full h-full rounded-xl">
                <DashTable
                  columns={columns}
                  data={events}
                  onEditClick={handleEditClick}
                  onDeleteClick={handleDeleteClick}
                />
              </div>
            </div>
          </div>
        </DashboardLayout>
      </div>
    </div>
  );
};

export const getServerSideProps = async(context: any) => {
  if(!context){
    return {
      notFound: true
    }
  }

  const res = await fetch("http://localhost:3000/api/admin/events")
  const events = await res.json()

  return {
    props: {
      events,
    }
  }
}

export default AdminEventsPage;
