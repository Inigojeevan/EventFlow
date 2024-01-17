import EventDetails from "@/components/events/EventDetails";
import { fetchEvent } from "@/lib/helpers/fetchEvent";

type Event = {
  id: number;
  title: string;
  genre: string;
  image: string;
  description: string;
  host_details: string;
  event_date: string;
  event_time: string;
  ticket_price: string;
};

type EventPageProps = {
  event: Event;
};

const EventPage = ({ event }: EventPageProps) => {
  return (
    <EventDetails
      title={event.title}
      image={event.image}
      genre={event.genre}
      description={event.description}
      host_details={event.host_details}
      event_date={event.event_date}
      event_time={event.event_time}
      ticket_price={event.ticket_price}
    />
  );
};

export const getServerSideProps = async (context: any) => {
  return await fetchEvent(context);
};

export default EventPage;
