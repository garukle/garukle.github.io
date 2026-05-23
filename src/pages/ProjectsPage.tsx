import PageSkeleton from "../components/PageSkeleton";
import { useEffect, useState, useMemo } from "react";
import type { Project, ProjectStatus } from "../types";
import { projects } from "../data/projects";

interface Props {
    onBack: () => void
}

type Filter = 'ALL' | 'CS' | 'ART'

const statusIcon: Record<ProjectStatus, {icon: string; color: string; label: string; }> = {
    'complete': {icon: 'task_alt', color: 'text-green-800', label: 'Complete'},
    'in-progress': {icon: 'change_circle', color: 'text-orange-800', label: 'In Progress'},
    'abandoned': {icon: 'remove_circle', color: 'text-red-800', label: 'Abandoned'}
}

export default function ProjectPage({onBack}: Props) {
    const [filter, setFilter] = useState<Filter>('ALL')
    const [hovered, setHovered] = useState<Project | null>(null)
    const [selected, setSelected] = useState<Project | null>(null)

    const filtered = useMemo(() => {
        if(filter === 'ART') return projects.filter(p => p.type === 'art')
        if(filter === 'CS') return projects.filter(p => p.type === 'cs')
        return projects
    }, [filter])

    const preview = hovered ?? selected

    useEffect(() => {
        document.title = 'Projects'
        return () => {document.title = 'Main Menu'}
    }, [])

    return (
        <PageSkeleton label="PROJECTS" color="var(--color-red-400)" borderTop="var(--color-red-300)" borderRight="var(--color-red-500)" borderBottom="var(--color-red-500)" onBack={onBack}>
            <div className="flex h-[calc(100vh-8rem)] pt-4 pr-4 pb-16 gap-4">

                {/* LEFT PANEL */}
                <div className="flex flex-col w-64 shrink-0 gap-3 ml-0 mt-16">

                    {/* Filter tab or type label when selected */}
                    <div className="border-2 border-red-500 overflow-hidden">
                        {selected ? (
                            <div className="py-1 text-center text-white font-bold bg-red-400" style={{ fontFamily: '"Jersey 10", monospace', fontSize: '16px' }}>
                                {selected.type.toUpperCase()}
                            </div>
                        ) : (
                            <div className="flex">
                                {(['ALL', 'CS', 'ART'] as Filter[]).map(f => (
                                    <button key={f} className={`flex-1 py-1 text-sm font-bold transition-colors ${filter === f ? 'bg-red-400 text-white' : 'bg-red-100 text-red-700 hover:bg-red-200'}`} onClick={() => setFilter(f)}>
                                        {f}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Stats/preview box — shows stats by default, preview on hover/select */}
                    <div className="border-2 border-red-500 bg-red-400 overflow-hidden h-30">
                        {preview ? (
                            <img
                                src={preview.thumbnail}
                                alt={preview.name}
                                className="w-full h-full object-cover"
                                onError={e => {
                                    const t = e.target as HTMLImageElement
                                    t.style.display = 'none'
                                    t.parentElement!.innerHTML = `<span class="text-white text-xs p-2 text-center flex items-center justify-center h-full">No preview</span>`
                                }}
                            />
                        ) : (
                            <div className="flex flex-col h-full p-3 gap-2 justify-center">
                                <div className="flex justify-between items-center">
                                    <span className="text-white text-xs font-semibold">Registered</span>
                                    <span className="text-white font-bold">{filtered.length}</span>
                                </div>
                                <div className="border-t border-red-300"/>
                                <div className="flex justify-between items-center">
                                    <span className="text-white text-xs font-semibold">Placeholder</span>
                                    <span className="text-white font-bold">???</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* RIGHT PANEL */}
                <div className="flex-1 min-w-0">
                    {selected ? (
                        <DetailView project={selected} onBack={() => {setSelected(null); setHovered(null)}}/>
                    ) : (
                        <ProjectList projects={filtered} onHover={setHovered} onLeave={() => setHovered(null)} onSelect={setSelected}/>
                    )}
                </div>
            </div>
        </PageSkeleton>
    )
}

function ProjectList({projects, onHover, onLeave, onSelect}: {
    projects: Project[]
    onHover: (p: Project) => void
    onLeave: () => void
    onSelect: (p: Project) => void
}) {
    return (
        <div className="h-full border-2 border-red-500 bg-red-400 flex flex-col overflow-hidden">
            <div className="overflow-y-auto flex-1">
                {projects.map((p, i) => {
                    const s = statusIcon[p.status]
                    return (
                        <button key={p.id} className={`flex items-center gap-3 px-4 py-2 w-full text-left transition-colors hover:bg-red-300 ${i !== 0 ? 'border-t border-red-500' : ''}`} onMouseEnter={() => onHover(p)} onMouseLeave={onLeave} onClick={() => onSelect(p)}>
                            <span className={`material-symbols-outlined ${s.color} shrink-0`} title={s.label}>{s.icon}</span>
                            <span className="text-white text-sm font-semibold w-24 shrink-0">{p.category}</span>
                            <span className="text-white font-bold truncate">{p.name}</span>
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

function DetailView({project, onBack}: {project: Project; onBack: () => void}) {
    const s = statusIcon[project.status]

    return (
        <div className="h-full border-2 border-red-500 bg-red-400 flex flex-col overflow-hidden">

            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b-2 border-red-500 shrink-0">
                <div>
                    <p className="text-white text-sm font-semibold">{project.category}</p>
                    <p className="text-white text-2xl font-bold" style={{ fontFamily: '"Jersey 10", monospace' }}>{project.name}</p>
                </div>
                <div className="flex items-center gap-2">
                    <span className={`material-symbols-outlined ${s.color}`}>{s.icon}</span>
                    <span className="text-white text-sm">{s.label}</span>
                </div>
            </div>

            {/* Sections */}
            <div className="flex-1 overflow-y-auto px-4 py-3 flex flex-col gap-4">
                {project.sections.map((section, i) => (
                    <div key={section.label}>
                        <p className="text-red-200 text-xs font-bold uppercase tracking-wide mb-1">{section.label}</p>
                        <p className="text-white text-sm leading-relaxed">{section.content}</p>
                        {i < project.sections.length - 1 && <div className="border-t border-red-500 mt-4"/>}
                    </div>
                ))}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-4 py-3 border-t-2 border-red-500 shrink-0">
                <button className="flex items-center gap-2 px-3 py-1.5 border-2 border-red-500 bg-red-300 hover:bg-red-200 transition-colors text-white font-semibold text-sm" onClick={onBack}>
                    <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_back</span>
                    Back to list
                </button>
                <div className="flex gap-2">
                    {project.repoUrl && (
                        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-1.5 border-2 border-red-500 bg-red-300 hover:bg-red-200 transition-colors text-white font-semibold text-sm">
                            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>code</span>
                            Repo
                        </a>
                    )}
                    {project.demoUrl && (
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-1.5 border-2 border-red-500 bg-red-300 hover:bg-red-200 transition-colors text-white font-semibold text-sm">
                            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>open_in_new</span>
                            Demo
                        </a>
                    )}
                    {project.postUrl && (
                        <a href={project.postUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-1.5 border-2 border-red-500 bg-red-300 hover:bg-red-200 transition-colors text-white font-semibold text-sm">
                            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>link</span>
                            Post
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}