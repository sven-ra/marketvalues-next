import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from './ImageViewer.module.scss'

const imagesUrl = 'https://marketvalues.viieline.ee/seadragon'

export default ({ activeImageCallback, activeImage }) => {
  const router = useRouter()
  const [viewer, setViewer] = useState(null)

  useEffect(() => {
    const initialPath = router.pathname
    let altar = initialPath === '/' ? 'altar-1' : initialPath
    altar = altar.replace(/^\/+/, '')
    activeImageCallback(altar)
  }, [])

  useEffect(() => {
    if (router.pathname !== '/' && router.pathname !== `/${activeImage}`) {
      activeImageCallback(router.pathname.replace(/^\/+/, ''))
    }
  }, [router.pathname])

  useEffect(() => {
    if (!viewer && activeImage) {
      const OpenSeadragon = require('openseadragon')
      const newViewer = new OpenSeadragon({
        id: 'openseadragon1',
        // prefixUrl: '',
        tileSources: `${imagesUrl}/${activeImage}.dzi`,
        showNavigationControl: false,
        defaultZoomLevel: 1.2,
        visibilityRatio: 1,
      })

      setViewer(newViewer)
    } else if (activeImage) {
      viewer.open(`${imagesUrl}/${activeImage}.dzi`)
    }
  }, [activeImage])

  return <div className={styles.container} id="openseadragon1" />
}
