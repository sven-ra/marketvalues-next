import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from 'components/NavigationLayer.module.css'

const AltarButton = ({ altar }) => {
  return (
    <Link href={altar} className={`${styles.prev} ${styles.button}`}>
      <img src={`images/${altar}-thumb.jpg`} />
    </Link>
  )
}

export default ({ activeImage, showOverlay, setShowOverlay }) => {
  const router = useRouter()
  const [activeAltars, setActiveAltars] = useState([])

  useEffect(() => {
    setShowOverlay(false)

    if (activeImage === 'market-a') {
      setActiveAltars(['market-c', 'market-b'])
    } else if (activeImage === 'market-b') {
      setActiveAltars(['market-a', 'market-c'])
    } else if (activeImage === 'market-c') {
      setActiveAltars(['market-b', 'market-a'])
    }
  }, [activeImage])

  const handleAltarOverlay = () => {
    if (router.pathname === '/') {
      router.push(`/${activeImage}`)
      setShowOverlay(true)
    } else {
      setShowOverlay(!showOverlay)
    }
  }

  const handleHomeOverlay = () => {
    if (router.pathname !== '/') {
      router.push('/')
      setShowOverlay(true)
    } else {
      setShowOverlay(!showOverlay)
    }
  }

  return (
    <nav className={styles.navigation}>
      <button
        className={styles.button}
        onClick={() => {
          handleAltarOverlay()
        }}
      >
        <img src="images/linik1_small.png" />
      </button>

      <button
        className={styles.button}
        onClick={() => {
          handleHomeOverlay()
        }}
      >
        <img src="images/linik2_small.png" />
      </button>

      {activeAltars.map((altar, index) => {
        return <AltarButton altar={altar} key={index} />
      })}
    </nav>
  )
}
