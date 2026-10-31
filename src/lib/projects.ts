export type ProjectLink = { label: string; href: string };

export type Project = {
  name: string;
  kind: string;
  description: string;
  built: string;
  stack: string[];
  links: ProjectLink[]; // links with an empty href are hidden
};

export const projects = {
 
  logiflow: {
    name: "LogiFlow",
    kind: "Web application",
    description:
      "Shipment tracking, dispatch and proof of delivery for a logistics team.",
    built:
      "Admin, dispatcher and driver roles, a full shipment lifecycle, a public tracking page, and access rules enforced in the database, not just hidden in the interface.",
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"],
    links: [
      { label: "View live app", href: "https://logiflow-orcin.vercel.app/" },
      {
        label: "Code on GitHub",
        href: "https://github.com/Vivianclare-codes/logiflow",
      },
    ],
  },
  omaskraft: {
    name: "OmasKraft",
    kind: "Volunteer project, handmade footwear brand",
    description:
      "A site and admin for a brand that makes every pair to order.",
    built:
      "A custom order form with reference photo uploads and a WhatsApp handoff, a past-work gallery, and a private dashboard so the owner manages everything herself.",
    stack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    links: [{ label: "View live site", href: "https://omaskraft.vercel.app" }],
  },
  benzo: {
    name: "Benzo Generics",
    kind: "Volunteer project, family pharmacy",
    description:
      "A digital front desk for a retail and wholesale pharmacy in Port Harcourt.",
    built:
      "Product and wholesale pages, directions, and WhatsApp-first enquiries, designed around how the business already works.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    links: [
      { label: "View live site", href: "https://benzogenerics.vercel.app" },
    ],
  },
  amara: {
    name: "Amara & Co.",
    kind: "Concept project, Shopify",
    description: "A quiet-luxury jewellery storefront.",
    built:
      "A custom Shopify theme built from scratch, with its own layout, sections and styling system. store-password-required to view the live site: crazy.",
    stack: ["Shopify", "Liquid", "CSS"],
    links: [{ label: "Watch the walkthrough", href: "https://amara-co-xkd9y8gn.myshopify.com" }],
  },
} satisfies Record<string, Project>;