import MainMenuTab from "./MainMenuTab"

interface Props {
    label: string
    color: string
    borderTop: string
    borderRight: string
    borderBottom: string
    onBack: () => void
    children: React.ReactNode
}

export default function PageSkeleton({label, color, borderTop, borderRight, borderBottom, onBack, children}: Props) {
    return (
        <div className="min-h-screen default-bg flex flex-col">
            <MainMenuTab hoveredItem={null} overrideLabel={label} overrideColor={color} borderTop={borderTop} borderRight={borderRight} borderBottom={borderBottom} top=""/>
            <div className="flex-1">
                {children}
            </div>

            <div className="fixed bottom-0 left-0 right-0 flex items-center justify-between px-6 py-2 border-t-2 bg-green-400 border-green-300 text-white font-medium">
                <div>
                    <button className="items-center justify-center gap-2 hover:opacity-70 transition-opacity rounded-full bg-green-300 w-8 h-8" onClick={onBack}>
                        B
                    </button>
                    <span className="pl-2">Back</span>
                </div>
                
                <span>
                    RAVINDU GUNASEKARA
                </span>
            </div>
        </div>
    )
}