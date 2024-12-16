import Link from "next/link";
import { LuTent } from "react-icons/lu";
import { Button } from "../ui/button";

import React from "react";

export default function Logo() {
  return (
    <Button size="icon" asChild>
      <Link href="/">
        <LuTent className="w-6 h-6" />
      </Link>
    </Button>
  );
}
