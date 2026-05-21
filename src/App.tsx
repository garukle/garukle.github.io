import { useState, useEffect } from 'react'
import TopBar from './components/TopBar'
import MainMenuTab from './components/MainMenuTab'
import SectionTabs from './components/SectionTabs'
import BottomBar from './components/BottomBar'
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
    <main className='min-h-screen default-bg flex flex-col'>
      {isHome && <TopBar/>}
      {isHome && <MainMenuTab hoveredItem={hoveredItem}/>}
      {isHome ? (
        <>
          <div className='flex gap-3 p-4 min-h-80'>
            <div className='flex-5'/>
            <SectionTabs onSelect={handleSelect} onHover={setHoveredItem} onLeave={() => setHoveredItem(null)}/>
          </div>

          <BottomBar text={hoveredItem?.description ?? null}/>
        </>
      ) : (
        renderPage()
      )}
    </main>
  )
}
