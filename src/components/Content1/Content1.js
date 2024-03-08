import React, { useState, useEffect } from "react"

// "use client"
import { Button, Flex, ConfigProvider, Space } from "antd"
import Image from "next/image"

import { Layout } from "antd"

const { Content } = Layout

import styles from "./Content1.module.css"
import GetstartBtn from "../GetstartBtn/GetstartBtn"
import HowitworkBtn from "../HowitworkBtn/HowitworkBtn"
import Iphone from "../Iphone/Iphone"

export default function Content1() {
  const [image, setImage] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const headers = new Headers({
      "Content-Type": "application/json",
      "x-api-key": "DEMO-API-KEY",
    })

    const requestOptions = {
      method: "GET",
      headers: headers,
      redirect: "follow",
    }

    setLoading(true)
    fetch("https://api.thecatapi.com/v1/images/search", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setImage(result[0].url)
        setLoading(false)
      })
      .catch((error) => {
        console.log("error", error)
        setError(error)
        setLoading(false)
      })
  }, [])

  return (
    <>
      <Content className={styles.contnet1} style={{ border: "0px red solid" }}>
        <Flex className={styles.contnet} justify={"space-between"}>
          <Image
            className={styles.shine}
            width={39.2}
            height={49}
            src={"/deepRedShine.png"}
          />
          <Image
            className={styles.shineWhite}
            width={39.2}
            height={49}
            src={"/shineWhite.png"}
          />

          <Flex
            vertical={true}
            style={{ width: "620px", border: "0px blue solid" }}
          >
            <p style={{}} className={styles.slogan}>
              Create Engaging Landing Pages
            </p>
            <p style={{}} className={styles.text}>
              Build beautiful landing pages in record time with Anima’s Landing
              Page UI kit for Figma. No code required!
            </p>
            <Flex gap="18px">
              <GetstartBtn />
              <HowitworkBtn
                text={"How it works"}
                width="202px"
                backgroundColor="#FFFFFF"
                color="#009379"
                fontSize="16px"
                border="1px #009379 solid"
              />
            </Flex>
            {/* <Iphone /> */}
          </Flex>
          <Iphone top="24px" fetchImg={image} />
          {/* <Iphone transform="scale(0.733)" display={"none"} /> */}
        </Flex>
      </Content>
    </>
  )
}
