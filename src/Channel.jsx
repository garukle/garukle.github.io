export default function Channel({id, name, onSelect}) {
    return (
        <button type="button" onClick={() => onSelect(id)} className="bg-white rounded-lg w-full h-full flex flex-col items-center justify-center gap-2 hover:scale-105 transition border-2 border-gray-400">
            <span className = 'text-4xl text-gray-400'>{name}</span>
        </button>
    );
}