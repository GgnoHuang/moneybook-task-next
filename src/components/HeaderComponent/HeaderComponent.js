import Image from "next/image"
// "use client"
import { Layout } from "antd"
const { Header } = Layout

import styles from "./HeaderComponent.module.css"

import { Button, Flex, ConfigProvider, Space } from "antd"
import GetstartBtn from "../GetstartBtn/GetstartBtn"
import HowitworkBtn from "../HowitworkBtn/HowitworkBtn"
import useStore from "../../zustandStore"

export default function HeaderComponent() {
  const { isMobileW } = useStore((state) => ({
    isMobileW: state.isMobileW,
  }))
  return (
    <>
      <div className={styles.header}>
        {isMobileW ? (
          <div className={styles.mobileHeader}>
            <Image
              style={{ marginRight: "6px" }}
              src="/Logo Mark.svg"
              width={32}
              height={32}
            />
            <GetstartBtn getStartIcon="arrow" />
          </div>
        ) : (
          <Flex
            className={styles.container}
            justify={"space-between"}
            vertical={false}
            style={{
              height: "100%",

              border: "2px blue solid",
            }}
          >
            <Flex align={"center"} className={styles.landingpage}>
              <Image
                style={{ marginRight: "6px" }}
                src="/Logo Mark.svg"
                width={32}
                height={32}
              />
              <p className={styles.landing}> Landing</p>
              Page
            </Flex>
            <Flex align={"center"} gap={"50px"}>
              <Button type="text" style={{ color: "#009379" }}>
                Contact
              </Button>
              <Flex gap={"20px"}>
                <HowitworkBtn
                  width="202px"
                  color="#009379"
                  fontSize="16px"
                  text="How it works"
                />
                <GetstartBtn getStartIcon="rocket" />
              </Flex>
            </Flex>
          </Flex>
        )}
      </div>
    </>
  )
}
