import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import SectionEducation from './components/SectionEducation.jsx'
import SectionUnemployment from './components/SectionUnemployment.jsx'
import SectionSocialMedia from './components/SectionSocialMedia.jsx'
import SectionHealth from './components/SectionHealth.jsx'
import SectionTourism from './components/SectionTourism.jsx'
import SectionMap from './components/SectionMap.jsx'
import SectionQuiz from './components/SectionQuiz.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="antialiased">
      <Navbar />
      <Hero />
      <SectionEducation />
      <SectionUnemployment />
      <SectionSocialMedia />
      <SectionHealth />
      <SectionTourism />
      <SectionMap />
      <SectionQuiz />
      <Footer />
    </div>
  )
}
