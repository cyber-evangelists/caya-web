import React from "react";
import CarFilters from "./CarFilters";

export default function Sidebar() {
  return (
    <div className="flex flex-col min-h-screen p-2">
      <div className="flex h-full max-h-screen flex-col gap-2 pt-2">
        <div className="border-b px-4 text-2xl font-semibold">Filters</div>
        <CarFilters />
      </div>
    </div>
  );
}
