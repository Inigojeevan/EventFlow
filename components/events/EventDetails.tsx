import Image from "next/image";

const EventDetails = (event: {
  title: string;
  image: string;
  genre: string;
  description: string;
  host_details: string; //if we want to add host details
  event_date: string;
  event_time: string;
  ticket_price: string;
}) => {
  return (
    <div className="flex items-center justify-center h-screen bg-violet-900 p-6">
      <div className="flex items-center bg-black bg-opacity-40 p-6 rounded-lg">
        <div className="relative w-64 h-64 shadow-lg rounded-lg">
          <Image
            src={event.image}
            alt={event.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="ml-4 flex flex-col">
          <h1 className="text-fuchsia-600 text-2xl font-bold mb-2">
            {event.title}
          </h1>
          <p className="text-lg mb-2">{event.genre}</p>
          <p className="mb-2">{event.description}</p>
          <p className="mb-2">{event.host_details}</p>
          <p className="mb-2">{event.event_date}</p>
          <p className="mb-2">{event.event_time}</p>
          <p>{event.ticket_price}</p>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
