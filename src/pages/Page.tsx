import { Feature } from "../components/Feature";
import { Footer } from "../components/Footer";
import { Form } from "../components/Form";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";

export function Page() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Hero />
      <Feature />
      <Form />
      <Footer />
    </div>
  );
}
