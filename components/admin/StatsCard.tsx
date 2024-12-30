import React from "react";
import { Card, CardHeader } from "@/components/ui/card";

type StatsCardProps = {
  title: string;
  value: number;
};

export default function StatsCard({ title, value }: StatsCardProps) {
  return (
    <Card className="bg-muted">
      <CardHeader className="flex flex-row justify-between items-center">
        <h3 className="capitalize text-3xl font-bold">{title}</h3>
        <span className="text-primary text-5xl font-extrabold">{value}</span>
      </CardHeader>
    </Card>
  );
}