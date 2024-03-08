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
        }}
        type="primary"
      >
        Get Started
      </Button>
    </>
  )
}
