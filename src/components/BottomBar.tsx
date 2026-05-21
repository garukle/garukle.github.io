interface Props {
    text: string | null
}

export default function BottomBar({text}: Props) {
    return(
        <div className="fixed bottom-0 left-0 right-0 flex justify-center py-4 px-4">
            <div className="px-6 py-3 flex items-center justify-center bg-olive-100 rounded-xs border-3 border-olive-500 min-w-80 max-w-150">
                <p className="font-medium">
                    {text ?? 'Welcome! Hover over a menu item...'}
                </p>
            </div>
        </div>
    )
}