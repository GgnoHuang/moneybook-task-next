import Image from "next/image"
import { Layout } from "antd"
const { Header } = Layout

// import styles from "./GetstartBtn.module.css"

import { Button, Flex, ConfigProvider, Space } from "antd"

export default function GetstartBtn() {
  return (
    <>
      <Button
        style={{
          width: "221px",
          height: "60px",
          fontSize: "16px",
          lineHeight: "24px",
          backgroundColor: "#009379",
          borderRadius: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        type="primary"
      >
        <Image
          style={{ marginRight: "8px" }}
          src="/RocketLaunch.svg"
          width={20}
          height={20}
        />
        Get Started
      </Button>
    </>
  )
}
