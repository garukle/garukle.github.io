import PageSkeleton from "../components/PageSkeleton";
import { useEffect } from "react";

interface Props {
    onBack: () => void
    entering?: boolean
    exiting?: boolean
}

const links = [
    {icon: 'email', label: 'Email', href: 'mailto:ravipgunasekara@gmail.com'},
    {icon: 'person', label: 'LinkedIn', href: 'https://linkedin.com/in/rpgunasekara'},
    {icon: 'code', label: 'GitHub', href: 'https://github.com/rpgunasekara'},
    {icon: 'description', label: 'Resume', href: '/Resume.pdf'}
]

const ongoing = [
    {icon: 'sports_esports', label: 'Playing', value: ['The Elder Scrolls V: Skyrim', 'Teamfight Tactics', 'League of Legneds']},
    {icon: 'tv', label: 'Watching', value: ['Foundation']},
    {icon: 'menu_book', label: 'Reading', value: ['The Final Empire']}
]

export default function AboutPage({onBack, entering, exiting}: Props) {
    useEffect(() => {
        document.title = 'About Me'
        return () => {document.title = 'Main Menu'}
    }, [])

    return (
        <PageSkeleton label="ABOUT ME" color="#b0a878" borderTop="#d8d0a0" borderRight="#807848" borderBottom="#807848" onBack={onBack} entering={entering} exiting={exiting}>
            <div className="flex gap-10 p-10 pb-24">
                <div className="flex flex-col items-center gap-4 w-64 shrink-0 pt-11">
                    <div className="w-48 h-48 overflow-hidden border-4 border-olive-500 bg-olive-400 flex items-center justify-center relative">
                        <img src="/photo.jpg" alt="Profile Picture" className="w-full h-full object-cover" onError={e => {(e.target as HTMLImageElement).style.display = 'none'}}/>
                        <span className="text-olive-800 text-sm font-medium">My Photo</span>
                    </div>

                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-olive-800">Ravindu Gunasekara</h1>
                        <p className="text-sm text-olive-600 mt-1 font-medium">Student @ University of Maryland, Baltimore County</p>
                    </div>

                    <div className="flex flex-col gap-2 w-full mt-2">
                        {links.map(link => (
                            <a key={link.label} href={link.href} target='_blank' rel='noopener noreferrer' className='flex items-center gap-3 px-4 py-2 border-2 border-olive-500 bg-olive-400 hover:bg-olive-300 transition-colors text-olive-800 font-semibold text-sm'>
                                <span className="material-symbols-outlined">{link.icon}</span>
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-8 flex-1">
                    <div>
                        <h2 className="text-xl font-bold text-olive-800 mb-2">Bio</h2>
                        <p className="text-olive-700 leading-relaxed">Hello, hope all is well! I'm a college junior majoring in computer science interested in IT and cybersecurity as a whole. I'm exploring the vast field that it is to learn and figure out what I like. Enjoy the various things I discover, as well as things from my hobbies!</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-olive-800 mb-2">Currently</h2>
                        <div className="flex flex-col gap-2">
                            <p className="text-olive-700"><span className="font-semibold">Studying: </span>Semester has concluded.</p>
                            <p className="text-olive-700"><span className="font-semibold">Exploring: </span>Things I'm working on learning.</p>
                            <p className="text-olive-700"><span className="font-semibold">Other: </span>Anything else I'd like to share.</p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-olive-800 mb-2">Ongoing</h2>
                        <div className="flex gap-4">
                            {ongoing.map(item => (
                                <div key={item.label} className="flex-1 px-4 py-3 border-2 border-olive-500 bg-olive-400">
                                    <p className="text-xs text-olive-800 font-semibold uppercase tracking-wide mb-1 flex items-center gap-1">
                                        <span className="material-symbols-outlined">{item.icon}</span>
                                        {item.label}
                                    </p>
                                    <div className="flex flex-col gap-1">
                                        {item.value.map(v => (
                                            <p key={v} className="text-olive-800 font-medium text-sm">{v}</p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </PageSkeleton>
    )
}