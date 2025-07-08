import HeroSection from "@/components/hero-section/hero-section";
import Promo from "@/components/promo-section/promo";
import Faq from "@/components/faq-section/faq";
import { HeroDynamo } from "@/lib/endpoint/dyamic";

export default async function Home() {

  const getdynamo = await HeroDynamo()

  console.log(getdynamo)

  return (
    <div>
      <HeroSection data={getdynamo} />
      <Promo />
      <Faq data={getdynamo?.fqa || null} />
    </div>
  );
}
