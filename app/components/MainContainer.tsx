import Footer from "./Footer";
import Navbar from "./NavBar";


interface Props {
    children: React.ReactNode
  }  

export default function MainContainer({children}: Readonly<Props>) {
     return (
        <>
            <Navbar /> 
            <main className="main-container">
                {children}
            </main>
            <Footer />
        </>
     )
}