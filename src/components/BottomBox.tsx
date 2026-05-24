interface Props {
  text: string | null
}

export default function BottomBox({ text }: Props) {
  const s = (n: number) => `calc(${n} * var(--gp))`

  return (
    <div
      className="absolute flex items-center justify-center"
      style={{
          bottom: s(5),
          left: s(20),
          right: s(20),
          height: s(22),
          background: '#f8f0d0',
          border: `${s(1)} solid #d0d0a8`,
          outline: `${s(1)} solid #506868`,
          boxShadow: `0 0 0 ${s(2)} #384048`,
      }}
    >
      <p 
        className="font-bold"
        style={{
          fontSize: s(15),
          color: 'black',
          textAlign: 'center',
          textShadow: `${s(0.5)} 0 0 rgba(0,0,0,0.2)`
        }}
      >
        {text ?? 'Hover over a menu item...'}
      </p>
    </div>
  )
}