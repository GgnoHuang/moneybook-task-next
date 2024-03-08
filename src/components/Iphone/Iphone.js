import Image from "next/image"
import styles from "./Iphone.module.css"

export default function Iphone({ transform = "scale(1)", display, top }) {
  return (
    <div
      className={styles.container}
      style={{
        top: top,
        transform: transform,
      }}
    >
      <div className={styles.iphonebody}>
        <div className={styles.dynamicIsland}>
          <div className={styles.earpiece}></div>
          <div className={styles.camera}></div>
        </div>
        <div className={styles.iphoneScreen}>
          <Image
            src="/dd1e32d37720da772c1a3f47dd40c313.png"
            width={281}
            height={557}
          />
        </div>
      </div>
      <div
        className={styles.iphoneBGwhite}
        style={{
          display: display,
        }}
      ></div>
    </div>
  )
}
