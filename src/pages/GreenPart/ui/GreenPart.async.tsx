import { lazy } from "react";

export const GreenPartAsync = lazy(async () => await import("./GreenPart"));
