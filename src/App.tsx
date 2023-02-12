import type { ReactElement } from 'react'
import { Header } from './components/Header/Header'
import { Footer } from './components/footer/footer'

function App(): ReactElement {
  return (
    <div className="App">
      <Header />

      <Footer />
    </div>
  )
}

export default App;
