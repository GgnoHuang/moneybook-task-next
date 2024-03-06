import { Button, Flex, ConfigProvider, Space } from "antd"

import { Layout } from "antd"

const { Content } = Layout

import styles from "./Content1.module.css"

export default function Content1() {
  return (
    <>
      <Content className={styles.contnet1}>Content1</Content>
    </>
  )
}
