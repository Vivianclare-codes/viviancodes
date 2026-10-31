import Container from "./container";

export default function About() {
  return (
    <section id="about" className="pb-[clamp(4.5rem,9vw,8rem)]">
      <Container className="grid gap-[clamp(1.5rem,5vw,5rem)] border-t border-line pt-[clamp(3rem,7vw,6rem)] md:grid-cols-[5fr_7fr]">
        <h2 className="font-serif text-[clamp(2.4rem,5vw,4rem)] leading-none tracking-[-0.015em]">
          Hi, I’m Vivian.
        </h2>
        <div>
          <p className="max-w-[34ch] text-[1.25rem] leading-[1.55]">
            I’m a software developer in Port Harcourt. I build ecommerce sites
            and web apps for people who care how things look and how they work.
          </p>
          <p className="mt-4 max-w-[46ch] text-[1.05rem] text-mute">
            I like understanding a business well enough to build the right
            thing, and finishing the small details most people skip.
          </p>
        </div>
      </Container>
    </section>
  );
}