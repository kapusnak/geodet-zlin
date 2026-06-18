import Header from "./components/Header";
import OrderNotice from "./components/OrderNotice";
import Hero from "./components/Hero";
import Katastr from "./components/Katastr";
import Inzenyrska from "./components/Inzenyrska";
import Kontakty from "./components/Kontakty";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <OrderNotice />
      <main>
        <Hero />
        <Katastr />
        <Inzenyrska />
        <Kontakty />
      </main>
      <Footer />
    </>
  );
}
