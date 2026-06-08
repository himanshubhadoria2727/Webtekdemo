import { projectPages } from "../../data/projects";
import { ProjectPageTemplate } from "../../components/projects/ProjectPageTemplate";

export default function Page() {
  return <ProjectPageTemplate project={projectPages["talabat-clone-app"]} />;
}
