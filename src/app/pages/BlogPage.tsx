import { useEffect } from "react";
import { Blog } from "../components/Blog";
import { Contact } from "../components/Contact";

export function BlogPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <Blog />
      <Contact />
    </>
  );
}
