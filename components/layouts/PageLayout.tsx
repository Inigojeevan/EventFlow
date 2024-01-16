import { PropsWithChildren } from "react";
import Navbar from "../nav/Navbar";

const PageLayout = ({children}: PropsWithChildren) => {
    return(
        <>
            <Navbar />
            {children}
        </>
    )
}

export default PageLayout;