
"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import Container from "./container";
import { siteConfig } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setOpen(false), []);
  const closeAndReturn = useCallback(() => {
    setOpen(false);
    menuButtonRef.current?.focus();
  }, []);

  // Header line appears after scrolling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // While the drawer is open: Esc closes it, page scroll is locked, focus moves inside
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeAndReturn();
    };
    window.addEventListener("keydown", onKey);
    const previous = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = previous;
    };
  }, [open, closeAndReturn]);

  // If the window grows to desktop size, close the drawer
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => {
      if (mq.matches) setOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const socials = siteConfig.social.filter((s) => s.href);

  return (
    <>
      <header
        className={`sticky top-0 z-40 border-b bg-paper/90 backdrop-blur transition-colors motion-reduce:transition-none ${
          scrolled ? "border-line" : "border-transparent"
        }`}
      >
        <Container className="flex h-[68px] items-center justify-between">
          <Link
            href="/"
            className="font-serif text-[1.45rem] leading-none transition-colors duration-200 hover:text-accent motion-reduce:transition-none"
          >
            {siteConfig.name}
          </Link>

          <nav aria-label="Main" className="hidden md:block">
            <ul className="flex gap-8 text-[0.95rem] text-mute">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors duration-200 hover:text-accent motion-reduce:transition-none"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/#contact"
              className="hidden rounded-sm border border-accent px-4 py-2 text-sm font-medium text-accent transition-colors duration-200 hover:bg-accent hover:text-on-accent motion-reduce:transition-none sm:inline-block"
            >
              Work with me
            </Link>

            <button
              ref={menuButtonRef}
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(true)}
              className="-mr-2 flex h-11 w-11 items-center justify-center transition-colors hover:text-accent motion-reduce:transition-none md:hidden"
            >
              <span aria-hidden="true" className="flex w-6 flex-col gap-[6px]">
                <span className="h-[1.5px] w-full bg-ink" />
                <span className="h-[1.5px] w-full bg-ink" />
                <span className="h-[1.5px] w-full bg-ink" />
              </span>
            </button>
          </div>
        </Container>
      </header>

      {/* Drawer sits outside <header>: the header's blur would otherwise trap fixed positioning */}
      <div
        aria-hidden="true"
        onClick={closeAndReturn}
        className={`fixed inset-0 z-50 bg-ink/40 transition-opacity duration-300 motion-reduce:transition-none md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        inert={!open}
        className={`fixed inset-y-0 right-0 z-[60] flex w-[min(88vw,380px)] flex-col border-l border-line bg-paper px-6 pb-[max(2rem,env(safe-area-inset-bottom))] pt-[max(1.25rem,env(safe-area-inset-top))] shadow-2xl transition-transform duration-300 ease-out motion-reduce:transition-none md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-11 items-center justify-between">
          <span className="font-serif text-xl">{siteConfig.name}</span>
          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Close menu"
            onClick={closeAndReturn}
            className="-mr-2 flex h-11 w-11 items-center justify-center transition-colors hover:text-accent motion-reduce:transition-none"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              <path d="M4 4l14 14M18 4L4 18" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </div>

        <nav aria-label="Mobile" className="mt-10">
          <ul className="flex flex-col gap-4 font-serif text-4xl">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={close}
                  className="transition-colors duration-200 hover:text-accent motion-reduce:transition-none"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="/#contact"
          onClick={close}
          className="mt-10 inline-block self-start rounded-sm bg-accent px-6 py-3 text-sm font-medium text-on-accent transition-colors duration-200 hover:bg-paper-2 hover:text-ink motion-reduce:transition-none"
        >
          Work with me
        </Link>

        {socials.length > 0 && (
          <ul className="mt-auto flex flex-wrap gap-x-5 gap-y-2 border-t border-line pt-5 text-sm text-mute">
            {socials.map((s) => (
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
      </aside>
    </>
  );
}
