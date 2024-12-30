import ChartsContainer from "@/components/admin/ChartsContainer";
import {
  ChartLoadingContainer,
  StatsLoadingContainer,
} from "@/components/admin/Loading";
import StatsContainer from "@/components/admin/StatsContainer";
import { Suspense } from "react";

export default function AdminPage() {
  return (
    <>
      <Suspense fallback={<StatsLoadingContainer />}>
        <StatsContainer />
      </Suspense>
      <Suspense fallback={<ChartLoadingContainer />}>
        <ChartsContainer />
      </Suspense>
    </>
  );
}
