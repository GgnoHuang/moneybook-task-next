import { Button, Flex, ConfigProvider, Space } from "antd"
import { Layout } from "antd"
const { Content } = Layout
import GetstartBtn from "../GetstartBtn/GetstartBtn"
import HowitworkBtn from "../HowitworkBtn/HowitworkBtn"

import styles from "./Content3.module.css"

export default function Content1() {
  return (
    <>
      <Content className={styles.contnet1} style={{ border: "1px red solid" }}>
        <Flex
          justify={"center"}
          vertical={true}
          style={{ width: "620px", border: "3px blue solid" }}
        >
          <p
            style={{
              margin: "0px",
              fontSize: "67px",
              fontWeight: "700",
              border: "1px red solid",
            }}
          >
            Create Engaging Landing Pages
          </p>
          <p
            style={{
              margin: "20px 0px 40px 0px",
              fontSize: "21px",
              border: "1px red solid",
            }}
          >
            Build beautiful landing pages in record time with Anima’s Landing
            Page UI kit for Figma. No code required!
          </p>
          <Flex gap="18px">
            <GetstartBtn />
            <HowitworkBtn
              width="202px"
              backgroundColor="#FFFFFF"
              color="#009379"
              fontSize="16px"
            />
          </Flex>
          {/* <Iphone /> */}
        </Flex>

        {/* <Iphone transform="scale(0.733)" display={"none"} /> */}
      </Content>
    </>
  )
}
