import Hero from "@/components/Hero";
import ProductList from "@/components/ProductList";
import References from "@/components/References";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <ProductList />
      <References />
      <Services />
    </div>
  );
}
