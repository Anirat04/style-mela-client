import Banner from "@/components/HomePage/Banner/Banner";
import HomeProducts from "@/components/HomePage/HomeProducts/HomeProducts";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Banner></Banner>
      <HomeProducts></HomeProducts>
    </main>
  );
}
