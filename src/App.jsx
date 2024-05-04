import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Header from "./components/Header";
import Hero from "./components/Hero";
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
      </main>
    </>
  )
}

export default App
