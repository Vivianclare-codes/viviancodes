import Container from "./container";

const principles = [
  {
    title: "Start from the real workflow",
    text: "I learn how the business actually runs before I design a single screen.",
  },
  {
    title: "Rules live in the data",
    text: "Permissions and business rules are enforced in the database, not only in the interface.",
  },
  {
    title: "Mobile first",
    text: "Most customers arrive on a phone, so that is where I design and test first.",
  },
  {
    title: "Easy to hand over",
    text: "Owners can update products, content and orders themselves, without touching code.",
  },
];

export default function HowIBuild() {
  return (
    <section id="how" className="pb-[clamp(4.5rem,9vw,8rem)]">
      <Container>
        <div className="mb-[clamp(2.25rem,5vw,4.5rem)] grid items-end gap-8 md:grid-cols-2">
          <h2 className="font-serif text-[clamp(2.6rem,6vw,5rem)] leading-none tracking-[-0.015em]">
            How I build
          </h2>
          <p className="max-w-[42ch] text-mute md:justify-self-end">
            What shows up in every project, whatever the stack.
          </p>
        </div>

        <div className="grid gap-[clamp(1.25rem,3vw,2.5rem)] sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p) => (
            <div key={p.title} className="border-t border-ink pt-4">
              <h3 className="font-sans text-[1.05rem] font-semibold leading-snug">
                {p.title}
              </h3>
              <p className="mt-2.5 text-[0.98rem] text-mute">{p.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}