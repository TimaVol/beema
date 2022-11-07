import BestQuality from '../components/BestQuality'
import Container from '../components/Container'
import styles from '../styles/Home.module.scss'
import Intro from './../components/Intro'

export default function Home() {
  return (
    <>
      <Intro />

      <main id="main">
        <Container>
          <BestQuality />
        </Container>
      </main>
    </>
  )
}
