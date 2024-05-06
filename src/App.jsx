import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import FooterSection from "./components/FooterSection";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
      </main>
      <footer>
        <FooterSection />
      </footer>
    </>
  )
}

export default App
