export default function PreviewView({channel, onBack, onOpen}) {
    return(
        <main className='h-screen flex flex-col bg-black text-white'>
            <section className='flex-1 flex items-center justify-center text-4xl'>
                {channel.name}
            </section>

            <section className='h-20 bg-gray-800 flex justify-between items-center px-6'>
                <button onClick = {onBack}>Wii Menu</button>
                <button onClick = {onOpen}>Open</button>
            </section>
        </main>
    );
}