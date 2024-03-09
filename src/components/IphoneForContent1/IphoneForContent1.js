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
      <div className={styles.iphoneBtn} style={{}}></div>
      <div
        className={styles.iphoneBtn}
        style={{ top: " 112.31px", height: "52.72px" }}
      ></div>
      <div
        className={styles.iphoneBtn}
        style={{ top: "173.43px", height: "52.72px" }}
      ></div>
      <div
        className={styles.iphoneBtn}
        style={{ top: "115.36px", left: "361px", height: "72.58px" }}
      ></div>
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
            src={fetchImg ? fetchImg : "/loadingText.gif"}
            style={{
              objectFit: "cover",
              height: "557px",
              minWidth: "207px",
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
