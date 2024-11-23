import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";

export default  function MainLayout() {
    return (
        <>
        <Header></Header>
        <Outlet></Outlet>
        <div className="min-h-screen"></div>
        <Footer></Footer>
        </>
    );
}

