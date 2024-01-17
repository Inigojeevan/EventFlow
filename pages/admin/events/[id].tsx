import DashEvent from "@/components/admin/DashEvent";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { GetServerSideProps } from "next";

const AdminEventPage = ({ event }: { event: AdminEvent }) => {
  return (
    <div className="flex justify-center">
      <div className="mt-20 flex items-center">
        <DashboardLayout>
          <div className="border-fuchsia-600 border-4 rounded-xl h-full w-full shadow-md shadow-fuchsia-600">
            <div className="bg-black bg-opacity-55 w-full h-full rounded-xl shadow-md shadow-fuchsia-600">
              <DashEvent
                Id={event.Id}
                Title={event.Title}
                Genre={event.Genre}
                Image={event.Image}
                Description={event.Description}
                Host={event.Host}
                Event_Date={event.Event_Date}
                Event_Time={event.Event_Time}
                Ticket_Price={event.Ticket_Price}
                Tickets_Sold={event.Tickets_Sold}
                Attendees={event.Attendees}
              />
            </div>
          </div>
        </DashboardLayout>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  if (!context.params) {
    return {
      notFound: true,
    };
  }
  const { id } = context.params;
  try {
    const res = await fetch(`http://localhost:3000/api/admin/events/${id}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch event. Status: ${res.status}`);
    }
    const event = await res.json();
    console.log("Fetched event:", event);

    return {
      props: {
        event,
      },
    };
  } catch (error) {
    console.error("Error fetching event: ", error);
    return {
      notFound: true,
    };
  }
};

export default AdminEventPage;
