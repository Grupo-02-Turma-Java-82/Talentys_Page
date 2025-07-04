import { Demonstration } from "../components/Demonstration";
import { Feature } from "../components/Feature";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";

export function Page() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Hero />
      <Feature />
      <Demonstration />
      <Footer />
    </div>
  );
}
