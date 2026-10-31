import Container from "@/components/container";
import Hero from "@/components/Hero";
import WorkSection from "@/components/work/WorkSection";

const placeholders = ["about", "contact"];

export default function Home() {
  return (
    <>
      <Hero />
      <WorkSection />
      {placeholders.map((id) => (
        <section key={id} id={id} className="border-t border-line py-24">
          <Container>
            <h2 className="font-serif text-6xl capitalize">{id}</h2>
            <p className="mt-4 text-mute">
              Placeholder. The real {id} section arrives in a later phase.
            </p>
            <div className="h-[40vh]" />
          </Container>
        </section>
      ))}
    </>
  );
}