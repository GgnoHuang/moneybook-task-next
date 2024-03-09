import React, { useState, useEffect } from "react"
import { Button, Flex, Space } from "antd"
import Image from "next/image"
import styles from "./IphoneForContent2.module.css"
import Iphone from "../Iphone/Iphone"
import useStore from "../../zustandStore"

export default function IphoneForContent2({
  image,

  scale,
}) {
  const { isMobileW } = useStore((state) => ({
    isMobileW: state.isMobileW,
  }))

  return (
    <Flex
      style={{
        transform: isMobileW ? "scale(0.6)" : "scale(1)",
      }}
      className={styles.iphoneContainer}
      justify={"center"}
      align={"center"}
    >
      <div className={styles.iphoneBgCircle}></div>
      <Image
        alt="example"
        className={styles.shine}
        width={100.16}
        height={126.07}
        src={"/shine.png"}
      />
      <Image
        alt="example"
        className={styles.shineWhite}
        width={50.5}
        height={63}
        src={"/shineWhite.png"}
      />
      <Iphone transform="scale(0.733)" display={"none"} fetchImg={image} />
    </Flex>
  )
}
