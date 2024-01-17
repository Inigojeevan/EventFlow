import { GetServerSidePropsContext } from "next";

export async function fetchEvent(context: GetServerSidePropsContext) {
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
}
