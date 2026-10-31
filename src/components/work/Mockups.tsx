import Image from "next/image";
import type { ReactNode } from "react";

export function Panel({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-[3px] bg-paper-2 p-[clamp(1.25rem,5vw,4.5rem)]">
      {children}
    </div>
  );
}

function BrowserFrame({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-md bg-white shadow-[0_30px_60px_-30px_rgba(40,25,20,0.45)]">
      <div aria-hidden="true" className="flex gap-1.5 bg-[#ece8e1] px-3.5 py-2.5">
        {[0, 1, 2].map((i) => (
          <span key={i} className="h-[9px] w-[9px] rounded-full bg-[#c9c2b6]" />
        ))}
      </div>
      {children}
    </div>
  );
}

type ShotProps = { src: string; alt: string; priority?: boolean };

export function BrowserShot({ src, alt, priority = false }: ShotProps) {
  return (
    <BrowserFrame>
      <div className="relative aspect-[16/10] bg-[#ece8e1]">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 768px) 1100px, 100vw"
          className="object-cover object-top"
        />
      </div>
    </BrowserFrame>
  );
}

export function DashShot({ src, alt }: ShotProps) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-md border border-[#38302a] bg-[#14110f]">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 768px) 58vw, 100vw"
        className="object-cover object-top"
      />
    </div>
  );
}

export function PhoneShot({ src, alt }: ShotProps) {
  return (
    <div className="flex justify-center">
      <div className="relative aspect-[9/19.5] w-[min(240px,70%)] overflow-hidden rounded-[28px] border-[7px] border-[#0c1426] bg-[#14213d] shadow-[0_30px_50px_-28px_rgba(10,15,30,0.7)]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="240px"
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}

export function ArtShot({ src, alt }: ShotProps) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-[3px] bg-paper-2">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 768px) 40vw, 100vw"
        className="object-cover object-top"
      />
    </div>
  );
}