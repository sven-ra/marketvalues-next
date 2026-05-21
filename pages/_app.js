import { useEffect, useState } from 'react'
import NavigationLayer from 'components/NavigationLayer'
import ImageViewer from 'components/ImageViewer'
import InfoLayer from 'components/InfoLayer'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  const [activeImage, setActiveImage] = useState(null)
  const [showOverlay, setShowOverlay] = useState(false)

  const activeImageCallback = (image) => {
    setActiveImage(image)
  }

  useEffect(() => {
    if (showOverlay) {
      document.body.classList.add('overlay-visible')
    } else {
      document.body.classList.remove('overlay-visible')
    }
  }, [showOverlay])

  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      if (event.keyCode === 27) {
        setShowOverlay(false)
      }
    })
  }, [])

  return (
    <>
      <ImageViewer
        activeImage={activeImage}
        activeImageCallback={activeImageCallback}
      />
      <InfoLayer setShowOverlay={setShowOverlay}>
        <Component showOverlay={false} {...pageProps} />
      </InfoLayer>
      <NavigationLayer
        showOverlay={showOverlay}
        setShowOverlay={setShowOverlay}
        activeImage={activeImage}
      />
    </>
  )
}
