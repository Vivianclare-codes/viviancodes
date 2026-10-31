import Container from "../container";
import ProjectDetails from "./ProjectDetails";
import { BrowserShot, DashShot, Panel } from "./Mockups";
import { projects } from "@/lib/projects";

export default function WorkSection() {
  return (
    <section id="work">
      {/* Heading + lead project */}
      <Container className="pt-[clamp(3.5rem,8vw,7.5rem)]">
        <div className="mb-[clamp(2.25rem,5vw,4.5rem)] grid items-end gap-8 md:grid-cols-2">
          <h2 className="font-serif text-[clamp(2.6rem,6vw,5rem)] leading-none tracking-[-0.015em]">
            Selected work
          </h2>
          <p className="max-w-[42ch] text-mute md:justify-self-end">
            Real businesses, real workflows. Here is what I built on each one.
          </p>
        </div>

        <article className="mb-[clamp(4.5rem,10vw,9.5rem)]">
          <Panel>
            <BrowserShot
              src="/projects/omaskraft.png"
              alt="The OmasKraft homepage, a site for a handmade footwear brand."
            />
          </Panel>
          <div className="pt-6">
            <ProjectDetails project={projects.omaskraft} layout="wide" />
          </div>
        </article>
      </Container>

      {/* Dark full-width band */}
      <div className="mb-[clamp(4.5rem,10vw,9.5rem)] bg-[#1e1a17] py-[clamp(1.75rem,6vw,6rem)] text-[#efe8dc]">
        <Container className="grid items-center gap-[clamp(1.75rem,5vw,5rem)] md:grid-cols-[5fr_7fr]">
          <ProjectDetails
            project={projects.logiflow}
            tone="dark"
            layout="stacked"
            size="lg"
          />
          <DashShot
            src="/projects/logiflow.png"
            alt="The LogiFlow dashboard showing shipments and their delivery statuses."
          />
        </Container>
      </div>

      {/* Offset pair */}
      <Container className="pb-[clamp(4.5rem,9vw,8rem)]">
        <div className="grid items-start gap-[clamp(1.5rem,5vw,4.5rem)] md:grid-cols-[7fr_5fr]">
          <article>
            <Panel>
              <BrowserShot
                src="/projects/benzo.png"
                alt="The Benzo Generics Pharmacy homepage in blue and white."
              />
            </Panel>
            <div className="pt-6">
              <ProjectDetails project={projects.benzo} layout="stacked" />
            </div>
          </article>

          <article className="md:mt-[clamp(3rem,9vw,8.75rem)]">
            <Panel>
              <BrowserShot
                src="/projects/amara.png"
                alt="The Amara & Co. jewellery storefront, built as a custom Shopify theme."
              />
            </Panel>
            <div className="pt-6">
              <ProjectDetails project={projects.amara} layout="stacked" />
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}