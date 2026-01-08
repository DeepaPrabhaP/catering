import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Gallery from "@/components/gallery"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Footer />
    </main>
  )
}
