import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

export default function Rating({ rating }: { rating: number }) {
  // rating = 2
  // 1 <= 2 = true
  // 2 <= 2 = true
  // 3 <= 2 = false
  const starts = Array.from({ length: 5 }, (_, i) => i + 1 <= rating);
  return (
    <div className="flex items-center gap-x-1">
      {starts.map((isFilled, i) => {
        const className = `w-3 h-3 ${
          isFilled ? "text-primary" : "text-gray-400"
        }`;
        return isFilled ? (
          <FaStar className={className} key={i} />
        ) : (
          <FaRegStar className={className} key={i} />
        );
      })}
    </div>
  );
}