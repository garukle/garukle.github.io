export default function ChannelView({channel, onBack}) {
    return(
        <main className = 'h-screen flex flex-col bg-white'>
            <section className = 'flex-1 flex items-center justify-center text-3xl'>
                {channel.name} App
            </section>

            <section className = 'h-20 bg-gray-800 text-white flex items-center px-6'>
                <button onClick = {onBack}>Wii Menu</button>
            </section>
        </main>
    );
}