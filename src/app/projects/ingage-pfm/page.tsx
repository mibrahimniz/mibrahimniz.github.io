import { ProjectCaseStudy } from "@/components/projects/project-case-study";
import { projects } from "@/lib/projects";

const project = projects.find(
  (project) => project.slug === "ingage-pfm",
);

export const metadata = {
  title: "Ingage PFM | Muhammad Ibrahim Nizamani",
  description:
    "Ingage PFM personal finance and distributed banking platform.",
};

export default function IngagePfmPage() {
  if (!project) {
    return null;
  }

  return <ProjectCaseStudy project={project} />;
}