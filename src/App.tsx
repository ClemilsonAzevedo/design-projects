import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { LineAnimateBackground } from './components/LineAnimateBackground';

export function App() {

  return (
    <main>
      <div className='flex z-20'>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </Router>
      </div>
      <LineAnimateBackground />
    </main>
  )
}
