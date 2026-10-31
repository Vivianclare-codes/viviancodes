
import Container from "./container";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  const links = siteConfig.social.filter((s) => s.href);

  return (
    <footer className="border-t border-line py-10 text-sm text-mute">
      <Container className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
        <div>
          <p className="font-serif text-2xl text-ink transition-colors duration-200 hover:text-accent motion-reduce:transition-none">
            {siteConfig.name}
          </p>
          <p>{siteConfig.role}</p>
        </div>

        <div className="flex flex-col gap-4 sm:items-end">
          {links.length > 0 && (
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {links.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="transition-colors duration-200 hover:text-accent motion-reduce:transition-none"
                    {...(s.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
          <p>Building thoughtful things for the web.</p>
        </div>
      </Container>
    </footer>
  );
}
