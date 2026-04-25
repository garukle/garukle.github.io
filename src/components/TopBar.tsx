export default function TopBar() {
    return(
        <header className="bg-green-500 border-b border-amber-500 px-3 pt-2 pb-0">
            <div className="flex items-start justify-between">
                <span className="text-xs tracking-widest pt-1">
                    RAVINDU GUNASEKARA
                </span>
                {/* Animated logo here. */}
            </div>
            <div className="flex flex-col gap-0.5 mt-2">
                <div className="h-0.75 w-full bg-green-200"/>
                <div className="h-0.75 w-full bg-green-300"/>
            </div>
        </header>
    )
}