import { cn } from "../../../../lib/utils"
import MeetOurTeam from "../../components/about"
import BankingFeatures from "../../components/banking/banking-features"
import RealStateSection from "../../components/banking/sections/real-estate"
import ResponsibilitySection from "../../components/banking/sections/responsibility"
import TelecommunicationSection from "../../components/banking/sections/telecommunication"
import TradingSection from "../../components/banking/sections/trading"
import CompanyHeroSection from '../../components/company'

export default function Sections() {
  const stickyCard = "sticky  top-0 h-screen w-screen"
  return (
    <main >
      <div className='  static top-0 md:sticky md:h-screen md:w-screen'>
        <section id='company' >
          <CompanyHeroSection />
        </section>
      </div>
      <div className='  static top-0 md:sticky md:h-screen md:w-screen'>
        <section id='' >
          <MeetOurTeam />
        </section>
      </div>
      <div className={cn(stickyCard)}>
        <section id='ourFocusArea' >
          <BankingFeatures />
        </section>
      </div>

      <div className={cn(stickyCard)}>
        <section id='' >
          <RealStateSection />
        </section>
      </div>

      <div className={cn(stickyCard)}>
        <section id='' >
          <TelecommunicationSection />
        </section>
      </div>

      <div className={cn(stickyCard,)}>
        <section id='' >
          <TradingSection />
        </section>
      </div>

      <div className={cn(stickyCard, '-mb-10')}>
        <section id='responsibility' >
          <ResponsibilitySection />
        </section>
      </div>
    </main>
  )
}
