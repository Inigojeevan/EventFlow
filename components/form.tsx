import { useRef, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { MinusIcon, PlusIcon } from "lucide-react";
import { Card } from "./ui/card";

export function EventForm() {
  type TicketType = {
    ticketName: string;
    ticketPrice: number;
    ticketQuantity: number;
    ticketPerks: string;
  };

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
        <div className="flex flex-col justify-center items-center">
          <div className="flex p-3">
            <h1 className="text-3xl font-bold">Add Event Ticket type</h1>
          </div>
          <div className="flex justify-center items-center">
            <Card className="flex p-3">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="ticket-name">Ticket Name</Label>
                  <Input
                    className="text-black"
                    ref={ticketNameRef}
                    id="ticket-name"
                    placeholder="Ticket Name"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="ticket-price">Ticket Price</Label>
                    <Input
                      id="ticket-price"
                      className="text-black"
                      min={0}
                      defaultValue={0}
                      ref={ticketPriceRef}
                      placeholder="Ticket Price"
                      required
                      type="number"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ticket-quantity">Ticket Quantity</Label>
                    <Input
                      id="ticket-quantity"
                      className="text-black"
                      min={1}
                      defaultValue={1}
                      ref={ticketQuantityRef}
                      placeholder="Ticket Quantity"
                      required
                      type="number"
                    />
                  </div>
                </div>
                <div>
                  <div className="space-y-2">
                    <Label htmlFor="ticket-perks">Ticket Perks</Label>
                    <Textarea
                      id="ticket-perks"
                      className="min-w-[100px] text-black"
                      ref={ticketPerksRef}
                      placeholder="Ticket Perks"
                      required
                    />
                  </div>
                </div>
                <div className="flex justify-end space-x-2">
                  <Button className="w-full" onClick={handleAddTicketType}>
                    Add Ticket
                  </Button>

                  <Button className="w-full" onClick={() => setCardOpen(false)}>
                    Cancel
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      ) : (
        <div className="flex flex-col">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Host an Event</h1>
            <p className="text-gray-500 dark:text-gray-400">Fill out the form below to host your event</p>
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
