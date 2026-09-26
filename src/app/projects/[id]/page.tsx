import { projects } from "@/data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ProjectClient from "./ProjectClient";

/* ─── SEO ─── */
export async function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return {};

  const title =
    project.seoTitle ||
    `${project.name} — Project | Code Pe Charcha`;
  const description =
    project.seoDescription ||
    project.copy ||
    `Explore the ${project.name} project by Code Pe Charcha — see tech stack, features, and outcomes.`;
  const url = `https://codepecharcha.com/projects/${project.id}`;
  const image = project.image
    ? `https://codepecharcha.com${project.image}`
    : "https://codepecharcha.com/og-default.png";

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Code Pe Charcha",
      images: [{ url: image, width: 1200, height: 630, alt: project.name }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

/* ─── Page (server shell) ─── */
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) notFound();

  return <ProjectClient />;
}
