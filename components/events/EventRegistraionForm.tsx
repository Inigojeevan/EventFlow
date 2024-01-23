const EventRegistrationForm = ({ event }: { event: EventType }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <form className="bg-black bg-opacity-55 p-8 w-1/2 rounded-xl shadow-md shadow-fuchsia-600 border-fuchsia-700">
        <div className="mb-4">
          <label className="block mb-2 text-white text-lg">Event Name:</label>
          {event && (
            <input
              type="text"
              name="eventName"
              value={event.title}
              id="eventName"
              readOnly
              className="text-black block w-full text-lg p-2"
            />
          )}
        </div>
        <div>
          <label className="block mb-2 text-white text-lg">Required Tickets</label>
          <input
            type="number"
            name="ticket_needed"
            id="ticket_needed"
            className="text-black block w-full text-lg p-2"
            min={0}
            max={10} //for now, later change to event.tickets_available
          />
        </div>
      </form>
    </div>
  );
};

export default EventRegistrationForm;
