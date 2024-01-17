import { NextApiRequest, NextApiResponse } from "next";

export const events: AdminEvent[] = [
  {
    Id: 1,
    Title: "Event 1",
    Genre: "Comedy",
    Image: "/images/comedy.jpg",
    Description: "This is a description",
    Host: "This is a host detail",
    Event_Date: "This is a event date",
    Event_Time: "This is a event time",
    Ticket_Price: 40,
    Tickets_Sold: 100,
    Attendees: 90,
  },
  {
    Id: 2,
    Title: "Event 2",
    Genre: "Technical",
    Image: "/images/technical.jpg",
    Description: "This is a description detail",
    Host: "This is a host detail",
    Event_Date: "This is a event date", 
    Event_Time: "This is a event time",
    Ticket_Price: 60,
    Tickets_Sold: 100,
    Attendees: 90,
  },
  {
    Id: 3,
    Title: "Event 3",
    Genre: "Action",
    Image: "/images/action.jpg",
    Description: "This is a description",
    Host: "This is a host detail",
    Event_Date: "This is a event date",
    Event_Time: "This is a event time",
    Ticket_Price: 70,
    Tickets_Sold: 100,
    Attendees: 90,
  },
  {
    Id: 4,
    Title: "Event 4",
    Genre: "Action",
    Image: "/images/action.jpg",
    Description: "This is a description",
    Host: "This is a host detail",
    Event_Date: "This is a event date",
    Event_Time: "This is a event time",
    Ticket_Price: 90,
    Tickets_Sold: 100,
    Attendees: 90,
  },
];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const loadedEvents = await events;
    res.status(200).json(loadedEvents);
  } catch (error) {
    console.error("Error fetching:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
