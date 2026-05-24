interface Props {
  entering?: boolean
  exiting?: boolean
}

export default function TopBar({entering, exiting}: Props) {
  const s = (n: number) => `calc(${n} * var(--gp))`

  return (
    <div 
      className={`absolute left-0 right-0 top-0 ${exiting ? 'topbar-exit' : entering ? 'topbar-enter' : ''}`} 
      style={{ height: s(32) }}
    >
      <div 
        className="absolute left-0 right-0 top-0" 
        style={{ height: s(23), background: '#20d890' }}
      >
        <span
          className="absolute"
          style={{
            left: s(24),
            top: s(0),
            fontFamily: '"Jersey 10", monospace',
            fontSize: s(20),
            color: '#f8f8f8',
            lineHeight: 1,
          }}
        >
          <span>RAVINDU</span>
          <span style={{ display: 'inline-block', width: s(15) }} />
          <span>GUNASEKARA</span>
        </span>
      </div>

      {/* Colored bars at the bottom */}
      <div 
        className="absolute left-0 right-0" 
        style={{ top: s(23), height: s(2), background: '#b0f8d0' }} 
      />
      <div 
        className="absolute left-0 right-0" 
        style={{ top: s(25), height: s(1), background: '#20d890' }} 
      />
      <div 
        className="absolute left-0 right-0" 
        style={{ top: s(26), height: s(2), background: '#68e8b0' }} 
      />
      <div 
        className="absolute left-0 right-0" 
        style={{ top: s(28), height: s(1), background: '#20d890' }} 
      />
      <div 
        className="absolute left-0 right-0" 
        style={{ top: s(29), height: s(1), background: '#b89000' }} 
      />
      <div 
        className="absolute left-0 right-0" 
        style={{ top: s(30), height: s(1), background: '#c0c0c8' }} 
      />
      <div 
        className="absolute left-0 right-0" 
        style={{ top: s(31), bottom: 0, background: '#e8e8e0' }} 
      />
    </div>
  )
}