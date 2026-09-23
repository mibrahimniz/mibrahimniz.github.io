import { ProjectCaseStudy } from "@/components/projects/project-case-study";
import { projects } from "@/lib/projects";

const project = projects.find((project) => project.slug === "rubix");

export const metadata = {
  title: "Rubix | Muhammad Ibrahim Nizamani",
  description: "Rubix enterprise digital banking platform and backend services.",
};

export default function RubixPage() {
  if (!project) {
    return null;
  }

  return <ProjectCaseStudy project={project} />;
}
