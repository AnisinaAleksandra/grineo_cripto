import { lazy } from "react";

export const UsefulAdvantagesAsync = lazy(
  async () => await import("./UsefulAdvantages")
);
