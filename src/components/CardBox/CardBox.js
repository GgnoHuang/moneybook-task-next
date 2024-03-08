import React, { useState, useEffect } from "react"

import { Layout, Button, Flex, ConfigProvider, Space, Card } from "antd"
const { Meta } = Card
import { Image } from "antd"
import styles from "./CardBox.module.css"

export default function CardBox() {
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
    <ConfigProvider
      theme={{
        components: {
          Button: {},
        },
      }}
    >
      <Card
        hoverable
        style={{
          width: 370,
          height: 454,
        }}
        cover={
          <Image
            style={{
              overflow: "hidden",
              height: 278,
              objectFit: "cover",
            }}
            alt="example"
            src={image}
          />
        }
      >
        <Flex vertical={true}>
          <Meta title="Project Title" description="Short Description" />
          <Meta description="Category" />
        </Flex>
      </Card>
    </ConfigProvider>
  )
}
