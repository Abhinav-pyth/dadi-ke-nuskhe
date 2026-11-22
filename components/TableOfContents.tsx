import { cn } from "@/lib/utils";

export function TableOfContents({
  items,
  label,
  className,
}: {
  items: { id: string; label: string }[];
  label: string;
  className?: string;
}) {
  if (items.length === 0) return null;
  return (
    <nav aria-labelledby="toc-heading" className={cn("", className)}>
      <p
        id="toc-heading"
        className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-soft"
      >
        {label}
      </p>
      <ol className="mt-3 space-y-2 border-l border-leaf-900/10 pl-4 text-sm">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="block py-0.5 leading-snug text-ink-muted transition-colors hover:text-leaf-800"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
