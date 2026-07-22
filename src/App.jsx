import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import HowItWorks from "./components/HowItWorks";
import RiskCategories from "./components/RiskCategories";
import Philosophy from "./components/Philosophy";
import Audience from "./components/Audience";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <RiskCategories />
        <Philosophy />
        <Audience />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
