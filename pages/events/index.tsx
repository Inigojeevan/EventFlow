import Event from "@/components/events/Event";

const EventsPage = () => {
  const events = [
    {
      id: 1,
      title: "Event 1",
      genre: "Comedy",
      image: "/images/comedy.jpg",
    },
    {
      id: 2,
      title: "Event 2",
      genre: "Technical",
      image: "/images/technical.jpg",
    },
    {
      id: 3,
      title: "Event 3",
      genre: "Action",
      image: "/images/action.jpg",
    },
    {
      id: 4,
      title: "Event 4",
      genre: "Action",
      image: "/images/action.jpg",
    },
  ];

  return (
    <div className="flex justify-center">
      <div className="mt-20 p-8 flex items-center flex-col sm:w-full">
        <h1 className="text-white">All Events</h1>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {events.map(event => (
            <Event eventId={event.id} title={event.title} genre={event.genre} image={event.image} key={event.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
