"use client";
import ProductPanel from "@/components/ProductPanel";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="relative w-full h-[300px]  overflow-hidden">
        <Image
          src="/bg-cafe-lg.jpg"
          alt="Background"
          fill
          className="object-cover max-md:hidden"
        />
        <Image
          src="/bg-cafe-sm.jpg"
          alt="Responsive"
          fill
          className="object-cover hidden max-md:block"
        />
      </div>
      <ProductPanel />
    </>
  );
}
