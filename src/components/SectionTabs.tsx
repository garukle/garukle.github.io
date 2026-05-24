import { useState } from 'react'
import { menuItems } from '../data/menuItems'
import type { MenuItem } from '../types'

interface Props {
  onSelect: (id: string) => void
  onHover: (item: MenuItem) => void
  onLeave: () => void
}

export default function SectionTabs({ onSelect, onHover, onLeave }: Props) {
  const s = (n: number) => `calc(${n} * var(--gp))`
  const [pulsed, setPulsed] = useState<string | null>(null)
  const tabStartTop = 34
  const tabHeight = 16
  const tabGap = 4
  const normalWidth = 116
  const hoverWidth = 126

  const handleEnter = (item: MenuItem) => {
    onHover(item)
    setPulsed(item.id)
  }

  const handleLeave = () => {
    onLeave()
    setPulsed(null)
  }

  return (
    <div>
      {menuItems.map((item, i) => {
        const top = tabStartTop + i * (tabHeight + tabGap)
        const isHovered = pulsed === item.id
        const isMuted = item.tabStyle === 'muted'
        const borderTopColor = isMuted ? '#d8d0a0' : '#f8e860'
        const borderBottomColor = isMuted ? '#807848' : '#e09000'

        return (
          <button
            key={item.id}
            className={`absolute right-0 overflow-hidden ${isHovered ? 'tab-pulse' : ''}`}
            style={{
              top: s(top),
              height: s(tabHeight),
              width: s(isHovered ? hoverWidth : normalWidth),
              background: isMuted ? '#b0a878' : '#f0c030',
              borderTop: `${s(2)} solid ${borderTopColor}`,
              borderLeft: `${s(2)} solid ${borderTopColor}`,
              borderBottom: `${s(2)} solid ${borderBottomColor}`,
              transition: 'width 0.08s, background 0.08s',
            }}
            onMouseEnter={() => handleEnter(item)}
            onMouseLeave={handleLeave}
            onClick={() => onSelect(item.id)}
          >
            <div className="absolute inset-0 flex items-center">
              <div
                className="shrink-0"
                style={{
                  marginLeft: s(6),
                  width: s(7),
                  height: s(9),
                  borderTop: `${s(1)} solid ${item.squareDark}`,
                  borderLeft: `${s(1)} solid ${item.squareDark}`,
                  borderRight: `${s(1)} solid ${item.squareLight}`,
                  borderBottom: `${s(1)} solid ${item.squareLight}`,
                  background: item.color,
                }}
              />
              <span
                style={{
                  marginLeft: s(2),
                  fontFamily: '"Jersey 10", monospace',
                  fontSize: s(15),
                  color: '#f8f8f8',
                  textShadow: `${s(1)} 0 0 rgba(0,0,0,0.5)`,
                  whiteSpace: 'nowrap',
                  lineHeight: 1,
                }}
              >
                {item.label}
              </span>
            </div>
          </button>
        )
      })}
    </div>
  )
}