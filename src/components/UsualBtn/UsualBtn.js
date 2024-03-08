import Image from "next/image"

import { Layout } from "antd"
const { Header } = Layout

// import styles from "./GetstartBtn.module.css"

import { Button, Flex, ConfigProvider, Space } from "antd"

export default function GetstartBtn({ textcontent, imgSrc }) {
  return (
    <>
      <Button
        style={{
          width: "275px",
          height: "90px",
          fontSize: "21px",
          lineHeight: "31.5px",
          fontWeight: "400",
          backgroundColor: "#FFFFFF",
          borderRadius: "20px",
          border: "1px #E5F4F2 solid",
          color: "#2D2D2D",
        }}
        type="primary"
      >
        <Flex align={"center"} gap={"20px"}>
          <Flex
            align={"center"}
            justify={"center"}
            style={{
              width: "50px",
              height: "50px",
              backgroundColor: "#E5F4F2",

              borderRadius: "12.2px",
            }}
          >
            <Image src={imgSrc} width={25.61} height={25.61} />
          </Flex>
          {textcontent}
        </Flex>
      </Button>
    </>
  )
}
