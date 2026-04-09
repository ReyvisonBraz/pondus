import { useEffect } from "react";
import { Hero } from "../components/Hero";
import { Ticker } from "../components/Ticker";
import { Products } from "../components/Products";
import { Differentials } from "../components/Differentials";
import { EquipmentShowcase } from "../components/EquipmentShowcase";
import { Applications } from "../components/Applications";
import { Results } from "../components/Results";
import { CTA } from "../components/CTA";

export function HomePage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <Hero />
      <Ticker />
      <Products />
      <Differentials />
      <EquipmentShowcase />
      <Applications />
      <Results />
      <CTA />
    </>
  );
}
