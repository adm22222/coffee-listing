import { cardDataType } from "@/types/CardType";
import React from "react";
import Card from "./Card";

type coffeProps = {
  filteredData: cardDataType[];
};
const CoffeList: React.FC<coffeProps> = ({ filteredData }) => {
  return (
    <section className="w-full max-md:w-full mx-auto">
      <main className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => <Card key={index} content={item} />)
        ) : (
          <h1 className="text-2xl font-bold">No coffees found</h1>
        )}
      </main>
    </section>
  );
};

export default CoffeList;
