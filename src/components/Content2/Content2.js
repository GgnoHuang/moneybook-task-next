import React, { useState, useEffect } from "react"

// "use client"
import { Button, Flex, ConfigProvider, Space } from "antd"
import Image from "next/image"

import { Layout } from "antd"

import styles from "./Content2.module.css"

import UsualBtn from "../UsualBtn/UsualBtn"
import Iphone from "../Iphone/Iphone"

export default function Content2() {
  const [image, setImage] = useState(null)
  useEffect(() => {
    const headers = new Headers({
      "Content-Type": "application/json",
      "x-api-key": "DEMO-API-KEY",
    })
    fetch("https://api.thecatapi.com/v1/images/search", {
      method: "GET",
      headers: headers,
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((result) => {
        setImage(result[0].url)
      })
      .catch((error) => {
        console.log("error", error)
      })
  }, [])
  return (
    <Flex
      className={styles.content2body}
      align={"center"}
      justify={"center"}
      gap={60}
    >
      <Flex
        className={styles.iphoneContainer}
        justify={"center"}
        align={"center"}
      >
        <div className={styles.iphoneBgCircle}></div>
        <Image
          className={styles.shine}
          width={100.16}
          height={126.07}
          src={"/shine.png"}
        />
        <Image
          className={styles.shineWhite}
          width={50.5}
          height={63}
          src={"/shineWhite.png"}
        />
        <Iphone transform="scale(0.733)" display={"none"} fetchImg={image} />
      </Flex>

      <Flex vertical={true} style={{ width: "570px", border: "0px red solid" }}>
        <p className={styles.slogan}>Our features</p>
        <p className={styles.slogan2}>
          Few good reasons why you should use Anima Landing Page Ui Kit to make
          your own pages.
        </p>
        <Flex gap="20px" wrap="wrap">
          <Flex gap="20px">
            <UsualBtn textcontent={"Fast building"} imgSrc={"/UFO_icon.png"} />
            <UsualBtn
              textcontent={"Easy to edit"}
              imgSrc={"/MagicWand_icon.png"}
            />
          </Flex>
          <Flex gap="20px">
            <UsualBtn
              textcontent={"Responsiveness"}
              imgSrc={"/BoundingBox_icon.png"}
            />
            <UsualBtn
              textcontent={"No code needed"}
              imgSrc={"/Package_icon.png"}
            />
          </Flex>
        </Flex>
        {/* <Iphone /> */}
      </Flex>
    </Flex>
  )
}
