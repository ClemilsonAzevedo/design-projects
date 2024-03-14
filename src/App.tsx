import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import { LineAnimateBackground } from "./components/LineAnimateBackground";

export function App() {

  return (
    <main className='min-w-full h-screen p-5 gap-6 grid grid-rows-[64px_1fr_32px] place-items-center overflow-y-hidden bg-neutral-50 dark:bg-neutral-950 transition-colors text-neutral-950 dark:text-neutral-50'>
      <Header />
      <Home />
      <Footer />
      <LineAnimateBackground />
    </main>
  )
}
