import Image from "next/image";
import { useRouter } from "next/router";

const Event = (props: {eventId: number, title: string, image: string, genre: string}) => {

    const { push } = useRouter()

    const handleEventRoute = (id: number) => {
        push(`/events/${id}`)
    }

    return(
      // create and add way to navigate to [eventName]
        <div className="bg-black bg-opacity-40 flex flex-col justify-start items-center gap-4 w-72 h-full p-5 rounded-xl shadow-md shadow-fuchsia-600 border-fuchsia-700 border-4">
                <p className="text-xl text-violet-500">
                  Title: <span className="text-fuchsia-600">{props.title}</span>
                </p>
                <p className="text-violet-500 text-base">Genre: <span className="text-fuchsia-600">{props.genre}</span></p>
                <Image
                  src={props.image}
                  alt={props.title}
                  width={220}
                  height={500}
                  className="rounded-xl border-fuchsia-700 border-2 shadow-sm shadow-fuchsia-600"
                />
                <button className="mt-auto bg-violet-700 w-24 h-10 text-white text-base font-bold" onClick={()=>handleEventRoute(props.eventId)}>View</button>
            </div>
    )
}

export default Event;
