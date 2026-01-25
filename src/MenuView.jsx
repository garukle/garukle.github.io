import ChannelPage from './ChannelPage';

export default function MenuView({pages, currPage, setCurrPage, onChannelSelect}) {
    // Get local date and time for the footer.
    const now = new Date();
    const time = now.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', hour12: false});
    const date = now.toLocaleDateString([], {weekday: 'short', month: '2-digit', day: '2-digit'});

    return (
        <main className = 'bg-[repeating-linear-gradient(0deg,#eeeeee_0,#eeeeee_0.2em,transparent_0,transparent_50%)] bg-size-[10px_10px] h-screen pb-20 relative overflow-hidden transition-transform duration-400'>
        <nav className = 'overflow-hidden h-full'>
            <section className = 'flex h-full transition-transform duration-500' style = {{transform: `translateX(-${currPage * 100}%)`}}>
            {pages.map((pageChannels, idx) => (
                <div key = {idx} className = 'shrink-0 w-full h-full'>
                    <ChannelPage channels = {pageChannels} onChannelSelect={onChannelSelect}/>
                </div>
            ))}
            </section>
        </nav>

        {currPage > 0 && (
            <button className = 'absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-600 rounded-full w-8 h-8' onClick={() => setCurrPage(p => Math.max(0, p - 1))}>
            L
            </button>
        )}

        {currPage < pages.length - 1 && (
            <button className = 'absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-600 rounded-full w-8 h-8' onClick={() => setCurrPage(p => Math.min(pages.length - 1, p + 1))}>
            R
            </button>
        )}

        <footer className='fixed bottom-0 left-0 w-full h-20 bg-gray-300 flex items-center px-6 text-gray-500 border-t-2 border-blue-400'>
            <button className = 'w-12 h-12 rounded-full bg-gray-200 border-2 border-blue-400'>Wii</button>

            <section className = 'flex-1 flex flex-col items-center leading-tight'>
            <span className = 'text-lg font-semibold'>{time}</span>
            <span className = 'text-sm opacity-80'>{date}</span>
            </section>

            <button className = 'w-12 h-12 rounded-full bg-gray-200 border-2 border-blue-400'>✉️</button>
        </footer>
        </main>
    );
}