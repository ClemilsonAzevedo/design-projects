import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";

export function App() {

  return (
    <main className = 'bg-neutral-50 dark:bg-neutral-950 text-neutral-950 dark:text-neutral-50 h-screen min-w-full p-5 gap-6 grid grid-rows-[64px_1fr_64px] place-items-center'>
      <Header />
      <Home />
      <Footer />
    </main>
  )
}
