import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Services from "./components/Services";

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
      </main>
    </>
  )
}

export default App
