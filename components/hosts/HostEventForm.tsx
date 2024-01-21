import { useRef, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { MinusIcon, PlusIcon } from "lucide-react";
import AddTicketForm from "./AddTicketForm";

const HostEventForm = () => {
  const ticketNameRef = useRef<HTMLInputElement>(null);
  const ticketPriceRef = useRef<HTMLInputElement>(null);
  const ticketQuantityRef = useRef<HTMLInputElement>(null);
  const ticketPerksRef = useRef<HTMLTextAreaElement>(null);

  const handleAddTicketType = () => {
    const ticketType: TicketType = {
      ticketName: ticketNameRef.current?.value || "",
      ticketPrice: parseInt(ticketPriceRef.current?.value!),
      ticketQuantity: parseInt(ticketQuantityRef.current?.value!),
      ticketPerks: ticketPerksRef.current?.value || "",
    };
    setTicketTypes([...ticketTypes, ticketType]);
    setCardOpen(false);
    console.log(ticketTypes);
  };

  const [cardOpen, setCardOpen] = useState(false);
  const toggleCard = () => setCardOpen(!cardOpen);
  const [ticketTypes, setTicketTypes] = useState<Array<TicketType>>([
    {
      ticketName: "Regular",
      ticketPrice: 0,
      ticketQuantity: 1,
      ticketPerks: "A Regular Ticket",
    },
  ]);

  return (
    <div key="1" className="mx-auto max-w-[500px] space-y-6 pt-24 ">
      {cardOpen ? (
        <AddTicketForm
          onHandleAddTicketType={handleAddTicketType}
          onHandleCardClose={() => setCardOpen(false)}
          ticketNameRef={ticketNameRef}
          ticketPriceRef={ticketPriceRef}
          ticketPerksRef={ticketPerksRef}
          ticketQuantityRef={ticketQuantityRef}
        />
      ) : (
        <div className="flex flex-col">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Host an Event</h1>
            <p className="text-gray-400 dark:text-gray-400">Fill out the form below to host your event</p>
          </div>
          <div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="event-name">Event Name</Label>
                <Input id="event-name" placeholder="Event Name" className="text-black" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="event-description">Event Description</Label>
                <Textarea
                  className="min-h-[100px] text-black"
                  id="event-description"
                  placeholder="Event Description"
                  required
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
                    defaultValue={new Date().toISOString().slice(0, 10)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="event-time">Event Time</Label>
                  <Input id="event-time" className="text-black" required type="time" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="event-location">Event Location</Label>
                <Input id="event-location" className="text-black" placeholder="Event Location" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ticket-type">Ticket Type</Label>
                <div className="flex items-center space-x-2">
                  {/* @ts-ignore */}
                  <Select id="ticket-type" className="text-black">
                    <SelectTrigger className="text-black">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      {ticketTypes.map((ticketType, index) => (
                        <div className="flex items-end" key={index}>
                          <SelectItem value={ticketType.ticketName}>{ticketType.ticketName}</SelectItem>
                          <Button
                            onClick={() => {
                              const newTicketTypes = ticketTypes.filter((_, i) => i !== index);
                              setTicketTypes(newTicketTypes);
                            }}
                          >
                            <MinusIcon />
                          </Button>
                        </div>
                      ))}
                    </SelectContent>
                  </Select>
                  <Button size="icon" className="text-black" variant="outline" onClick={toggleCard}>
                    <PlusIcon />
                    <span className="sr-only">Add ticket type</span>
                  </Button>
                </div>
              </div>

              <Button className="w-full" type="submit">
                Host Event
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HostEventForm;

