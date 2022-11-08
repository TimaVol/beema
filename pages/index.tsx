import About from '../components/About'
import BestQuality from '../components/BestQuality'
import Container from '../components/Container'
import Footer from '../components/Footer'
import Reviews from '../components/Reviews'
import styles from '../styles/Home.module.scss'
import Intro from './../components/Intro'

export default function Home() {
  return (
    <>
      <Intro />

      <main className={styles.main} id="main">
        <Container>
          <BestQuality />
          <Reviews />
          <About />
        </Container>
      </main>
      <Footer />
    </>
  )
}
