import Link from "next/link";
import { Scan } from "lucide-react";
export function Brand() {
  return (
    <Link href="/#home" className="brand" aria-label="Jack, home">
      <Scan strokeWidth={2.8} aria-hidden="true" />
      <span>
        JACK<span className="brand-dot">.</span>
      </span>
    </Link>
  );
}
