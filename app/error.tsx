"use client";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-content flex-col items-center justify-center px-5 py-20 text-center md:px-8">
      <p className="font-mono text-xs uppercase tracking-[0.22em] text-ink-faint">
        Something broke
      </p>
      <h1 className="mt-4 text-display-3 font-semibold text-ink">
        Unexpected error
      </h1>
      <p className="mt-4 max-w-md text-ink-muted">
        Sorry about that. Trying again usually clears it.
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-8 inline-flex items-center gap-2 rounded border border-transparent bg-accent px-4 py-2.5 text-sm font-medium text-accent-fg transition-all duration-200 hover:brightness-110"
      >
        Try again
      </button>
    </div>
  );
}
