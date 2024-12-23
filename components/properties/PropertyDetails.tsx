import React from "react";
import { formatQuantity } from "@/utils/format";

type PropertyDetailProps = {
  details: {
    bedrooms: number;
    baths: number;
    guests: number;
    beds: number;
  };
};

export default function PropertyDetails({
  details: { bedrooms, baths, guests, beds },
}: PropertyDetailProps) {
  return (
    <p className="text-md font-light">
      <span>{formatQuantity(bedrooms, "bedroom")} &middot;</span>
      <span>{formatQuantity(baths, "bath")} &middot;</span>
      <span>{formatQuantity(guests, "guests")} &middot;</span>
      <span>{formatQuantity(beds, "bed")}</span>
    </p>
  );
}
