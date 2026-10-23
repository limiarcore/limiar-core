import type { Project } from "@/components/ProjectRows";
import type { Localized } from "@/lib/i18n";

// Source shape: translatable prose carries both languages.
export type ClientSource = Omit<Project, "blurb" | "category" | "details"> & {
  blurb: Localized;
  category: Localized;
  details: Localized;
};

// ── Edit client details here ───────────────────────────────
// Shared by the Clients page (table + case-study modal) and the
// "Trusted by" strip on the landing page.
//
// name:     client / company name.
// blurb:    one-line summary (per language) of what we did for them.
// category: their industry or sector (per language).
// year:     "since" — when the engagement started.
// status:   "ACTIVE" | "ONGOING" | "DELIVERED" (use "LIVE" to tint it green).
// icon:     logo in /public (e.g. "/clients/acme.png"), or "" for a monogram.
// url:      their site — renders a "Visit" button; "" renders "Soon".
// images:   screenshots for the case-study modal carousel.
// details:  longer case-study text (per language); falls back to blurb.
export const clients: ClientSource[] = [];
