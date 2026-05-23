export interface MenuItem {
    id: string
    label: string
    description: string
    color: string
    borderColorA: string
    borderColorB: string
    tabStyle?: 'primary' | 'muted'
}

export type ProjectStatus = 'complete' | 'in-progress' | 'abandoned'
export type ProjectType = 'cs' | 'art'

export interface ProjectSection {
    label: string
    content: string
}

export interface Project {
    id: string
    type: ProjectType
    category: string
    name: string
    thumbnail: string
    repoUrl?: string
    demoUrl?: string
    postUrl?: string
    status: ProjectStatus
    sections: ProjectSection[]
}