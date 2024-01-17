import Image from "next/image";

const DashEvent = (props: AdminEvent) => {
  const descriptionWords = props.Description.split(" ");
  const shortDescription = descriptionWords.slice(0, 6).join(" ");

  return (
    <div className="text-white h-full flex flex-row items-center gap-4">
      <div className="rounded-xl w-1/3 pl-10">
        <Image
          className="rounded-xl border-4 border-fuchsia-600 shadow-fuchsia-500 shadow-md"
          src={props.Image}
          alt={props.Title}
          width={200}
          height={50}
        />
      </div>
      <div className="flex flex-col w-3/5 md:overflow-y-hidden overflow-y-scroll max-h-1/3">
        <div className="grid grid-cols-2 gap-2 p-6 mt-2 text-fuchsia-400">
          <p className="font-bold text-white">Id:</p>
          <p>{props.Id}</p>

          <p className="font-bold text-white">Title:</p>
          <p>{props.Title}</p>

          <p className="font-bold text-white">Genre:</p>
          <p>{props.Genre}</p>

          <p className="font-bold text-white">Description:</p>
          <p>{shortDescription + "..."}</p>

          <p className="font-bold text-white">Host:</p>
          <p>{props.Host}</p>

          <p className="font-bold text-white">Event Date:</p>
          <p>{props.Event_Date}</p>

          <p className="font-bold text-white">Event Time:</p>
          <p>{props.Event_Time}</p>

          <p className="font-bold text-white">Ticket Price:</p>
          <p>{props.Ticket_Price}</p>

          <p className="font-bold text-white">Tickets Sold:</p>
          <p>{props.Tickets_Sold}</p>

          <p className="font-bold text-white">Attendees:</p>
          <p>{props.Attendees}</p>
        </div>
      </div>
      <div className="ml-auto mt-auto p-5 w-fit h-fit">
        <button className="bg-fuchsia-700 w-16 h-9 rounded-xl text-white font-bold">Edit</button>
      </div>
    </div>
  );
};

export default DashEvent;
