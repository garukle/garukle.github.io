import type { MenuItem } from '../types'

interface Props {
  hoveredItem?: MenuItem | null
  overrideLabel?: string
  overrideColor?: string
  borderTop?: string
  borderRight?: string
  borderBottom?: string
  topOffset?: number
  entering?: boolean
  exiting?: boolean
}

export default function PageTab({
  overrideLabel,
  overrideColor,
  borderTop,
  borderRight,
  borderBottom,
  topOffset = 32,
  entering,
  exiting
}: Props) {
  const s = (n: number) => `calc(${n} * var(--gp))`
  const label = overrideLabel ?? 'MAIN MENU'
  const bg = overrideColor ?? '#b0a878'
  const bt = borderTop ?? '#d8d0a0'
  const br = borderRight ?? '#807848'
  const bb = borderBottom ?? '#807848'

  return (
    <div
      className={`absolute left-0 ${exiting ? 'pagetab-exit' : entering ? 'pagetab-enter' : ''}`}
      style={{
        top: s(topOffset),
        width: s(88),
        height: s(24),
      }}
    >
      <div 
        className="absolute left-0 right-0 top-0" 
        style={{ height: s(2), background: bt }} 
      />
      <div 
        className="absolute left-0 right-0 bottom-0" 
        style={{ height: s(2), background: bb }} 
      />
      <div 
        className="absolute right-0 top-0 bottom-0" 
        style={{ width: s(2), background: br }} 
      />
      <div
        className="absolute flex items-center justify-center"
        style={{
          top: s(2),
          bottom: s(2),
          left: 0,
          right: s(2),
          background: bg,
        }}
      >
        <span
          style={{
            fontFamily: '"Jersey 10", monospace',
            fontSize: s(15),
            color: '#f8f8f8',
            textShadow: `${s(1)} 0 0 rgba(0,0,0,0.5)`,
            letterSpacing: '0.05em',
          }}
        >
          {label}
        </span>
      </div>
    </div>
  )
}