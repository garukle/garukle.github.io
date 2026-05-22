import type { MenuItem } from "../types";

interface Props {
    hoveredItem: MenuItem | null
    overrideLabel?: string
    overrideColor?: string
    borderTop?: string
    borderRight?: string
    borderBottom?: string
    top?: string
}

export default function MainMenuTab({hoveredItem, overrideLabel, overrideColor, borderTop, borderRight, borderBottom, top = ''}: Props) {
    const label = overrideLabel ?? hoveredItem?.label ?? 'MAIN MENU'
    const bg = overrideColor ?? hoveredItem?.color ?? 'var(--color-olive-400)'
    const bt = hoveredItem?.borderColorA ?? borderTop ?? 'var(--color-olive-300)'
    const br = hoveredItem?.borderColorB ?? borderRight ?? 'var(--color-olive-500)'
    const bb = hoveredItem?.borderColorB ?? borderBottom ??  'var(--color-olive-500)'

    return (
        <div className="fixed left-0 flex flex-col gap-3 w-60 shrink">
            <div className={`flex items-center justify-center px-4 py-2 border-y-4 border-r-4 transition-all duration-200 font-semibold text-white text-2xl text-shadow-lg ${top}`} style={{background: bg, borderTopColor: bt, borderRightColor: br, borderBottomColor: bb}}>
                {label}
            </div>
        </div>
    )
}