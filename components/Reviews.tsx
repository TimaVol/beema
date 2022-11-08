import Image from 'next/image'
import { ReactNode, useEffect, useState } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import styles from '../styles/components/Reviews.module.scss'
import { Carousel } from 'react-responsive-carousel'
import { Quote } from '../common/icons'

const reviews = [
  {
    text: ' I very much enjoyed working with Beema and the team - they have an excellent grasp of their subject, and have created something great for us.',
    user: {
      imgUrl: '/john.png',
      name: 'John coner',
    },
  },

  {
    title: '“There is so much to see and do all over world”',
    text: ' I very much enjoyed working with Beema and the team - they have an excellent grasp of their subject, and have created something great for us.',
    user: {
      imgUrl: '/megan.png',
      name: 'Megan borguer',
    },
  },
  {
    text: ' I very much enjoyed working with Beema and the team - they have an excellent grasp of their subject, and have created something great for us.',
    user: {
      imgUrl: '/john.png',
      name: 'John coner',
    },
  },

  {
    title: '“There is so much to see and do all over world”',
    text: ' I very much enjoyed working with Beema and the team - they have an excellent grasp of their subject, and have created something great for us.',
    user: {
      imgUrl: '/megan.png',
      name: 'Megan borguer',
    },
  },
  {
    text: ' I very much enjoyed working with Beema and the team - they have an excellent grasp of their subject, and have created something great for us.',
    user: {
      imgUrl: '/john.png',
      name: 'John coner',
    },
  },

  {
    title: '“There is so much to see and do all over world”',
    text: ' I very much enjoyed working with Beema and the team - they have an excellent grasp of their subject, and have created something great for us.',
    user: {
      imgUrl: '/megan.png',
      name: 'Megan borguer',
    },
  },
  {
    text: ' I very much enjoyed working with Beema and the team - they have an excellent grasp of their subject, and have created something great for us.',
    user: {
      imgUrl: '/john.png',
      name: 'John coner',
    },
  },

  {
    title: '“There is so much to see and do all over world”',
    text: ' I very much enjoyed working with Beema and the team - they have an excellent grasp of their subject, and have created something great for us.',
    user: {
      imgUrl: '/megan.png',
      name: 'Megan borguer',
    },
  },
]

interface ReviewsType {
  text: string
  user: {
    imgUrl: string
    name: string
  }
}

export default function Reviews() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [mob, setMob] = useState(false)

  useEffect(() => {
    setMob(window.matchMedia('(max-width: 560px)').matches)
  }, [])
  return (
    <div className={styles.Reviews}>
      <h2>What others are saying about us</h2>

      <Carousel
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        emulateTouch
        selectedItem={currentSlide}
        className={styles.carousel}
        onChange={(index: number, item: ReactNode) => setCurrentSlide(index)}
      >
        {mob
          ? reviews.map((reviews) => (
              <div className={styles.sliderSlide} key={Math.random()}>
                <div className={styles.sliderItem} key={Math.random()}>
                  <Quote />

                  <p className={styles.text}>{reviews.text}</p>

                  <div className={styles.userData}>
                    <Image
                      src={reviews.user.imgUrl}
                      height="58"
                      width="58"
                      alt="user img"
                    />
                    <div className={styles.userText}>
                      <h5>{reviews.user.name}</h5>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : reviews
              .reduce(function (prev: any, current, index) {
                return (
                  (index % 2 == 0
                    ? prev.push([current])
                    : prev[prev.length - 1].push(current)) && prev
                )
              }, [])
              .map((reviews: ReviewsType[]) => (
                <div className={styles.sliderSlide} key={Math.random()}>
                  {reviews.map((item) => (
                    <div className={styles.sliderItem} key={Math.random()}>
                      <Quote />

                      <p className={styles.text}>{item.text}</p>

                      <div className={styles.userData}>
                        <Image
                          src={item.user.imgUrl}
                          height="58"
                          width="58"
                          alt="user img"
                        />
                        <div className={styles.userText}>
                          <h5>{item.user.name}</h5>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
      </Carousel>
    </div>
  )
}
