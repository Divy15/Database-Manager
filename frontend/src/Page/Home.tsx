import About from "../Component/About";
import { CounterSection } from "../Component/CounterSection";
import Footer from "../Component/Footer";
import { Hero } from "../Component/Hero";
import { Navbar } from "../Component/Navbar";

export const Home = () => {

    return (
        <>
        <Navbar />
        <Hero />
        <CounterSection />
        <About />
        <Footer />
        </>
    )
};