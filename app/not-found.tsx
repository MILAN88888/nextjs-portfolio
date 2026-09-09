import { Button } from "@/components/ui";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-content flex-col items-center justify-center px-5 py-20 text-center md:px-8">
      <p className="font-mono text-label uppercase tracking-[0.22em] text-ink-faint">
        Error 404
      </p>
      <h1 className="mt-4 text-display-3 font-semibold text-ink">
        This page doesn&apos;t exist
      </h1>
      <p className="mt-4 max-w-md text-body text-ink-muted">
        The link may be out of date. Everything now lives on one page.
      </p>
      <Button href="/" className="mt-8">
        Back to the start
      </Button>
    </div>
  );
}
