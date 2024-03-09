"use client"
import React, { useState, useEffect } from "react"
import Head from "next/head"

// "use client"
import { Button, Flex, ConfigProvider, Space } from "antd"
import Image from "next/image"

import { Layout } from "antd"

const { Content } = Layout

import styles from "./Content1.module.css"
import GetstartBtn from "../GetstartBtn/GetstartBtn"
import HowitworkBtn from "../HowitworkBtn/HowitworkBtn"
import Iphone from "../Iphone/Iphone"
import IphoneForContent1 from "../IphoneForContent1/IphoneForContent1"

import useStore from "../../zustandStore"

export default function Content1() {
  const { isMobileW } = useStore((state) => ({
    isMobileW: state.isMobileW,
  }))
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
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Content className={styles.content1}>
        <Flex
          className={styles.content}
          justify={"space-between"}
          align={isMobileW ? "center" : "space-between"}
          style={{
            width: isMobileW ? "375px" : "1170px",
            flexDirection: isMobileW ? "column" : "",
          }}
        >
          <Flex
            vertical={true}
            style={{
              width: isMobileW ? "375px" : "620px",
              // border: "3px blue solid",
            }}
          >
            <p style={{}} className={styles.slogan}>
              Create {isMobileW && <br />} Engaging Landing Pages
            </p>
            <p style={{}} className={styles.text}>
              Build beautiful landing pages in record time with Anima’s Landing
              Page UI kit for Figma. No code required!
            </p>
            <Flex gap="18px" className={styles.btnsContainer}>
              <GetstartBtn getStartIcon="rocket" />
              <HowitworkBtn
                text={"How it works"}
                width="202px"
                backgroundColor="#FFFFFF"
                color="#009379"
                fontSize="16px"
                border="1px #009379 solid"
              />
            </Flex>
          </Flex>

          <IphoneForContent1
            fetchImg={image}
            top={isMobileW ? "-55px" : "24px"}
            transform={isMobileW ? "scale(0.7)" : "scale(1)"}
          />
        </Flex>
      </Content>
    </>
  )
}
