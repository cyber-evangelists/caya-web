import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function CarFilters() {
  return (
    <div className="flex-1 overflow-auto py-2">
      <form className="flex flex-col gap-y-3 items-start px-4 text-sm font-medium">
        <div className="w-full">
          <Label className="text-base" htmlFor="brand">
            Brand
          </Label>
          <Input id="brand" placeholder="Enter brand..." />
        </div>

        <div className="w-full">
          <Label className="text-base" htmlFor="type">
            Type
          </Label>
          <Input id="type" placeholder="Enter type..." />
        </div>

        <div className="w-full">
          <Label className="text-base" htmlFor="year">
            Year
          </Label>
          <Input id="year" placeholder="Enter year..." />
        </div>

        <div className="w-full">
          <Label className="text-base" htmlFor="price">
            Price per day
          </Label>
          <Input id="price" placeholder="Enter price..." />
        </div>

        <Button className="mt-4 w-full" size="sm">
          Apply Filters
        </Button>
      </form>
    </div>
  );
}
