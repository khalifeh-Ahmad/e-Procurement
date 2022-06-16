import Header from "./Header";
import Footer from "./Footer";
import { PropsWithChildren } from "react";
import Main from "./Main";

export default function Layout({ children }: PropsWithChildren<any>) {
    return (
        <>
            <Header />
            <Main />
            {/* <main>{children}</main> */}
            <Footer />
        </>
    )
}