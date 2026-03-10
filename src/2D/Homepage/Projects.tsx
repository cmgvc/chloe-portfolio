import { useState } from "react";
import GitHub from "@mui/icons-material/GitHub";
import PageLayout from "../PageLayout";
import projects from "../../data/projects";
import SectionSubtitle from "../../components/SectionSubtitle";

function ProjectCard({
  project,
  isExpanded,
  onToggle,
}: {
  project: any;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const styles = {
    container: isExpanded
      ? "bg-[#82917A]/70 w-[75%] mx-auto"
      : "bg-[#1C1C1A]/70",
    text: isExpanded ? "text-[#F0C6A6]" : "text-[#82917A]",
    chip: isExpanded
      ? "bg-[#F0C6A6]/20 text-[#F0C6A6] hover:bg-[#F0C6A6]/30"
      : "bg-[#82917A]/20 text-[#82917A] hover:bg-[#82917A]/30",
  };

  return (
    <div
      className={`transition-all duration-300 rounded-2xl p-6 flex flex-col h-full ${styles.container}`}
    >
      <div className={`text-sm font-mono mb-4 ${styles.text}`}>
        {project.year}
      </div>
      <h3 className="text-[#F0C6A6] font-bold text-xl mb-2">{project.name}</h3>

      <div className="text-[#e4cebe] text-sm mb-4 leading-relaxed">
        {isExpanded ? (
          project.desc.map((line: string, index: string) => (
            <p key={index} className="mb-2">
              {line}
            </p>
          ))
        ) : (
          <p>{project.desc[0].substring(0, 100)}...</p>
        )}
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((skill: string) => (
          <span
            key={skill}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 hover:shadow-lg ${styles.chip}`}
          >
            {skill}
          </span>
        ))}
      </div>

      {isExpanded && project.image && (
        <img
          src={project.image}
          alt={project.name}
          className="rounded-lg p-2 mb-4"
        />
      )}

      <div className="mt-auto flex gap-4">
        <button
          onClick={onToggle}
          className="text-[#F0C6A6] text-sm border-b border-[#F0C6A6]/30 hover:border-[#F0C6A6]"
        >
          {isExpanded ? "Show Less" : "Show More"}
        </button>
        {project.source && (
          <a
            href={project.source}
            target="_blank"
            rel="noreferrer"
            className={styles.text}
          >
            <GitHub fontSize="small" />
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    const isTarget = expandedIndex === index;
    setExpandedIndex(isTarget ? null : index);

    if (!isTarget) {
      setTimeout(
        () =>
          document
            .getElementById("projects-div")
            ?.scrollIntoView({ behavior: "smooth" }),
        150,
      );
    }
  };

  return (
    <PageLayout
      label="Projects"
      title="My Projects"
      divId="projects-div"
      icon={null}
    >
      <SectionSubtitle>
        I like to build stuff, and I like to show it off. Here are some of my
        projects that I'm proud of. Feel free to check out the source code and
        demos if available!
      </SectionSubtitle>
      <div
        className={`mt-[5vh] grid gap-6 ${expandedIndex !== null ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}`}
      >
        {projects.map(
          (project, i) =>
            (expandedIndex === null || expandedIndex === i) && (
              <ProjectCard
                project={project}
                isExpanded={expandedIndex === i}
                onToggle={() => handleToggle(i)}
              />
            ),
        )}
      </div>
    </PageLayout>
  );
}
