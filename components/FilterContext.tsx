"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import type { FilterKey } from "@/data/cards";

interface FilterContextValue {
  active: FilterKey;
  setActive: (key: FilterKey) => void;
}

const FilterContext = createContext<FilterContextValue | null>(null);

export function FilterProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<FilterKey>("all");
  return <FilterContext.Provider value={{ active, setActive }}>{children}</FilterContext.Provider>;
}

export function useFilter() {
  const ctx = useContext(FilterContext);
  if (!ctx) throw new Error("useFilter must be used within a FilterProvider");
  return ctx;
}
