export function Skeleton({ className = "h-64 w-full" }: { className?: string }) {
  return <div className={`skeleton ${className}`} />;
}
