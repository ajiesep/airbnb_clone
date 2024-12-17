import { findCountryByCode } from "@/utils/countries";
import React from "react";

export default function CountryFlagAndName({
  countryCode,
}: {
  countryCode: string;
}) {
  const validCountry = findCountryByCode(countryCode)!;

  const countryName =
    validCountry.name.length > 20
      ? `${validCountry.name.substring(0, 20)}...`
      : validCountry.name;
  return (
    <span className="flex justiry-between items-center gap-2 text-sm">
      {validCountry.flag} {countryName}
    </span>
  );
}