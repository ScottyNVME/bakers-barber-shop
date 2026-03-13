import JsonLd from "@/components/seo/JsonLd";
import {
  generateBarberShopSchema,
  generateServicesSchema,
  generateFAQSchema,
} from "@/lib/schema";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import About from "@/components/sections/About";
import Reviews from "@/components/sections/Reviews";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <JsonLd data={generateBarberShopSchema()} />
      <JsonLd data={generateServicesSchema()} />
      <JsonLd data={generateFAQSchema()} />
      <Hero />
      <Services />
      <Gallery />
      <About />
      <Reviews />
      <FAQ />
      <Contact />
    </>
  );
}
