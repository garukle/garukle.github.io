import { useState, useMemo, useEffect, useRef } from "react";
import PageSkeleton from "../components/PageSkeleton";
import type { Project, ProjectStatus } from "../types";
import { projects } from "../data/projects";

interface Props {
  onBack: () => void;
  entering?: boolean;
  exiting?: boolean;
}

type Filter = "ALL" | "CS" | "ART";

const statusIcon: Record<
  ProjectStatus,
  { icon: string; color: string; label: string }
> = {
  complete: { icon: "task_alt", color: "text-green-400", label: "Complete" },
  "in-progress": {
    icon: "change_circle",
    color: "text-orange-400",
    label: "In Progress",
  },
  abandoned: {
    icon: "remove_circle",
    color: "text-red-200",
    label: "Abandoned",
  },
};

const mostRecentDate = (list: Project[]) => {
  if (list.length === 0) return "—";
  return list.reduce((a, b) =>
    new Date(a.lastUpdated) > new Date(b.lastUpdated) ? a : b,
  ).lastUpdated;
};

export default function ProjectsPage({ onBack, entering, exiting }: Props) {
  const s = (n: number) => `calc(${n} * var(--gp))`;
  const [filter, setFilter] = useState<Filter>("ALL");
  const [filterOpen, setFilterOpen] = useState(false);
  const [hovered, setHovered] = useState<Project | null>(null);
  const [selected, setSelected] = useState<Project | null>(null);
  const [scrollTop, setScrollTop] = useState(false);
  const [scrollBottom, setScrollBottom] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(() => {
    if (filter === "CS") return projects.filter((p) => p.type === "cs");
    if (filter === "ART") return projects.filter((p) => p.type === "art");
    return projects;
  }, [filter]);

  const preview = hovered ?? selected;

  const checkScroll = () => {
    const el = listRef.current;
    if (!el) return;
    setScrollTop(el.scrollTop > 0);
    setScrollBottom(el.scrollTop + el.clientHeight < el.scrollHeight);
  };

  useEffect(() => {
    checkScroll();
  }, [filtered]);

  useEffect(() => {
    document.title = "Projects";
    return () => {
      document.title = "Main Menu";
    };
  }, []);

  const handleBack = () => {
    if (selected) {
      setSelected(null);
      setHovered(null);
    } else {
      onBack();
    }
  };

  return (
    <PageSkeleton
      label="PROJECTS"
      color="#f84020"
      borderTop="#f89058"
      borderRight="#b00000"
      borderBottom="#b00000"
      onBack={handleBack}
      entering={entering}
      exiting={exiting}
    >
      {/* Filter dropdown................additional border color #b86870 this the darker one */}
      <div
        className="absolute"
        style={{
          top: s(24 + 13),
          width: s(91),
          height: s(23),
          boxShadow: `${s(1)} 0 0 #304048, 0 ${s(1)} 0 #304048, 0 ${s(1)} 0 #304048`,
          border: `solid #f8e8a0`,
          borderColor: '#f8e8a0'
        }}
      >
        <button
          className="absolute flex items-center justify-between px-1"
          style={{
            inset: s(0),
            background: "#f0c078",
            fontSize: s(12),
            color: "#282018",
            textShadow: "1px 1px 0 rgba(255,255,255,0.5)",
          }}
          onClick={() => !selected && setFilterOpen((f) => !f)}
        >
          <span>{selected ? selected.category.toUpperCase() : filter}</span>
          {!selected && (
            <span
              className="material-symbols-outlined"
              style={{ fontSize: s(8) }}
            >
              {filterOpen ? "arrow_drop_up" : "arrow_drop_down"}
            </span>
          )}
        </button>

        {filterOpen && !selected && (
          <div
            className="absolute z-10"
            style={{
              top: "100%",
              left: 0,
              width: "100%",
              border: `${s(1)} solid #304048`,
              background: "#f0c078",
            }}
          >
            {(["ALL", "CS", "ART"] as Filter[]).map((f) => (
              <button
                key={f}
                className="w-full text-left px-1"
                style={{
                  fontSize: s(9),
                  color: filter === f ? "#c87840" : "#282018",
                  padding: `${s(2)} ${s(4)}`,
                }}
                onClick={() => {
                  setFilter(f);
                  setFilterOpen(false);
                }}
              >
                {f}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Num box / thumbnail */}
      <div
        className="absolute overflow-hidden"
        style={{
          top: s(24 + 13 + 23 + 9),
          width: s(91),
          height: s(71),
          background: "#f0c078",
        }}
      >
        {/* Filter box outer */}
        <div
          className="absolute inset-0"
          style={{ border: `${s(1)} solid #304048` }}
        />
        {/* Filter box inner — light top/left, dark right/bottom */}
        <div
          className="absolute"
          style={{
            inset: s(1),
            borderTop: `${s(1)} solid #f8e8a0`,
            borderLeft: `${s(1)} solid #f8e8a0`,
            borderRight: `${s(1)} solid #b86870`,
            borderBottom: `${s(1)} solid #b86870`,
          }}
        />
        {preview ? (
          <img
            src={preview.thumbnail}
            alt={preview.name}
            className="absolute object-cover"
            style={{ inset: s(2) }}
            onError={(e) => {
              const t = e.target as HTMLImageElement;
              t.style.display = "none";
            }}
          />
        ) : (
          <div
            className="absolute flex flex-col justify-between"
            style={{ inset: s(2), background: "#f0c078", padding: `0 ${s(4)}` }}
          >
            <div style={{ paddingTop: s(6) }}>
              <div
                style={{ fontSize: s(9), color: "#282018", textAlign: "left" }}
              >
                No. registered
              </div>
              <div
                style={{
                  fontSize: s(9),
                  color: "#282018",
                  textAlign: "right",
                  marginTop: s(2),
                }}
              >
                {filtered.length}
              </div>
            </div>
            <div style={{ paddingBottom: s(20) }}>
              <div
                style={{ fontSize: s(9), color: "#282018", textAlign: "left" }}
              >
                Last updated
              </div>
              <div
                style={{
                  fontSize: s(9),
                  color: "#282018",
                  textAlign: "right",
                  marginTop: s(2),
                }}
              >
                {mostRecentDate(filtered)}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* List box */}
      <div
        className="absolute"
        style={{
          right: 0,
          top: s(2),
          width: s(144),
          height: s(140),
          background: "#f0c078",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ border: `${s(1)} solid #304048` }}
        />
        <div
          className="absolute"
          style={{
            inset: s(1),
            borderTop: `${s(3)} solid #f8e8a0`,
            borderLeft: `${s(3)} solid #f8e8a0`,
            borderBottom: `${s(3)} solid #b86870`,
          }}
        />

        {/* Scroll arrow top */}
        {scrollTop && (
          <div
            className="absolute z-10 flex items-center justify-center"
            style={{
              left: s(59),
              top: s(-1),
              width: s(10),
              height: s(6),
            }}
          >
            <span
              className="material-symbols-outlined"
              style={{ fontSize: s(6), color: "#204820" }}
            >
              arrow_drop_up
            </span>
          </div>
        )}

        {/* Scroll arrow bottom */}
        {scrollBottom && (
          <div
            className="absolute z-10 flex items-center justify-center"
            style={{
              left: s(59),
              bottom: s(-1),
              width: s(10),
              height: s(6),
            }}
          >
            <span
              className="material-symbols-outlined"
              style={{ fontSize: s(6), color: "#204820" }}
            >
              arrow_drop_down
            </span>
          </div>
        )}

        {/* Content */}
        <div
          ref={listRef}
          className="absolute overflow-y-auto"
          style={{
            top: s(4),
            bottom: s(4),
            left: s(4),
            right: 0,
            scrollbarWidth: "none",
          }}
          onScroll={checkScroll}
        >
          {selected ? (
            <DetailView project={selected} s={s} />
          ) : (
            <ProjectList
              projects={filtered}
              hovered={hovered}
              onHover={setHovered}
              onLeave={() => setHovered(null)}
              onSelect={setSelected}
              s={s}
            />
          )}
        </div>
      </div>
    </PageSkeleton>
  );
}

function ProjectList({
  projects,
  hovered,
  onHover,
  onLeave,
  onSelect,
  s,
}: {
  projects: Project[];
  hovered: Project | null;
  onHover: (p: Project) => void;
  onLeave: () => void;
  onSelect: (p: Project) => void;
  s: (n: number) => string;
}) {
  return (
    <div className="flex flex-col" style={{ gap: s(1) }}>
      {projects.map((p) => {
        const st = statusIcon[p.status];
        const isHovered = hovered?.id === p.id;
        return (
          <button
            key={p.id}
            className="relative flex items-center text-left w-full"
            style={{
              paddingLeft: s(isHovered ? 12 : 0),
              fontSize: s(9),
              color: "#282018",
              transition: "padding-left 0.1s",
            }}
            onMouseEnter={() => onHover(p)}
            onMouseLeave={onLeave}
            onClick={() => onSelect(p)}
          >
            {/* Hover arrow */}
            {isHovered && (
              <div
                className="absolute flex items-end"
                style={{
                  left: s(3),
                  bottom: s(2.5),
                  width: s(6),
                  height: s(10),
                }}
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: s(8), color: "#204820", lineHeight: 1 }}
                >
                  arrow_right
                </span>
              </div>
            )}
            <span
              style={{ marginLeft: s(3), color: "#f8f8f8", fontSize: s(9) }}
            >
              {p.category}
            </span>
            <span style={{ marginLeft: s(3), color: "#f8f8f8" }}>{p.name}</span>
            <span
              className={`material-symbols-outlined ${st.color} shrink-0`}
              style={{ fontSize: s(6) }}
            >
              {st.icon}
            </span>
          </button>
        );
      })}
    </div>
  );
}

function DetailView({
  project,
  s,
}: {
  project: Project;
  s: (n: number) => string;
}) {
  return (
    <div className="flex flex-col" style={{ gap: s(4) }}>
      {/* Title box */}
      <div
        className="flex items-center justify-center"
        style={{
          width: s(128),
          height: s(16),
          background: "#e0c898",
          border: `${s(1)} solid #c87840`,
          fontSize: s(9),
          color: "#282018",
          textAlign: "center",
          paddingTop: s(4),
          paddingBottom: s(3),
        }}
      >
        {project.name}
      </div>

      {/* Sections */}
      <div className="flex flex-col" style={{ gap: s(7), paddingLeft: s(6) }}>
        {project.sections.map((section) => (
          <div key={section.label}>
            <div
              style={{ fontSize: s(9), color: "#c87840", marginBottom: s(3) }}
            >
              {section.label}
            </div>
            <div style={{ fontSize: s(9), color: "#282018" }}>
              {section.content}
            </div>
          </div>
        ))}
      </div>

      {/* Links */}
      <div
        className="flex gap-2 flex-wrap"
        style={{ paddingLeft: s(6), marginTop: s(4) }}
      >
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: s(9),
              color: "#c87840",
              textDecoration: "underline",
            }}
          >
            Repo
          </a>
        )}
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: s(9),
              color: "#c87840",
              textDecoration: "underline",
            }}
          >
            Demo
          </a>
        )}
        {project.postUrl && (
          <a
            href={project.postUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: s(9),
              color: "#c87840",
              textDecoration: "underline",
            }}
          >
            Post
          </a>
        )}
      </div>
    </div>
  );
}
