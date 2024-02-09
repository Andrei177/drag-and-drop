import './App.css'
import AppRouter from './routing/AppRouter'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter basename='/drag-and-drop/'>
      <AppRouter/>
    </BrowserRouter>
  )
}

export default App
