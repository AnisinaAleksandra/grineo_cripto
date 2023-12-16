import { lazy } from "react";

export const ChooseCardPageAsync = lazy(
  async () => await import("./ChooseCardPage")
);
