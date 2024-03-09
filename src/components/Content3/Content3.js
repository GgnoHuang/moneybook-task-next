// "use client"
import { Flex, ConfigProvider, Card } from "antd"
const { Meta } = Card

import CardBox from "../CardBox/CardBox"

import styles from "./Content3.module.css"

import useStore from "../../zustandStore"

export default function Content3() {
  const { isMobileW } = useStore((state) => ({
    isMobileW: state.isMobileW,
  }))
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
          style={{ border: "0px yellow solid", height: "93px" }}
        >
          <p className={styles.slogan}>Discover our latest work</p>
          <p className={styles.text}>
            Explore our portfolio and see the latest and greatest projects that
            we've brought to life.
          </p>
        </Flex>

        <Flex gap="30px">
          <CardBox />
          <CardBox />
          <CardBox />
        </Flex>
      </Flex>
    </ConfigProvider>
  )
}
