import Image from 'next/image'
import styles from '../styles/components/BestQuality.module.scss'

export default function BestQuality() {
  return (
    <div className={styles.BestQuality}>
      <h2>Best Quality Software</h2>

      <div className={styles.item}>
        <div className={styles.text}>
          <h3>Fully integrated services</h3>
          <p>
            We build and deliver fully integrated webapps with customized
            control panels that fit your compnay needs
          </p>
        </div>
        <Image
          src={'/web_development_ 1.png'}
          height="301"
          width="438"
          alt="web_development_ 1.png"
        />
      </div>

      <div className={styles.item}>
        <h3>Mobile optimized</h3>

        <Image
          src={'/mobile_phone 1.png'}
          height="366"
          width="348"
          alt="web_development_ 1.png"
        />
      </div>

      <div className={styles.item}>
        <div className={styles.text}>
          <h3>Quality is our priority</h3>
          <p>
            We have teams of professional developers, designers and managers
            that ensures delivering the best software quality for your company
          </p>
        </div>
        <Image
          src={'/web_development_ 2.png'}
          height="292"
          width="425"
          alt="web_development_ 1.png"
        />
      </div>
    </div>
  )
}
