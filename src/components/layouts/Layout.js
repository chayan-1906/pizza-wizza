import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

function Layout({children}) {
    return (
        <div>
            <Navbar/>
            <main>{children}</main>
            <Footer/>
        </div>
    );
}

export default Layout;
