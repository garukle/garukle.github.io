import { menuItems } from "../data/menuItems"
import type { MenuItem } from "../types"

interface Props {
    onSelect: (id: string) => void
    onHover: (item: MenuItem) => void
    onLeave: () => void
}

export default function SectionTabs({onSelect, onHover, onLeave}: Props) {
    return(
        <div className="fixed right-0 flex flex-col gap-2 flex-1 justify-center">
            {menuItems.slice(0, -1).map(item => (
                <button className="flex items-center gap-3 px-4 pr-30 py-1 border-y-4 border-l-4 cursor-pointer transition-all duration-100 hover:translate-x-1 bg-amber-300 border-b-amber-400 border-t-amber-200 border-l-amber-200 text-white font-semibold text-shadow-lg" key={item.id} onMouseEnter={() => onHover(item)} onMouseLeave={onLeave} onClick={() => {onLeave(); onSelect(item.id)}}>
                    <span className="w-4 h-4 border-2 shrink border-b-amber-200 border-r-amber-200" style={{background: item.color, borderLeftColor: 'rgba(0, 0, 0, 0.25)', borderTopColor: 'rgba(0, 0, 0, 0.25)'}}/>
                    {item.label}
                </button>
            ))}
            {menuItems.slice(-1).map(item => (
                <button className="flex items-center gap-3 px-4 pr-30 py-1 border-y-4 border-l-4 cursor-pointer transition-all duration-100 hover:translate-x-1 bg-olive-400 border-b-olive-500 border-l-olive-300 border-t-olive-300 text-white font-semibold text-shadow-lg" key={item.id} onMouseEnter={() => onHover(item)} onMouseLeave={onLeave} onClick={() => {onLeave(); onSelect(item.id)}}>
                    <span className="w-4 h-4 border-2 shrink border-b-olive-300 border-r-olive-300 border-t-olive-500 border-l-olive-500" style={{background: 'white'}}/>
                    {item.label}
                </button>
            ))}
        </div>
    )
}