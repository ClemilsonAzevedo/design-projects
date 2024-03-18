import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { LineAnimateBackground } from './components/LineAnimateBackground';

export function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },

    {
      path: "/projects",
      element: <Projects />,
    },
  ]);

  return (
    <main className='h-full w-full overflow-y-auto'>
      <div className='flex z-20 h-full'>
        <RouterProvider router={router} />
      </div>
      <LineAnimateBackground />
    </main>
  )
}
