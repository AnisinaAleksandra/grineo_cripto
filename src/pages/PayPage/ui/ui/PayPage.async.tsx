import { lazy } from "react";

export const PayPageAsync = lazy(async () => await import("./PayPage"));
