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
          style={{ border: "0px yellow solid", height: "93px" }}
        >
          <p className={styles.slogan}>Real Stories from Satisfied Customers</p>
          <p className={styles.text}>
            See how our landing page ui kit is making an impact.
          </p>
        </Flex>
        <Flex gap={30}>
          <MemberCard
            imgsrc={"/member_1.png"}
            memberName="Lauren M."
            memberPosition="UI Designer @Boo"
          />
          <MemberCard
            imgsrc={"/member_2.png"}
            memberName="David B."
            memberPosition="Lead Designer @Creative"
          />
        </Flex>
      </Flex>
    </ConfigProvider>
  )
}
