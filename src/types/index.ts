export interface MenuItem {
    id: string
    label: string
    description: string
    color: string
    borderColorA: string
    borderColorB: string
    tabStyle?: 'primary' | 'muted'
}