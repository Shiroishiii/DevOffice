import TopNavBar from '../../components/landing/TopNavBar'
import Footer from '../../components/landing/Footer'
import HeroSection from '../../sections/landing/HeroSection'
import FeaturesSection from '../../sections/landing/FeaturesSection'
import ProgressSection from '../../sections/landing/ProgressSection'
import CompanySection from '../../sections/landing/CompanySection'
import './landing.css'

const Landing = () => {
  return (
    <div className="landing-page bg-[#13121b] text-[#e4e1ee]">
      <TopNavBar />
      <main className="pt-16">
        <HeroSection />
        <FeaturesSection />
        <ProgressSection />
        <CompanySection />
      </main>
      <Footer />
    </div>
  )
}

export default Landing