import Hero from "@/components/Hero";
import References from "@/components/References";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <References />
    </div>
  );
}
