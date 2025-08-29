import HeroSection from "@/components/hero/HeroSection";
import { IProducts } from "@/interfaces/products";

export default function Home() {


  const items: IProducts[] = [
    {
      title: "OVERSIZE T-SHIRT DASEIN",
      src: "https://media.zoho.in.ua/a9f26494-59f0-480d-879e-fbbd27919217?v=1685551752812",
      price: 950
    },
    {
      title: "T-SHIRT BLESS SEASON",
      src: "https://media.zoho.in.ua/85643c96-a948-4174-af1c-5fcc538f532d?v=1685566406661",
      price: 1400
    },
    {
      title: "OVERSIZE T-SHIRT ZOHO",
      src: "https://media.zoho.in.ua/e7332e56-4fba-49f9-8466-6b1b056199cc?v=1685148979908",
      price: 2000
    },
  ]
  return (
    <>
      <HeroSection items={items} />
    </>
  );
}
