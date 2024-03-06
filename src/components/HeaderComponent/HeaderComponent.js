import { Layout } from "antd"
const { Header } = Layout

import styles from "./HeaderComponent.module.css"

import { Button, Flex, ConfigProvider, Space } from "antd"

export default function HeaderComponent() {
  return (
    <>
      <Header className={styles.header}>Header</Header>
    </>
  )
}
