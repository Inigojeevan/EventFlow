import { createContext, useContext, useState } from "react"

type HostContextType = {
    event: HostEvent,
    updateEvent: (eventChange: any)=>void
}

const HostContext = createContext<HostContextType>(null!)

export const HostProvider = ({children}:{children:JSX.Element}) => {
    const [event, setEvent] = useState<HostEvent>({
        host: "",
        name: "",
        description: "",
        date: "",
        time: "",
        ticketTypes: [],
      });

    const updateEvent = (eventChange: any) => {
        setEvent(eventChange)
    }

      return <HostContext.Provider value={{ event, updateEvent}}>{children}</HostContext.Provider>
}

export const useEvent = ():HostContextType => {
    return useContext(HostContext)
}