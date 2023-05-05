
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'
import Blog from '@/components/Blog'
import ScrollToTop from '@/components/ScrollToTop'
import Whys from '@/components/Why'



export default function Home() {
  return (
    <div>
    <Header />
    <Hero />
    <Blog />
    <Whys />
    <Testimonials />
    <Footer />
    <ScrollToTop />
    </div>
  )
}
