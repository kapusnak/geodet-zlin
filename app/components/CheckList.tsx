export default function CheckList({
  items,
  marker = "check",
  className = "",
}: {
  items: string[];
  marker?: "check" | "dot";
  className?: string;
}) {
  return (
    <ul className={`space-y-3 ${className}`.trim()}>
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 text-base leading-relaxed sm:text-lg"
        >
          {marker === "dot" ? (
            <span
              className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
              aria-hidden="true"
            />
          ) : (
            <svg
              viewBox="0 0 24 24"
              className="mt-1 h-5 w-5 shrink-0 text-accent"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
          )}
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
