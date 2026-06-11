export default function SectionHeading({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <h2
      id={id}
      className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
    >
      {children}
      <span className="mt-3 block h-1 w-16 rounded bg-accent" aria-hidden="true" />
    </h2>
  );
}
