import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header } from './components/Header'
import { App } from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<div className='w-full h-screen gap-5 p-5 max-md:px-0 max-md:pb-px flex flex-col justify-center bg-neutral-50 dark:bg-neutral-950 text-neutral-950 dark:text-neutral-50 max-sm:text-md'>
			<Header />
			<App />
		</div>
	</React.StrictMode>,
)
