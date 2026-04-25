export default function CurrTab({label}: {label: string}) {
    return(
        <div className="self-start border rounded-sm px-3 py-1.25">
            <span className="text-[7px] tracking-wide">
                {label}
            </span>
        </div>
    )
}