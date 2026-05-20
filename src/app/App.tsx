import { lazy, Suspense } from 'react'
import Header from '../sections/Header/Header'
import Hero from '../sections/Hero/Hero'

const Services = lazy(() => import('../sections/Services/Services'))
const About = lazy(() => import('../sections/About/About'))
const SocialProof = lazy(() => import('../sections/SocialProof/SocialProof'))
const FAQ = lazy(() => import('../sections/FAQ/FAQ'))
const Contact = lazy(() => import('../sections/Contact/Contact'))
const Footer = lazy(() => import('../sections/Footer/Footer'))

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Suspense fallback={null}>
        <Services />
        <About />
        <SocialProof />
        <FAQ />
        <Contact />
        <Footer />
      </Suspense>
    </>
  )
}

export default App
