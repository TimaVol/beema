import Image from 'next/image'
import styles from '../styles/components/About.module.scss'

export default function About() {
  return (
    <div className={styles.About}>
      <h2>More about Beema</h2>

      <div className={styles.main}>
        <div className={styles.text}>
          <p>
            Beema is about designing, building and deliverying best quality
            software for your company.
          </p>
          <p>
            We make sure that you get the best software inferstracture and set
            of applications to ensure the best experience of your clients.
          </p>
          <p>
            So wether you are handling thousands of payment transactions or
            you’re just starting out, you are in the right place.
          </p>
        </div>

        <Image
          src={'/rocket_launch_ 1.png'}
          height="427"
          width="579"
          alt="rocket_launch_ 1.png"
        />
      </div>
    </div>
  )
}
