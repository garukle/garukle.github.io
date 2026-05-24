import { useState, useEffect } from 'react'
import TopBar from './components/TopBar'
import PageTab from './components/PageTab'
import SectionTabs from './components/SectionTabs'
import BottomBox from './components/BottomBox'
import MapPage from './pages/MapPage'
import BlogPage from './pages/BlogPage'
import ProjectsPage from './pages/ProjectsPage'
import AchievementsPage from './pages/AchievementsPage'
import AboutPage from './pages/AboutPage'
import type {MenuItem} from './types'

export default function App() {
  const [currPage, setCurrPage] = useState<string>('home')
  const [hoveredItem, setHoveredItem] = useState<MenuItem | null>(null)
  const isHome = currPage === 'home'
  
  const goHome = () => {
    setCurrPage('home')
    setHoveredItem(null)
  }

  const handleSelect = (id: string) => {
    setHoveredItem(null)
    setCurrPage(id)
  }

  const renderPage = () => {
    switch(currPage) {
      case 'map': return <MapPage onBack={goHome}/>
      case 'blog': return <BlogPage onBack={goHome}/>
      case 'projects': return <ProjectsPage onBack={goHome}/>
      case 'achievements': return <AchievementsPage onBack={goHome}/>
      case 'about': return <AboutPage onBack={goHome}/>
      default: return null
    }
  }

  useEffect(() => {
    document.title = 'Main Menu'
    return () => {document.title = 'Main Menu'}
  }, [])

  return(
    <main className='min-h-screen bg-black flex items-center justify-center'>
      <div
        className="relative overflow-hidden pokenav-bg"
        style={{
          aspectRatio: '3 / 2',
          maxHeight: '100vh',
          maxWidth: 'calc(100vh * 1.5)',
          width: '100%',
          ['--gp' as string]: 'calc(min(100vw / 240, 100vh / 160))',
        }}
      >
        {isHome && <TopBar/>}
        {isHome && <PageTab hoveredItem={hoveredItem}/>}
        {isHome ? (
          <>
            <SectionTabs onSelect={handleSelect} onHover={setHoveredItem} onLeave={() => setHoveredItem(null)}/>
            <BottomBox text={hoveredItem?.description ?? null}/>
          </>
        ) : (
          renderPage()
        )}
      </div>
    </main>
  )
}
