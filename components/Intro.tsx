import Image from 'next/image'
import { Arrow } from '../common/icons'
import styles from '../styles/components/Intro.module.scss'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function Intro() {
  return (
    <div className={styles.Intro}>
      <header>
        <div className={styles.logo}>
          <Image src="/logo.png" height={28} width={28} alt="logo" />
          <p>Beema</p>
        </div>
        <div className={styles.btns}>
          <button className="getStarted">Get Started</button>
          <button className={styles.login}>Login</button>
        </div>
      </header>
      <div className={styles.main}>
        <Image src="/logo.png" height="131" width="131" alt="logo" />
        <h2>Beema</h2>

        <p>
          Software Development <br /> From the best in the industry
        </p>

        <button className="getStarted">Start your Project</button>

        <AnchorLink href="#main" className={styles.linkToContent}>
          <Arrow />
        </AnchorLink>
      </div>
    </div>
  )
}
