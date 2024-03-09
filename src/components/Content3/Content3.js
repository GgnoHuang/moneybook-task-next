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
    <div>
      <Flex
        justify={"center"}
        align={"center"}
        vertical={true}
        className={styles.main}
        gap={"30px"}
      >
        <Flex
          justify={"space-between"}
          vertical={true}
          className={styles.textBox}
        >
          {isMobileW ? (
            <p className={styles.slogan}>Selected Works</p>
          ) : (
            <p className={styles.slogan}>Discover our latest work</p>
          )}
          <p className={styles.text}>
            Explore our portfolio and see the latest projects that we've brought
            to life.
          </p>
        </Flex>

        <Flex gap="30px" vertical={isMobileW ? true : false}>
          <CardBox />
          <CardBox />
          <CardBox />
        </Flex>
      </Flex>
    </div>
  )
}
