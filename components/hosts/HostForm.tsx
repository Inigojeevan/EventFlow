import React, { use, useRef, useState } from "react";
import { SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { MinusIcon } from "lucide-react";
import AddTicketForm from "./AddTicketForm";
import EventForm from "./EventForm";
import { useEvent } from "../layouts/HostContext";
import { UserAuth } from "../layouts/AuthContext";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/lib/config";
import { useRouter } from "next/router";

const HostForm = () => {

  const router = useRouter()

  const { event, updateEvent } = useEvent()
  const { user } = UserAuth()

  const ticketNameRef = useRef<HTMLInputElement>(null);
  const ticketPriceRef = useRef<HTMLInputElement>(null);
  const ticketQuantityRef = useRef<HTMLInputElement>(null);
  const ticketPerksRef = useRef<HTMLTextAreaElement>(null);

  const [cardOpen, setCardOpen] = useState(false);
  const [ticketTypes, setTicketTypes] = useState<Array<TicketType>>([
    {
      ticketName: "Regular",
      ticketPrice: 0,
      ticketQuantity: 1,
      ticketPerks: "A Regular Ticket",
    },
  ]);

  const toggleCard = () => setCardOpen(!cardOpen);

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
    updateEvent((prev: any) => ({
      ...prev,
      host: user?.email || "",
      ticketTypes: [...ticketTypes, ticketType],
    }));
  };

  const handleHostEvent = async () => {
    try{
      if(user && user.uid){
        const docRef = await addDoc(collection(db, "events"), {
          host: user.email,
          name: event.name,
          description: event.description,
          date: event.date,
          time: event.time,
          ticketTypes: event.ticketTypes,
        })
        console.log("Document written with ID: ", docRef.id)
        alert("Success")
        router.replace("/")
      } else {
        console.error("User not logged in")
      }
    } catch(e){
      console.error(e)
    }
  };

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
          <EventForm onToggleCard={toggleCard} onHandleHostEvent={handleHostEvent} >
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
          </EventForm>
        )}
    </div>
  );
};

export default HostForm;
