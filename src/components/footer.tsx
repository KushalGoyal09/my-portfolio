export function Footer() {
  return (
    <footer className="relative py-8 px-6">
      <div className="section-line mb-8" />
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="font-mono text-xs text-muted">
          <span className="text-gradient font-semibold">{">"}</span> designed &
          built by kushal
        </div>
        <div className="font-mono text-xs text-muted">
          built with next.js & tailwind css
        </div>
      </div>
    </footer>
  );
}
