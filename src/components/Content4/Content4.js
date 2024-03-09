// "use client"
import { Layout, Button, Flex, ConfigProvider, Space, Card } from "antd"
const { Meta } = Card

import styles from "./Content4.module.css"
import MemberCard from "../MemberCard/MemberCard"
import useStore from "../../zustandStore"

export default function Content4() {
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
        gap={60}
      >
        <Flex
          // justify={"center"}
          justify={isMobileW ? "space-between" : "center"}
          vertical={true}
          className={styles.sloganContain}
        >
          <p className={styles.slogan}>
            Real Stories
            {isMobileW && <br />}
            from Satisfied Customers
          </p>
          <p className={styles.text}>
            See how our landing page ui kit is making an impact.
          </p>
        </Flex>
        <Flex gap={60} vertical={isMobileW ? true : false}>
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
    </div>
  )
}
