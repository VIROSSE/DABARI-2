import { cn } from "../../../lib/utils";
import Comprehensive from "../components/bankingSolutions/comprehensive";
import HeroSection from "../components/hero";
import ReviewHero from "../components/reviews/reviews-hero";
import ServiceFeatures from "../components/services/service-features";
import WelcomeSection from "../components/welcome";

export default function Home() {
  const stickyCard = "sticky  top-0 h-screen w-screen";
  return (
    <main>
      <div className={cn(stickyCard, "-mt-24 md:-mt-[6rem]")}>
        <section id="">
          <HeroSection />
        </section>
      </div>

      <div className="relative ">
        <section id="">
          <Comprehensive />
          <div className="-mt-44 lg:-mt-64">
            <ReviewHero />
          </div>
        </section>
      </div>

      <div className={cn(stickyCard)}>
        <section id="">
          <WelcomeSection />
        </section>
      </div>
      <div className={cn(stickyCard)}>
        <section id="">
          <ServiceFeatures />
        </section>
      </div>
    </main>
  );
}
