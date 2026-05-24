import PageTab from './PageTab'

interface Props {
  label: string
  color: string
  borderTop: string
  borderRight: string
  borderBottom: string
  onBack: () => void
  children: React.ReactNode
}

export default function PageSkeleton({ label, color, borderTop, borderRight, borderBottom, onBack, children }: Props) {
  const s = (n: number) => `calc(${n} * var(--gp))`

  return (
    <div className="absolute inset-0">
      <PageTab
        overrideLabel={label}
        overrideColor={color}
        borderTop={borderTop}
        borderRight={borderRight}
        borderBottom={borderBottom}
        topOffset={0}
      />

      {/* Page content */}
      <div 
        className="absolute left-0 right-0 overflow-auto" 
        style={{ top: s(24), bottom: s(16) }}
      >
        {children}
      </div>

      {/* Bottom bar */}
      <div 
        className="absolute left-0 right-0 bottom-0 overflow-hidden" 
        style={{ height: s(16) }}
      >
        <div 
          className="absolute left-0 right-0 top-0" 
          style={{ height: s(1), background: '#68e8b0' }}
        />
        <div 
          className="absolute left-0 right-0" 
          style={{ top: s(1), bottom: 0, background: '#20d890' }} 
        />

        {/* B button */}
        <button
          className="absolute flex items-center justify-center rounded-full"
          style={{
            left: s(8),
            top: '50%',
            transform: 'translateY(-50%)',
            width: s(7),
            height: s(7),
            border: `${s(1)} solid white`,
            color: 'white',
            fontSize: s(5),
            lineHeight: 1,
            textShadow: `${s(0.75)} 0 0 rgba(0,0,0,1)`,
            boxShadow: `${s(0.75)} 0 0 rgba(0,0,0,1)`,
          }}
          onClick={onBack}
        >
          B
        </button>

        {/* CANCEL text */}
        <span
          className="absolute flex items-center"
          style={{
            left: s(17),
            top: s(4),
            bottom: s(3),
            color: 'white',
            fontSize: s(5),
            textShadow: `${s(0.75)} 0 0 rgba(0,0,0,1)`,
          }}
        >
          CANCEL
        </span>

        {/* Name */}
        <span
          className="absolute flex items-center"
          style={{
            right: s(11),
            top: s(5),
            bottom: s(4),
            color: 'white',
            fontSize: s(5),
            textShadow: '1px 1px 0 rgba(0,0,0,0.4)',
          }}
        >
          RAVINDU GUNASEKARA
        </span>
      </div>
    </div>
  )
}