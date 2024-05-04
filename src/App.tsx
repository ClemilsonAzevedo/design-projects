import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { LineAnimateBackground } from './components/LineAnimateBackground'
import ErrorPage from './components/error-page'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'

export function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Home />,
			errorElement: <ErrorPage />,
		},

		{
			path: '/projects',
			element: <Projects />,
			errorElement: <ErrorPage />,
		},
	])

	return (
		<main className='h-full w-full overflow-y-auto'>
			<div className='flex z-20 h-full'>
				<RouterProvider router={router} />
			</div>
			<LineAnimateBackground />
		</main>
	)
}
