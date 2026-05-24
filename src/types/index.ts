export interface MenuItem {
    id: string
    label: string
    description: string
    color: string
    squareDark: string
    squareLight: string
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

export interface Achievement {
    id: string
    name: string
    dateEarned: string
    issuer: string
    image: string
    icon: string
    description: string
    category: 'cert' | 'academic' | 'competition' | 'other'
}