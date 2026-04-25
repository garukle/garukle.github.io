export default function BottomBar({isHome, currDesc, siteName, onBack}: {isHome: boolean, currDesc: string | null, siteName: string, onBack: () => void}) {
    if(isHome) {
        return(
            <div className="border-t px-3 py-2 flex items-center gap-2 min-h-9.5">
                <span className={`font-mono text-[10px] tracking-wide ${currDesc ? '' : 'italic'}`}>
                    {currDesc ?? 'Select a tab.'}
                </span>
            </div>
        )
    }

    return(
        <div className="border-t px-3 py-1.25 flex justify-between">
            <button onClick={onBack} className="text-[7px] tracking-wide cursor-pointer bg-transparent border-none">
                CANCEL
            </button>
            <span className="text-[7px] tracking-widest">
                {siteName}
            </span>
        </div>
    )
}