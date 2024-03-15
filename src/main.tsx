import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { App } from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='min-w-full h-screen p-5 gap-6 grid grid-rows-[64px_1fr_32px] place-items-center overflow-hidden bg-neutral-50 dark:bg-neutral-950 transition-colors text-neutral-950 dark:text-neutral-50' >
      <Header />
      <App />
      <Footer />
    </div>

  </React.StrictMode>,
)
