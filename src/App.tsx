import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { LineAnimateBackground } from './components/LineAnimateBackground';

export function App() {

  return (
    <main className='h-full w-full overflow-y-auto'>
      <div className='flex z-20 h-full'>
        <Router>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/projects" Component={Projects} />
          </Routes>
        </Router>
      </div>
      <LineAnimateBackground />
    </main>
  )
}
