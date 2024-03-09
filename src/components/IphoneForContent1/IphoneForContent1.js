import Image from "next/image"
import styles from "./IphoneForContent1.module.css"
import { Image as AntdImage } from "antd"

import useStore from "../../zustandStore"

export default function IphoneForContent1({
  transform = "scale(1)",
  display,
  top,
  fetchImg = "/dd1e32d37720da772c1a3f47dd40c313.png",
}) {
  const { isMobileW } = useStore((state) => ({
    isMobileW: state.isMobileW,
  }))
  return (
    <div
      className={styles.container}
      style={{
        top: top,
        transform: transform,
      }}
    >
      <Image
        alt="example"
        className={styles.shine}
        width={39.2}
        height={49}
        src={"/deepRedShine.png"}
      />
      <Image
        alt="example"
        className={styles.shineWhite}
        width={39.2}
        height={49}
        src={"/shineWhite.png"}
      />

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
