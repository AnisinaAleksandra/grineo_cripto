import { lazy } from "react";

export const StableAndSecureAsync = lazy(
  async () => await import("./StableAndSecure")
);
