import { Layout } from "antd"
const { Header } = Layout

// import styles from "./HowitworkBtn.module.css"

import { Button, Flex, ConfigProvider, Space } from "antd"

export default function HowitworkBtn({
  width = "202px",
  backgroundColor,
  color,
  fontSize,
}) {
  return (
    <>
      <Button
        type="primary"
        style={{
          width: width,
          height: "60px",

          fontSize: fontSize,
          lineHeight: "24px",

          color: color,
          backgroundColor: backgroundColor,
          borderRadius: "20px",
        }}
      >
        How it works
      </Button>
    </>
  )
}
