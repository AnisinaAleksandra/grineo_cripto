import { lazy } from "react";

export const ReferralProgramAsync = lazy(
  async () => await import("./ReferralProgram")
);
