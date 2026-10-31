
import type { Project } from "@/lib/projects";

type Props = {
  project: Project;
  tone?: "light" | "dark";
  layout?: "wide" | "stacked";
  size?: "lg" | "md";
};

export default function ProjectDetails({
  project,
  tone = "light",
  layout = "wide",
  size,
}: Props) {
  const dark = tone === "dark";
  const big = (size ?? (layout === "wide" ? "lg" : "md")) === "lg";
  const titleSize = big
    ? "text-[clamp(2.2rem,4.5vw,3.6rem)]"
    : "text-[clamp(2rem,3.6vw,3rem)]";
  const muted = dark ? "text-[#a99f91]" : "text-mute";
  const rule = dark ? "border-[#38302a]" : "border-line";
  const linkClass = `font-medium underline decoration-[1.5px] underline-offset-[5px] transition-colors duration-200 motion-reduce:transition-none ${
    dark
      ? "text-[#efe8dc] decoration-[#d9959a] hover:text-[#d9959a]"
      : "decoration-accent hover:text-accent"
  }`;
  const links = project.links.filter((l) => l.href);

  return (
    <div
      className={
        layout === "wide"
          ? "grid gap-5 md:grid-cols-[1fr_1.15fr] md:gap-[clamp(1.25rem,4vw,4rem)]"
          : "grid gap-5"
      }
    >
      <div>
        <h3 className={`font-serif leading-none tracking-[-0.015em] ${titleSize}`}>
          {project.name}
        </h3>
        <p className={`mt-2 text-[0.92rem] ${muted}`}>{project.kind}</p>
      </div>

      <div>
        <p className="max-w-[48ch] text-[1.1rem]">{project.description}</p>
        <p className={`mt-3 max-w-[52ch] ${muted}`}>{project.built}</p>
        <p className={`mt-4 border-t pt-3.5 text-sm ${muted} ${rule}`}>
          {project.stack.join(", ")}
        </p>
        {links.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className={linkClass}
                {...(l.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
