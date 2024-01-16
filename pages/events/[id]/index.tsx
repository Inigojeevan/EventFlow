import { GetServerSideProps } from "next";
import Image from "next/image";

type Event = {
  id: number;
  title: string;
  genre: string;
  image: string;
}

type EventPageProps = {
  event: Event;
}

const EventPage = ({ event }: EventPageProps) => {
  return (
    <div>
      <h1>{event.title}</h1>
      <p>{event.genre}</p>
      <Image src={event.image} alt={event.title} width={500} height={300} />
      <p>{event.genre}</p>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async(context) => {
  if (!context.params) {
    return {
      notFound: true,
    };
  }
  const { id } = context.params;
  const res = await fetch(`http://localhost:3000/api/events/${id}`);
  const event = await res.json();
  return {
    props: {
      event,
    },
  };
};

export default EventPage;
