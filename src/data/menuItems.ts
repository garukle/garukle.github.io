import type {MenuItem} from '../types'

export const menuItems: MenuItem[] = [
    {id: 'map',          label: 'HOENN MAP',    color: 'var(--color-green-400)',    borderColorA: 'var(--color-green-300)', borderColorB: 'var(--color-green-500)',       description: 'Placeholder, figuring out what to do here!'},
    {id: 'blog',         label: 'BLOG',         color: 'var(--color-blue-400)',     borderColorA: 'var(--color-blue-300)', borderColorB: 'var(--color-blue-500)',         description: 'Personal thoughts and learning writeups.'},
    {id: 'projects',     label: 'PROJECTS',     color: 'var(--color-red-400)',      borderColorA: 'var(--color-red-300)', borderColorB: 'var(--color-red-500)',           description: 'Things I\'ve built.'},
    {id: 'achievements', label: 'ACHIEVEMENTS', color: 'var(--color-pink-400)',     borderColorA: 'var(--color-pink-300)', borderColorB: 'var(--color-pink-500)',         description: 'Certifications, awards, and other notable things earned.'},
    {id: 'about',        label: 'ABOUT ME',     color: 'var(--color-olive-400)',    borderColorA: 'var(--color-olive-300)', borderColorB: 'var(--color-olive-500)',       description: 'Who I am, and how to get in contact.', tabStyle: 'muted'}
]