"use client";
import { Button } from "@/components/ui/button";
import Card from "@/components/ui/Card";
import { getAllCoffees } from "@/services/coffeApi";
import { cardDataType } from "@/types/CardType";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<cardDataType[]>([]);
  const [filter, setFilter] = useState<"all" | "available">("all");
  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllCoffees();
      console.log("Fetched data:", res); // 👈 اطبع البيانات

      setData(res);
    };
    fetchData();
  }, []);
  const filteredData =
    filter === "available"
      ? data.filter((item) => item.available === true)
      : data;

  return (
    <>
      <div className="relative w-full h-[400px]  overflow-hidden">
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

      <main className="-mt-100 relative min-h-screen grid grid-cols-12 gap-4 p-10 max-md:p-5">
        <div className=" z-10 col-span-12 mt-10 md:col-start-2 md:col-span-10 bg-default p-10 max-md:p-5  overflow-hidden rounded-2xl text-white space-y-10">
          <section className="flex justify-between items-center flex-col mt-7 ">
            <div className="relative w-[50%] max-md:w-full flex justify-center flex-col gap-3 items-center">
              <Image
                alt="arrow image"
                src={"/vector.svg"}
                width={300}
                height={300}
                className="absolute z-0 bottom-2 left-80 max-md:hidden"
              />
              <Image
                alt="arrow image"
                src={"/vector.svg"}
                width={250}
                height={250}
                className="absolute z-0 bottom-15 left-30 hidden max-md:block"
              />
              <h1 className="z-10 text-3xl font-bold mb-2">Our Collection</h1>
              <p className=" z-10 bg-text-color w-full max-md:w-full text-center">
                Introducing our Coffee Collection, a selection of unique coffees
                from different roast types and origins, expertly roasted in
                small batches and shipped fresh weekly.
              </p>
            </div>
          </section>
          <section className="flex gap-5 justify-center">
            <Button
              title="All Products"
              variant={filter === "all" ? "default" : "ghost"}
              onClick={() => setFilter("all")}
            >
              All Products
            </Button>
            <Button
              title="Available Now"
              variant={filter === "available" ? "default" : "ghost"}
              onClick={() => setFilter("available")}
            >
              Available Now
            </Button>
          </section>
          <section className="w-full max-md:w-full mx-auto">
            <main className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
              {filteredData.length > 0 ? (
                filteredData.map((item, index) => (
                  <Card key={index} content={item} />
                ))
              ) : (
                <h1 className="text-2xl font-bold">No coffees found</h1>
              )}
            </main>
          </section>
        </div>
      </main>
    </>
  );
}
