import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from 'components/NavigationLayer.module.scss'

const AltarButton = ({ altar }) => {
  return (
    <Link href={altar}>
      <a className={`${styles.prev} ${styles.button}`}>
        <img src={`images/${altar}-thumb.jpg`} />
      </a>
    </Link>
  )
}

export default ({ activeImage, showOverlay, setShowOverlay }) => {
  const router = useRouter()
  const [activeAltars, setActiveAltars] = useState([])

  useEffect(() => {
    setShowOverlay(false)

    if (activeImage === 'altar-1') {
      setActiveAltars(['altar-3', 'altar-2'])
    } else if (activeImage === 'altar-2') {
      setActiveAltars(['altar-1', 'altar-3'])
    } else if (activeImage === 'altar-3') {
      setActiveAltars(['altar-2', 'altar-1'])
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
