import './App.css'
import heroImg from './assets/7belo-nobg.png'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ProductSection from './components/ProductSection'
import HowItWorksSection from './components/HowItWorksSection'
import FlavorsSection from './components/FlavorsSection'
import SocialProofSection from './components/SocialProofSection'
import PartyVibeSection from './components/PartyVibeSection'
import AgeDisclaimer from './components/AgeDisclaimer'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020617] via-[#020016] to-[#020617] text-slate-50">
      <Navbar />
      <main className="pt-14">
        <HeroSection imageSrc={heroImg} />
        <div id="produto">
          <ProductSection />
        </div>
        <div id="como-funciona">
          <HowItWorksSection />
        </div>
        <div id="sabores">
          <FlavorsSection />
        </div>
        <div id="depoimentos">
          <SocialProofSection />
        </div>
        <PartyVibeSection />
        <AgeDisclaimer />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default App

