import Header from "../components/layout/Header";
import { Contact } from "../components/sections/Contact";
import Footer from "../components/layout/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
