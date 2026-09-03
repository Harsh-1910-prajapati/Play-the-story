import React from "react";
import { Button } from "@/components/ui/Button";
import { Sparkles, ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#080808] px-4 py-24 text-center">
      <div className="max-w-xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c5a880]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Page Not Found</span>
        </div>

        <h1 className="font-serif text-6xl sm:text-8xl text-[#fbf9f5] font-light tracking-tight">
          404
        </h1>

        <div className="w-12 h-[1px] bg-[#c5a880] mx-auto" />

        <h2 className="font-serif text-2xl sm:text-3xl text-[#fbf9f5] font-light">
          This Chapter Cannot Be Found
        </h2>

        <p className="text-sm text-[#a6a095] font-light leading-relaxed max-w-md mx-auto">
          The wedding story, film, or page you are seeking might have been renamed or moved into our private archives.
        </p>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/" variant="primary" size="md">
            <span className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Return to Homepage
            </span>
          </Button>
          <Button href="/stories" variant="outline" size="md">
            <span className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#c5a880]" />
              Browse Wedding Stories
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
