import { useEffect } from "react";
import { About } from "../components/About";
import { Contact } from "../components/Contact";

export function AboutPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <About />
      <Contact />
    </>
  );
}
