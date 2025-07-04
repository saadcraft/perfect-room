import HeroSection from "@/components/hero-section/hero-section";
import Promo from "@/components/promo-section/promo";
import Faq from "@/components/faq-section/faq";

export default function Home() {
  console.log(process.env.SERVER_DOMAIN)
  return (
    <div>
      <HeroSection />
      <Promo />
      <Faq />
    </div>
  );
}
