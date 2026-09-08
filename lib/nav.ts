import { DISCUSSIONS } from "@/lib/discussions";

export type NavChild = { href: string; label: string };
export type NavItem = {
  href: string;
  label: string;
  children?: NavChild[];
};

export const NAV: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/directory", label: "Directory" },
  {
    href: "/community",
    label: "Discussions",
    children: [
      ...DISCUSSIONS.slice(0, 6).map((d) => ({
        href: `/community/${d.slug}`,
        label: d.title
      })),
      { href: "/community", label: "All discussions →" }
    ]
  },
  { href: "/education", label: "Education" },
  {
    href: "/about",
    label: "About",
    children: [
      { href: "/about", label: "About & mission" },
      { href: "/reviews", label: "Reviews" },
      { href: "/disclaimer", label: "Disclaimer" }
    ]
  }
];

// Flat list for the footer.
export const FOOTER_LINKS: NavChild[] = [
  { href: "/", label: "Home" },
  { href: "/directory", label: "Directory" },
  { href: "/community", label: "Discussions" },
  { href: "/education", label: "Education" },
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
  { href: "/disclaimer", label: "Disclaimer" }
];
