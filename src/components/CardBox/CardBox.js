import React, { useState, useEffect } from "react"

import { Layout, Button, Flex, ConfigProvider, Space, Card } from "antd"
const { Meta } = Card
import { Image } from "antd"
import styles from "./CardBox.module.css"
import useStore from "../../zustandStore"

export default function CardBox() {
  const { isMobileW } = useStore((state) => ({
    isMobileW: state.isMobileW,
  }))
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
          Card: {},
        },
      }}
    >
      <Card
        hoverable
        style={{
          boxShadow: " 0px 10px 21px 0px #e0e5ff",
          borderRadius: "20px",
          width: isMobileW ? "315px" : "370px",
          height: isMobileW ? "446px" : "454px",
          fontSize: 21,
        }}
        cover={
          <Image
            style={{
              borderRadius: "20px 20px 0px 0px",
              overflow: "hidden",
              height: "278px",
              objectFit: "cover",
            }}
            alt="example"
            src={image}
          />
        }
      >
        <Flex vertical={true}>
          <Meta title="Project Title" description="Short Description" />
          {/* <br></br> */}
          {/* <Meta description="Category" /> */}
        </Flex>
      </Card>
    </ConfigProvider>
  )
}
