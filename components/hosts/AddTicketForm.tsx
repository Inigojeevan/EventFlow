import { Label } from "@radix-ui/react-label";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const TicketForm = (props: {
  onHandleAddTicketType: () => void;
  onHandleCardClose: () => void;
  ticketNameRef: React.RefObject<HTMLInputElement>;
  ticketPriceRef: React.RefObject<HTMLInputElement>;
  ticketQuantityRef: React.RefObject<HTMLInputElement>;
  ticketPerksRef: React.RefObject<HTMLTextAreaElement>;
}) => {
  return (
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
                ref={props.ticketNameRef}
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
                  ref={props.ticketPriceRef}
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
                  ref={props.ticketQuantityRef}
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
                  ref={props.ticketPerksRef}
                  placeholder="Ticket Perks"
                  required
                />
              </div>
            </div>
            <div className="flex justify-end space-x-2">
              <Button className="w-full" onClick={props.onHandleAddTicketType}>
                Add Ticket
              </Button>

              <Button className="w-full" onClick={props.onHandleCardClose}>
                Cancel
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default TicketForm;
