import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import { LineAnimateBackground } from "./components/LineAnimateBackground";

export function App() {

  return (
    <main className=' min-w-full h-screen p-5 gap-6 grid grid-rows-[64px_1fr_32px] place-items-center'>
      <Header />
      <Home />
      <Footer />
      <LineAnimateBackground />
    </main>
  )
}
