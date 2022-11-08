import Image from 'next/image'
import Link from 'next/link'
import { Linkedin, Twitter } from '../common/icons'
import styles from '../styles/components/Footer.module.scss'
import Container from './Container'

export default function Footer() {
  return (
    <div className={styles.Footer}>
      <Container className={styles.wrap}>
        <div className={styles.logo}>
          <Image src={'/logo.png'} height="100" width="100" alt="logo" />
          <h3>Beema</h3>
        </div>

        <h2>
          Just say the magical word <br />
          and we will do the rest
        </h2>

        <button className="getStarted">Start your Project</button>

        <footer>
          <div className={styles.links}>
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Terms of Service</Link>
            <Link href="/">Contact</Link>
          </div>

          <div className={styles.socials}>
            <Link href="/">
              <Twitter />
            </Link>
            <Link href="/">
              <Linkedin />
            </Link>
          </div>
        </footer>
      </Container>
    </div>
  )
}
