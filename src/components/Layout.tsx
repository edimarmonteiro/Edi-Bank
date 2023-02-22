import { Heand } from "./Header/Heand";
import { Footer } from "./Footer";

export const Layout = ({ children }: any) => {
    return(
        <>
            <Heand/>
                {children}
            <Footer/>
        </>
    )
}