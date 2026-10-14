import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="section-pad mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-center py-32">
      <p className="text-xs uppercase tracking-[0.24em] text-muted">404</p>
      <h1 className="font-display mt-4 text-5xl font-semibold tracking-tight md:text-7xl">
        Off the map.
      </h1>
      <p className="mt-4 max-w-md text-muted">
        That page doesn’t exist. Head home or jump into the work.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Button href="/" variant="primary">
          Home
        </Button>
        <Button href="/work" variant="secondary">
          Work
        </Button>
      </div>
      <Link href="/contact" className="mt-8 text-sm text-muted hover:text-foreground">
        Or say hello →
      </Link>
    </section>
  );
}
