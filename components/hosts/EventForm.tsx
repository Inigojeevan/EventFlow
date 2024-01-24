import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectTrigger, SelectValue } from "@radix-ui/react-select";
import { PlusIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useEffect, useRef } from "react";
import { useEvent } from "../layouts/HostContext";

const EventForm = (props: { children: JSX.Element[]; onToggleCard: () => void, onHandleHostEvent: ()=>void }) => {

    const { event, updateEvent } = useEvent()

  const eventNameRef = useRef<HTMLInputElement>(null);
  const eventDescriptionRef = useRef<HTMLTextAreaElement>(null);
  const eventDateRef = useRef<HTMLInputElement>(null);
  const eventTimeRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (eventNameRef.current) {
      eventNameRef.current.value = event.name || "";
    }
    if (eventDescriptionRef.current) {
      eventDescriptionRef.current.value = event.description || "";
    }
    if (eventDateRef.current) {
      eventDateRef.current.value = event.date || "";
    }
    if (eventTimeRef.current) {
      eventTimeRef.current.value = event.time || "";
    }
  }, [event]);

  const handleEventFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    updateEvent((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };


  return (
    <div className="flex flex-col p-5">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Host an Event</h1>
        <p className="text-gray-400 dark:text-gray-400">Fill out the form below to host your event</p>
      </div>
      <div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="event-name">Event Name</Label>
            <Input
              ref={eventNameRef}
              id="event-name"
              name="name"
              placeholder="Event Name"
              className="text-black"
              onChange={handleEventFormChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="event-description">Event Description</Label>
            <Textarea
              className="min-h-[100px] text-black"
              id="event-description"
              placeholder="Event Description"
              required
              name="description"
              ref={eventDescriptionRef}
              onChange={handleEventFormChange}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="event-date">Event Date</Label>
              <Input
                id="event-date"
                className="text-black"
                required
                type="date"
                name="date"
                ref={eventDateRef}
                onChange={handleEventFormChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="event-time">Event Time</Label>
              <Input
                id="event-time"
                className="text-black"
                type="time"
                name="time"
                ref={eventTimeRef}
                onChange={handleEventFormChange}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="ticket-type">Ticket Type</Label>
            <div className="flex items-center space-x-2">
              <div id="ticket-type" className="text-black w-full bg-white h-10 flex items-center pl-5 rounded">
                <Select>
                  <SelectTrigger className="text-black">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">{props.children}</SelectContent>
                </Select>
              </div>
              <Button size="icon" className="text-black" variant="outline" onClick={props.onToggleCard}>
                <PlusIcon />
                <span className="sr-only">Add ticket type</span>
              </Button>
            </div>
          </div>

          <Button onClick={props.onHandleHostEvent} className="w-full" type="submit">
            Host Event
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventForm;
