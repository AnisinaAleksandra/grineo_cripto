import { lazy } from "react";

export const HowToUsePartAsync = lazy(
  async () => await import("./HowToUsePart")
);
