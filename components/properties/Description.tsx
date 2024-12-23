"use client";
import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Title from "./Title";

export default function Description({ description }: { description: string }) {
  const [isFullDescriptionShwon, setIsFullDescriptionShwon] = useState(false);

  const words = description.split(" ");
  const isLongDescription = words.length > 100;

  const toggleDescription = () => {
    setIsFullDescriptionShwon(!isFullDescriptionShwon);
  };

  const displayedDescription =
    isLongDescription && !isFullDescriptionShwon
      ? words.splice(0, 100).join(" ") + "..."
      : description;

  return (
    <article className="mt-4">
      <Title text="Description" />
      <p className="text-muted-foreground font-light leading-loose">
        {displayedDescription}
      </p>
      {isLongDescription && (
        <Button variant="link" className="pl-0" onClick={toggleDescription}>
          {isFullDescriptionShwon ? "Show less" : "Show more"}
        </Button>
      )}
    </article>
  );
}
