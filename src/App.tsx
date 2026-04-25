import { useState } from 'react'
import TopBar from './components/TopBar'
import SectionTabs from './components/SectionTabs'
import CurrTab from './components/CurrTab'
import BottomBar from './components/BottomBar'

const TAB_LABELS: Record<string, string> = {
  home: 'MAIN MENU',
  map: 'HOENN MAP',
  cond: 'CONDITION',
  call: 'MATCH CALL',
  rib: 'RIBBONS',
}

export default function App() {
  const [currPage, setCurrPage] = useState<string>('home')
  const [currDesc, setCurrDesc] = useState<string | null>(null)
  const isHome = currPage === 'home'

  return(
    <main className='w-full h-screen flex flex-col'>
      <div className='w-full h-screen flex flex-col'>
        {isHome && <TopBar/>}

        <div className='flex flex-1 relative'>
          <div className='absolute inset-0'/>
          <div className='relative z-10 flex-1 flex flex-col p-2 gap-2'>
            <CurrTab label={TAB_LABELS[currPage] ?? 'MAIN MENU'}/>
          </div>
          <div className='relative z-10 flex flex-col gap-1 pt-2'>
            {currPage === 'home' && <SectionTabs onSelect={setCurrPage} onHover={setCurrDesc}/>}
          </div>
        </div>
        <BottomBar isHome={isHome} currDesc={currDesc} siteName='BRENDAN EMERALD' onBack={() => setCurrPage('home')}/>
      </div>
    </main>
  )
}
