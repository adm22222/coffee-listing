import { cardDataType } from "@/types/CardType";
import Image from "next/image";
import React from "react";

type cardProps = {
  content: cardDataType;
};
const Card: React.FC<cardProps> = ({ content }) => {
  return (
    <article className="w-full cursor-pointer space-y-4 p-3 hover:transform hover:scale-105">
      <div className="relative w-full aspect-[16/9]">
        <Image
          src={content.image || ""}
          alt={`${content.name} image`}
          fill
          className="object-cover z-0 rounded-xl"
        />
        {content.popular && (
          <div className="absolute z-50 top-2 left-2 font-medium text-small text-background max-md:text-small px-3 py-1 max-md:px-2 max-md:py-1 rounded-full bg-popular">
            popular
          </div>
        )}
      </div>
      <section className="flex justify-between items-center">
        <h2>{content.name}</h2>
        <span className="bg-price font-bold text-price-size px-2 rounded-sm text-background">
          {content.price}
        </span>
      </section>
      <section className="flex justify-between items-center">
        <div className="flex gap-2">
          {content.rating > 0 ? (
            <Image
              alt="star"
              src="/Star_fill.svg"
              width={20}
              height={20}
              className="object-cover"
            />
          ) : (
            <Image
              alt="star"
              src="/Star.svg"
              width={20}
              height={20}
              className="object-cover"
            />
          )}
          <h4 className="font-medium text-foreground">
            {Number.isInteger(content.rating)
              ? content.rating.toFixed(1)
              : content.rating}{" "}
            <span className="text-[#4D5562] font-light ">
              {content.votes > 0 ? `(${content.votes} votes)` : `No ratings`}
            </span>
          </h4>
        </div>
        {content.available === false && (
          <h3 className="text-warning text-label font-medium">Sold Out</h3>
        )}
      </section>
    </article>
  );
};

export default Card;
