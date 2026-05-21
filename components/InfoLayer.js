import styles from 'components/InfoLayer.module.css'

export default ({ children, setShowOverlay }) => {
  return (
    <div className={`${styles.overlay} info-overlay`}>
      <button
        className={styles.close}
        onClick={() => {
          setShowOverlay(false)
        }}
      >
        <img src="/close.svg" />
      </button>
      {children}
    </div>
  )
}
