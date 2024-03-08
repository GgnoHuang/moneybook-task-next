import { Layout } from "antd"
const { Header } = Layout

import styles from "./HeaderComponent.module.css"

import { Button, Flex, ConfigProvider, Space } from "antd"
import GetstartBtn from "../GetstartBtn/GetstartBtn"

export default function HeaderComponent() {
  return (
    <>
      <Header className={styles.header}>
        {/* <Flex vertical={true}></Flex> */}
        <Flex
          justify={"space-between"}
          vertical={false}
          style={{ height: "100%" }}
        >
          <Flex align={"center"} className={styles.landingpage}>
            <p className={styles.landing}> Landing</p>
            Page
          </Flex>

          <Flex align={"center"} gap={"50px"}>
            <Button type="text" style={{ color: "#009379" }}>
              Contact
            </Button>
            <Flex gap={"20px"}>
              <Button
                type="primary"
                style={{
                  width: "202px",
                  height: "60px",
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "#009379",
                  backgroundColor: "#E5F4F2",
                  borderRadius: "20px",
                }}
              >
                How it works
              </Button>

              <GetstartBtn />
            </Flex>
          </Flex>
        </Flex>
      </Header>
    </>
  )
}
