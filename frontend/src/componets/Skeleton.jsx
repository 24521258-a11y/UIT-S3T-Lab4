
export default function Skeleton() {
  return (
    <div
      className="skeleton-card"
      role="status"
      aria-busy="true"
      aria-live="polite"
    >
      <div className="skeleton-title"></div>
      <div className="skeleton-line"></div>
      <div className="skeleton-line short"></div>

      <span className="sr-only">
        Loading person details...
      </span>
    </div>
  );
}
