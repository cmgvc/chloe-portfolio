import { useState } from "react";
import PageLayout from "../PageLayout";
import projects, { Project } from "../../data/projects";
import SectionSubtitle from "../../components/SectionSubtitle";

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex gap-4 text-[11px] tracking-[0.16em] uppercase">
      {project.source ? (
        <a
          href={project.source}
          target="_blank"
          rel="noreferrer"
          className="text-mist hover:text-clay transition-colors"
        >
          Source
        </a>
      ) : null}
      {project.demo ? (
        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          className="text-mist hover:text-clay transition-colors"
        >
          Demo
        </a>
      ) : null}
    </div>
  );
}

function TechLine({ project }: { project: Project }) {
  return (
    <p className="text-xs tracking-wide text-mist">{project.tech.join(" · ")}</p>
  );
}

export default function Projects() {
  const [expandedName, setExpandedName] = useState<string | null>(null);
  const [lead, ...rest] = projects;
  const leadOpen = expandedName === lead.name;

  const toggle = (name: string) =>
    setExpandedName((current) => (current === name ? null : name));

  return (
    <PageLayout label="Work" title="Selected work" divId="projects-div" icon={null}>
      <SectionSubtitle>
        Products and platforms I’ve designed, built, and shipped. Source and
        demos are linked where I can share them.
      </SectionSubtitle>

      <article className="mt-14 w-full grid md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] gap-8 md:gap-12 items-center bg-sand/70 p-6 md:p-10">
        <div>
          <p className="text-[11px] tracking-[0.22em] uppercase text-clay">
            {lead.year} · Featured
          </p>
          <h3 className="font-display text-3xl md:text-4xl text-ink mt-3 leading-tight">
            {lead.name}
          </h3>
          <p className="mt-4 text-sm md:text-base leading-relaxed text-mist">
            {leadOpen ? lead.desc[0] : lead.summary}
          </p>
          <div className="mt-5">
            <TechLine project={lead} />
          </div>
          <div className="mt-6 flex items-center gap-6">
            <button
              type="button"
              onClick={() => toggle(lead.name)}
              className="text-[11px] tracking-[0.18em] uppercase text-ink hover:text-clay"
            >
              {leadOpen ? "Close" : "Read more"}
            </button>
            <ProjectLinks project={lead} />
          </div>
        </div>
        {lead.image ? (
          <img src={lead.image} alt="" className="w-full" />
        ) : null}
      </article>

      <div className="mt-4 w-full border-t border-line">
        {rest.map((project) => {
          const open = expandedName === project.name;
          return (
            <article key={project.name} className="border-b border-line py-6">
              <div className="grid md:grid-cols-[4.5rem_minmax(0,1fr)_auto] gap-2 md:gap-8 items-baseline">
                <p className="text-[11px] tracking-[0.18em] uppercase text-clay">
                  {project.year}
                </p>
                <div>
                  <h3 className="font-display text-2xl text-ink leading-tight">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist max-w-2xl">
                    {open ? project.desc[0] : project.summary}
                  </p>
                </div>
                <div className="flex md:flex-col md:items-end gap-4 md:gap-2">
                  <button
                    type="button"
                    onClick={() => toggle(project.name)}
                    className="text-[11px] tracking-[0.18em] uppercase text-ink hover:text-clay"
                  >
                    {open ? "Close" : "Read"}
                  </button>
                  <ProjectLinks project={project} />
                </div>
              </div>
              <div className="md:pl-[calc(4.5rem+2rem)] mt-3">
                <TechLine project={project} />
                {open && project.image ? (
                  <img
                    src={project.image}
                    alt=""
                    className="mt-5 w-full max-w-xl"
                  />
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </PageLayout>
  );
}
