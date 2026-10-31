import Container from "@/components/container";

const sections = ["work", "about", "contact"];

export default function Home() {
  return (
    <>
      {sections.map((id) => (
        <section key={id} id={id} className="border-b border-line py-24">
          <Container>
            <h2 className="font-serif text-6xl capitalize">{id}</h2>
            <p className="mt-4 text-mute">
              Placeholder. The real {id} section arrives in a later phase.
            </p>
            <div className="h-[60vh]" />
          </Container>
        </section>
      ))}
    </>
  );
}