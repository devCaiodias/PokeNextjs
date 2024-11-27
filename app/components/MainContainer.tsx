import Footer from "./Footer";
import Navbar from "./NavBar";
// import Head from "next/head";


interface Props {
    children: React.ReactNode
  }  

export default function MainContainer({children}: Readonly<Props>) {
     return (
        <>
            <main className="main-container">
                <Navbar /> 
                {children}
            </main>
            <Footer />
        </>
     )
}