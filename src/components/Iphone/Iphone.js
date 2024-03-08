import Image from "next/image"
import styles from "./Iphone.module.css"
import { Image as AntdImage } from "antd"
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
          <AntdImage
            width={281}
            height={557}
            alt="example"
            src="/dd1e32d37720da772c1a3f47dd40c313.png"
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
