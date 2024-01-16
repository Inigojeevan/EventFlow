import { NextApiRequest, NextApiResponse } from "next";

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
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const event = events.find(event => event.id === Number(id));
  if (!event) {
    return res.status(404).json({ message: "Event not found" });
  }
  return res.status(200).json(event);
}
