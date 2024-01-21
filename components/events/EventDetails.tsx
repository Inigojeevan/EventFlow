import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "next/router";

const EventDetails = (event: {
  title: string;
  image: string;
  genre: string;
  description: string;
  host_details: string;
  event_date: string;
  event_time: string;
  ticket_price: string;
}) => {
  const router = useRouter();
  const { id } = router.query;
  const handleSubmit = (e: React.FormEvent) => {
    const availableTickets: boolean = true; //this would be changed after backend done
    if (availableTickets) {
      router.push(`/register/${id}`);
    } else {
      alert("Tickets are sold out");
      router.push("/events");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-violet-900 p-6">
      <div className="flex items-center bg-black bg-opacity-40 p-6 w-80vw space-x-4 relative overflow-hidden rounded-xl shadow-md shadow-fuchsia-600 border-fuchsia-700">
        <div className="relative w-80 h-80 shadow-lg rounded-lg overflow-hidden">
          <Image src={event.image} alt={event.title} width={300} height={500} />
        </div>
        <div className="flex flex-col flex-grow">
          <h1 className="text-fuchsia-600 text-2xl font-bold mb-2">{event.title}</h1>
          <h2 className="text-lg mb-2">{event.genre}</h2>
          <p className="mb-2">{event.description}</p>
          {event.host_details && <p className="mb-2">{event.host_details}</p>}
          <h2 className="mb-2 text-fuchsia-500">{event.event_date}</h2>
          <h2 className="mb-2 text-fuchsia-500">{event.event_time}</h2>
          <p>{event.ticket_price}</p>
          <div className="mt-4">
            <Button className="text-fuchsia-600" onClick={handleSubmit}>
              Buy Ticket
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
