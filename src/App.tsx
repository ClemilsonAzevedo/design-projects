import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LineAnimateBackground } from "./components/LineAnimateBackground";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";

export function App() {

  return (
    <main className=''>
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/home" Component={Home} />
          <Route path="/projects" Component={Projects} />
        </Routes>
      </Router>
      <LineAnimateBackground />
    </main>
  )
}
