import Header from "./components/layout/Header";
import { Hero } from "./components/sections/Hero";
import { Services } from "./components/sections/Services";
import Footer from "./components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div id="main">
        <Hero />
      </div>
      <div id="products">
        <Services />
      </div>
      <Footer />
    </main>
  );
}
