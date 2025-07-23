"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { getAllCoffees } from "@/services/coffeApi";
import { cardDataType } from "@/types/CardType";
import CoffeList from "./ui/CoffeList";
const ProductPanel = () => {
  const [data, setData] = useState<cardDataType[]>([]);
  const [filter, setFilter] = useState<"all" | "available">("all");
  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllCoffees();
      setData(res);
    };
    fetchData();
  }, []);
  const filteredData =
    filter === "available"
      ? data.filter((item) => item.available === true)
      : data;

  return (
    <main className="-mt-55 relative min-h-screen grid grid-cols-12 gap-4 p-10 max-md:p-5">
      <div className=" z-10 col-span-12 mt-10 md:col-start-2 md:col-span-10 bg-default p-10 max-md:p-5  overflow-hidden rounded-2xl text-white space-y-5">
        <section className="flex justify-between items-center flex-col mt-7 ">
          <div className="relative w-[50%] max-md:w-full flex justify-center flex-col gap-3 items-center">
            <Image
              alt="arrow image"
              src={"/vector.svg"}
              width={270}
              height={270}
              className="absolute z-0 bottom-2 left-58 max-md:hidden"
            />
            <Image
              alt="arrow image"
              src={"/vector.svg"}
              width={250}
              height={250}
              className="absolute z-0 bottom-15 left-30 hidden max-md:block"
            />
            <h1 className="z-10 text-3xl font-bold ">Our Collection</h1>
            <p className=" z-10 bg-text-color font-medium w-full max-md:w-full text-center">
              Introducing our Coffee Collection, a selection of unique coffees
              from different roast types and origins, expertly roasted in small
              batches and shipped fresh weekly.
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
        <CoffeList filteredData={filteredData} />
      </div>
    </main>
  );
};

export default ProductPanel;
