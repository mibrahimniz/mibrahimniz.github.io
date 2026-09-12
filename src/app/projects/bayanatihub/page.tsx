import { ProjectCaseStudy } from "@/components/projects/project-case-study";
import { projects } from "@/lib/projects";

const project = projects.find(
  (project) => project.slug === "bayanatihub",
);

export const metadata = {
  title: "BayanatiHub | Muhammad Ibrahim Nizamani",
  description:
    "BayanatiHub enterprise data governance, metadata, lineage, and collaboration platform.",
};

export default function BayanatiHubPage() {
  if (!project) {
    return null;
  }

  return <ProjectCaseStudy project={project} />;
}