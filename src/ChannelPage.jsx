import Channel from './Channel';

export default function ChannelPage({channels, onChannelSelect}) {
    return (
        // 4x3 grid of channels per page.
        <section className='grid grid-cols-4 grid-rows-3 gap-4 w-full h-full px-10 py-15'>
            {channels.map((channel) => (<Channel 
                key = {channel.id} 
                id = {channel.id} 
                name = {channel.name} 
                icon = {channel.icon}
                onSelect={onChannelSelect}
            />))}
        </section>
    );
}