
import Container from "./container";

const stack = ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Shopify"];

const headlineLines = ["Software", "with taste."];

export default function Hero() {
  let letterIndex = 0;

  return (
    <section className="pb-[clamp(3.5rem,8vw,7rem)] pt-[clamp(4.5rem,12vw,10.5rem)]">
      <Container>
        <h1
          aria-label="Software with taste."
          className="font-serif text-[clamp(3.6rem,12.5vw,11.5rem)] leading-[0.9] tracking-[-0.035em]"
        >
          {headlineLines.map((line, lineIndex) => (
            <span
              key={line}
              aria-hidden="true"
              className="block"
            >
              {Array.from(line).map((letter, index) => {
                const delay = letterIndex * 45;
                letterIndex += 1;

                return (
                  <span
                    key={`${lineIndex}-${index}`}
                    className="writing-letter inline-block"
                    style={{ animationDelay: `${delay}ms` }}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </span>
                );
              })}
            </span>
          ))}
        </h1>

        <div className="mt-[clamp(1.75rem,4vw,3.25rem)] grid items-end gap-8 md:grid-cols-2">
          <div>
            <p className="text-[clamp(1.2rem,2vw,1.6rem)] font-medium leading-snug">
              Built to work. Made with intention.
            </p>
            <p className="mt-3 max-w-[46ch] text-mute">
              I’m Vivian, a software developer building ecommerce experiences
              and web applications for brands and teams.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-4 md:justify-end">
            <a
              href="#work"
              className="rounded-sm border border-accent bg-accent px-6 py-3 text-[0.95rem] font-medium text-on-accent transition-colors hover:bg-transparent hover:text-accent"
            >
              See my work
            </a>
            <a
              href="#contact"
              className="font-medium underline decoration-accent decoration-[1.5px] underline-offset-[5px]"
            >
              Work with me
            </a>
          </div>
        </div>

        <p className="mt-[clamp(3.5rem,8vw,7rem)] border-t border-line pt-4 text-sm text-mute">
          {stack.join(", ")}
        </p>
      </Container>
    </section>
  );
}
