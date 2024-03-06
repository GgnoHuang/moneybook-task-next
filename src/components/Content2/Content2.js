import { Button, Flex, ConfigProvider, Space } from "antd"

import { Layout } from "antd"

const { Content } = Layout

import styles from "./Content2.module.css"

export default function Content2() {
  return (
    <>
      <Content className={styles.contnet2}>Content1</Content>
    </>
  )
}
