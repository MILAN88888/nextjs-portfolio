/** Skeleton shown while a route segment streams in. */
export default function Loading() {
  return (
    <div className="mx-auto max-w-content px-5 py-20 md:px-8" role="status" aria-label="Loading">
      <div className="space-y-4">
        <div className="h-3 w-24 animate-pulse rounded-sm bg-surface" />
        <div className="h-12 w-3/4 animate-pulse rounded bg-surface" />
        <div className="h-12 w-1/2 animate-pulse rounded bg-surface" />
      </div>
      <div className="mt-10 h-40 animate-pulse rounded-lg bg-surface" />
    </div>
  );
}
