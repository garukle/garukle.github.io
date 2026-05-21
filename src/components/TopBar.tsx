export default function TopBar() {
    return(
        <div className="flex flex-col border-b-4 border-amber-400 bg-green-400">
            <div className="flex items-center justify-between pl-25 pt-2 pb-8">
                <span className="leading-none text-5xl text-white font-semibold">RAVINDU GUNASEKARA</span>
                {/*Icon sprite goes here.*/}
            </div>
            <div className="h-1.5 bg-green-200 my-0.5"/>
            <div className="h-1.5 bg-green-300 my-1 mb-1.5"/>
        </div>

    )
}