import { NextApiRequest, NextApiResponse } from "next";
import { events } from ".";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = req.query;
    const loadedEvent = events.find(event => event.Id === Number(id));

    if (!loadedEvent) {
      console.error("Event not found");
    }
    return res.status(200).json(loadedEvent);
  } catch (error) {
    console.error("Error finding event: ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
