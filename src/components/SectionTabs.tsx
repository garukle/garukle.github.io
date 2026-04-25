const TABS = [
    {id: 'map', label: 'HOENN MAP', color: 'green', desc: 'Check the map of the HOENN region.'},
    {id: 'cond', label: 'CONDITION', color: 'blue', desc: 'Check POKeMON in detail.'},
    {id: 'call', label: 'MATCH CALL', color: 'red', desc: 'Call a registered TRAINER.'},
    {id: 'rib', label: 'RIBBONS', color: 'pink', desc: 'Check obtained RIBBONS.'},
    {id: 'off', label: 'SWITCH OFF', color: 'white', desc: 'Put away the POKeNAV.'}
]

export default function SectionTabs({onSelect, onHover}: {onSelect: (id: string) => void, onHover: (desc: string | null) => void}) {
    return(
        <>
            {TABS.map(tab => (
                <div key={tab.id} onClick={() => onSelect(tab.id)} onMouseEnter={() => onHover(tab.desc)} onMouseLeave={() => onHover(null)} className="flex items-center gap-2 px-3 py-1.5 border border-r-0 rounded-1-sm cursor-pointer min-w-30 hover:bg-gray-400 transition-colors duration-100">
                    <div className="w-1.75 h-1.75 rounded-[1px] shrink-0" style={{background: tab.color}}/>
                    <span className="text-[5px] tracking-wide whitespace-nowrap">
                        {tab.label}
                    </span>
                </div>
            ))}
        </>
    )
}