import { Carde } from "./Carde";
import { Footer } from "./Footer";

export const Layout = ({ children }: any) => {
    return(
        <>
            <Carde/>
                {children}
            <Footer/>
        </>
    )
}