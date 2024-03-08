import Image from "next/image"
import styles from "./Iphone.module.css"
import { Image as AntdImage } from "antd"
export default function Iphone({
  transform = "scale(1)",
  display,
  top,
  fetchImg = "/dd1e32d37720da772c1a3f47dd40c313.png",
}) {
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
        <div className={styles.iphoneScreen} style={{}}>
          <AntdImage
            alt="example"
            src={fetchImg}
            style={{
              height: "557px",
              width: "auto",
            }}
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
