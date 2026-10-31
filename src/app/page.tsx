const swatches = [
  { name: "paper", className: "bg-paper" },
  { name: "paper-2", className: "bg-paper-2" },
  { name: "ink", className: "bg-ink" },
  { name: "mute", className: "bg-mute" },
  { name: "line", className: "bg-line" },
  { name: "accent", className: "bg-accent" },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="font-serif text-7xl leading-[0.95] tracking-tight sm:text-9xl">
        Software with taste.
      </h1>
      <p className="mt-6 text-lg text-mute">
        Built to work. Made with intention.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="#"
          className="rounded-sm bg-accent px-6 py-3 font-medium text-on-accent"
        >
          See my work
        </a>
        <a
          href="#"
          className="rounded-sm border border-accent px-6 py-3 font-medium text-accent"
        >
          Work with me
        </a>
      </div>

      <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-6">
        {swatches.map((s) => (
          <div key={s.name}>
            <div className={`h-20 rounded-sm border border-line ${s.className}`} />
            <p className="mt-2 text-sm text-mute">{s.name}</p>
          </div>
        ))}
      </div>

      <p className="mt-16 max-w-prose">
        Select this text to check the highlight colour. Press Tab to check the
        focus ring, and scroll the page to check the scrollbar.
      </p>

      <div className="h-[150vh]" />
    </main>
  );
}