
"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import Container from "./container";
import { siteConfig } from "@/lib/site";

const find = (label: string) =>
  siteConfig.social.find((s) => s.label === label)?.href ?? "";

const first = (...labels: string[]) =>
  labels.map(find).find(Boolean) ?? "";

const ext = (href: string) =>
  href.startsWith("http")
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

export default function Contact() {
  const projectHref = first("WhatsApp", "Email");
  const roleHref = first("Email", "LinkedIn");
  const reach = siteConfig.social.filter((s) => s.href);

  const headingRef = useRef<HTMLHeadingElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const heading = headingRef.current;

    if (!heading || isVisible) return;

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(heading);

    return () => observer.disconnect();
  }, [isVisible]);

  const headline = "Have something to build?";
  const words = headline.split(" ");

  return (
    <section id="contact" className="pb-[clamp(3.5rem,8vw,7rem)]">
      <Container>
        <div className="rounded-[3px] bg-accent p-[clamp(2rem,7vw,7rem)] text-on-accent">
          <h2
            ref={headingRef}
            aria-label={headline}
            className={`contact-heading max-w-[12ch] font-serif text-[clamp(3rem,9vw,8rem)] leading-[0.92] tracking-[-0.03em] ${
              isVisible ? "is-visible" : ""
            }`}
          >
            <span aria-hidden="true">
              {words.map((word, wordIndex) => {
                const letterOffset = words
                  .slice(0, wordIndex)
                  .reduce((total, previousWord) => total + previousWord.length + 1, 0);

                return (
                  <Fragment key={wordIndex}>
                    <span className="contact-word">
                      {Array.from(word).map((character, index) => (
                        <span
                          key={index}
                          className="contact-letter"
                          style={{
                            animationDelay: `${(letterOffset + index) * 35}ms`,
                          }}
                        >
                          {character}
                        </span>
                      ))}
                    </span>
                    {wordIndex < words.length - 1 ? " " : null}
                  </Fragment>
                );
              })}
            </span>
          </h2>

          <p className="mt-6 max-w-[48ch] opacity-90">
            Whether it’s a store, a web app or a role on your team, tell me
            what you have in mind.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            {projectHref && (
              <a
                href={projectHref}
                {...ext(projectHref)}
                className="rounded-sm border border-on-accent bg-on-accent px-6 py-3 text-[0.95rem] font-medium text-accent transition-colors duration-200 hover:bg-transparent hover:text-on-accent motion-reduce:transition-none"
              >
                Start a project
              </a>
            )}

            {roleHref && (
              <a
                href={roleHref}
                {...ext(roleHref)}
                className="rounded-sm border border-on-accent px-6 py-3 text-[0.95rem] font-medium text-on-accent transition-colors duration-200 hover:bg-on-accent hover:text-accent motion-reduce:transition-none"
              >
                Talk about a role
              </a>
            )}
          </div>

          {reach.length > 0 && (
            <ul className="mt-11 flex flex-wrap gap-x-7 gap-y-2 border-t border-on-accent/35 pt-5 text-[0.95rem]">
              {reach.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    {...ext(s.href)}
                    className="underline-offset-4 transition-colors duration-200 hover:underline hover:text-paper-2 motion-reduce:transition-none"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Container>
    </section>
  );
}
