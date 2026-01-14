import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <header>
        <h1>Top Screen</h1>
      </header>
      <section>
        <h1>Bottom Screen</h1>
      </section>
      <footer>
        <p>&copy; 2026 Garukle. All Rights Reserved.</p>
      </footer>
    </main>
  )
}

export default App