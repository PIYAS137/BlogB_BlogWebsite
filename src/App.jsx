
import './App.css'
import { FirebaseProvider } from './context/Firebase'
import Index from './routes/Index'

function App() {

  return (
    <FirebaseProvider>
      <Index/>
    </FirebaseProvider>
  )
}

export default App
