import React from "react";
import { ErrorComponent } from "./ErrorFallback";

export const Error = () => {
  return <ErrorComponent error="Page doesn't exist..." />;
};
