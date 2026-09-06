"use client";

import React, { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { AlertCircle, RefreshCcw, Home } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("App Error Boundary caught:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#25231F] px-4 py-24 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="w-14 h-14 mx-auto rounded-full bg-red-950/40 border border-red-800/60 flex items-center justify-center text-red-300">
          <AlertCircle className="w-7 h-7" />
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl text-[#25231F] font-light">
          Something Went Wrong
        </h1>

        <p className="text-sm text-[#8A8175] font-light leading-relaxed">
          An unexpected error occurred while rendering this page. Our engineers have been alerted. Please try refreshing or return home.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            variant="primary"
            size="md"
            onClick={() => reset()}
            className="flex items-center gap-2"
          >
            <RefreshCcw className="w-4 h-4" />
            Try Again
          </Button>

          <Button
            variant="outline"
            size="md"
            href="/"
            className="flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            Return Home
          </Button>
        </div>
      </div>
    </div>
  );
}
