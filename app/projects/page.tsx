import Header from "../components/layout/Header";
import { Projects } from "../components/sections/Projects";
import Footer from "../components/layout/Footer";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div id="projects">
        <Projects />
      </div>
      <Footer />
    </main>
  );
}
