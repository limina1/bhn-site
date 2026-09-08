import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Directory"
};

export default function ExploreRedirectPage() {
  redirect("/directory");
}

