import { useEffect } from "react";
import { Clients } from "../components/Clients";
import { Contact } from "../components/Contact";

export function ClientsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <Clients />
      <Contact />
    </>
  );
}
