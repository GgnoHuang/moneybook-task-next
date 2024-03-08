// "use client"
import { Layout, Button, Flex, ConfigProvider, Space, Card } from "antd"
const { Meta } = Card

import GetstartBtn from "../GetstartBtn/GetstartBtn"
import CardBox from "../CardBox/CardBox"

import styles from "./Content4.module.css"
import MemberCard from "../MemberCard/MemberCard"

export default function Content4() {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {},
        },
      }}
    >
      <Flex
        justify={"center"}
        align={"center"}
        vertical={true}
        className={styles.main}
        gap={"60px"}
      >
        <Flex
          justify={"center"}
          vertical={true}
          style={{ border: "3px yellow solid", height: "93px" }}
        >
          <p className={styles.slogan}>Discover our latest work</p>
          <p className={styles.text}>
            Explore our portfolio and see the latest and greatest projects that
            we've brought to life.
          </p>
        </Flex>

        <Flex gap="30px">
          <CardBox />

          <MemberCard />
        </Flex>
      </Flex>
    </ConfigProvider>
  )
}
